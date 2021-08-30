/**
 * Based on https://github.com/guileen/node-sendmail
 * The MIT License (MIT)
 * Copyright (c) 2014 -2017 Guileen
 * Copyright (c) 2016 -2018 Green Pioneer
 * Copyright (c) 2018 Fi1osof
 */

import { createConnection, Socket } from 'net'
import { resolveMx } from 'dns'
import dkimSigner from 'dkim-signer'
import mailcomposer from 'mailcomposer'

type Attachment = {
  type: string
  filename: string
  content: string
}

type Mail = {
  // to: string
  // cc?: string
  // bcc?: string
  // from: string
  from: string
  to: string
  cc?: string
  bcc?: string
  replyTo?: string
  returnTo?: string
  subject: string

  // default 'text/plain', 'text/html'
  type?: string

  // default 'utf-8'
  charset?: string

  // default 'base64'
  encoding?: string

  // default timestamp + from
  id?: string
  headers?: Record<string, unknown>
  content?: string
  html?: string
  attachments?: Attachment[]
}

const { DKIMSign } = dkimSigner

const CRLF = '\r\n'

function dummy() {
  //
}

export type SendmailProps = {
  logger?: {
    debug: (message?: string) => void
    info: (message?: string) => void
    warn: (message?: string) => void
    error: (message?: string) => void
  }
  silent?: boolean
  dkim?: {
    privateKey: string
    keySelector: string
  }
  devPort?: number
  devHost?: string
  smtpPort?: number
  smtpHost?: string
}

/**
 * Class Sendmail
 */
export const Sendmail = function (options: SendmailProps) {
  options = options || {}
  const logger = options.logger ||
    (options.silent && {
      debug: dummy,
      info: dummy,
      warn: dummy,
      error: dummy,
    }) || {
      // eslint-disable-next-line no-console
      debug: console.log,
      // eslint-disable-next-line no-console
      info: console.info,
      warn: console.warn,
      error: console.error,
    }
  const dkimPrivateKey = (options.dkim || {}).privateKey
  const dkimKeySelector = (options.dkim || {}).keySelector || 'dkim'
  const devPort = options.devPort || -1
  const devHost = options.devHost || 'localhost'
  const smtpPort = options.smtpPort || 25
  const smtpHost = options.smtpHost || -1
  /*
   *   邮件服务返回代码含义 Mail service return code Meaning
   *   500   格式错误，命令不可识别（此错误也包括命令行过长）format error, command unrecognized (This error also includes command line too long)
   *   501   参数格式错误 parameter format error
   *   502   命令不可实现 command can not be achieved
   *   503   错误的命令序列 Bad sequence of commands
   *   504   命令参数不可实现 command parameter can not be achieved
   *   211   系统状态或系统帮助响应 System status, or system help response
   *   214   帮助信息 help
   *   220   服务就绪 Services Ready
   *   221   服务关闭传输信道 Service closing transmission channel
   *   421   服务未就绪，关闭传输信道（当必须关闭时，此应答可以作为对任何命令的响应）service is not ready to close the transmission channel (when it is necessary to close, this response may be in response to any command)
   *   250   要求的邮件操作完成 requested mail action completed
   *   251   用户非本地，将转发向 non-local users will be forwarded to
   *   450   要求的邮件操作未完成，邮箱不可用（例如，邮箱忙）Mail the required operation 450 unfinished, mailbox unavailable (for example, mailbox busy)
   *   550   要求的邮件操作未完成，邮箱不可用（例如，邮箱未找到，或不可访问）Mail action not completed the required 550 mailbox unavailable (eg, mailbox not found, no access)
   *   451   放弃要求的操作；处理过程中出错 waiver operation; processing error
   *   551   用户非本地，请尝试 non-local user, please try
   *   452   系统存储不足，要求的操作未执行 Less than 452 storage system, requiring action not taken
   *   552   过量的存储分配，要求的操作未执行 excess storage allocation requires action not taken
   *   553   邮箱名不可用，要求的操作未执行（例如邮箱格式错误） mailbox name is not available, that the requested operation is not performed (for example, mailbox format error)
   *   354   开始邮件输入，以.结束 Start Mail input to. End
   *   554   操作失败  The operation failed
   *   535   用户验证失败 User authentication failed
   *   235   用户验证成功 user authentication is successful
   *   334   等待用户输入验证信息 waits for the user to enter authentication information
   */

  function getHost(email: string) {
    const m = /[^@]+@([\w\d\-.]+)/.exec(email)
    return m && m[1]
  }

  function groupRecipients(recipients: string[]) {
    const groups: Record<string, string[]> = {}
    let host: string | null | undefined
    const recipients_length = recipients.length
    for (let i = 0; i < recipients_length; i++) {
      host = getHost(recipients[i])
      if (host) {
        ;(groups[host] || (groups[host] = [])).push(recipients[i])
      }
    }
    return groups
  }

  /**
   * connect to domain by Mx record
   */
  function connectMx(
    domain: string,
    callback: (err: Error | null, socket?: Socket) => void
  ) {
    if (devPort === -1) {
      // not in development mode -> search the MX
      resolveMx(domain, function (err, data) {
        if (err) {
          return callback(err)
        }

        data.sort(function (a, b) {
          return a.priority < b.priority ? 1 : a.priority > b.priority ? -1 : 0
        })
        logger.debug('mx resolved: ', data)

        if (!data || data.length === 0) {
          return callback(new Error('can not resolve Mx of <' + domain + '>'))
        }
        if (smtpHost !== -1) {
          data.push({ exchange: smtpHost, priority: 1000 })
        }

        const connected = false

        function tryConnect(i: number) {
          logger.debug('Try to connect: ', i, data[i].exchange)

          if (i >= data.length)
            return callback(new Error('can not connect to any SMTP server'))

          // Fix loop connection
          if (connected) {
            logger.warn('Already connected')
            return
          }

          const socket = createConnection(smtpPort, data[i].exchange)

          socket.setTimeout(5000)
          socket.on('timeout', () => {
            const err = new Error('socket timeout')
            socket.destroy(err)
            // logger.error('Error on connectMx for: ', data[i], err);
            // tryConnect(++i);
          })

          socket.on('error', function (err) {
            logger.error('Error on connectMx for: ', data[i], err)
            tryConnect(++i)
          })

          socket.on('connect', function () {
            logger.debug('MX connection created: ', data[i].exchange)
            socket.removeAllListeners('error')
            callback(null, socket)
          })
        }

        tryConnect(0)
      })
    } else {
      // development mode -> connect to the specified devPort on devHost
      const socket = createConnection(devPort, devHost)

      socket.on('error', function (err) {
        callback(
          new Error(
            'Error on connectMx (development) for "' +
              devHost +
              ':' +
              devPort +
              '": ' +
              err
          )
        )
      })

      socket.on('connect', function () {
        logger.debug(
          'MX (development) connection created: ' + devHost + ':' + devPort
        )
        socket.removeAllListeners('error')
        callback(null, socket)
      })
    }
  }

  function sendToSMTP(
    domain: string,
    srcHost: string,
    from: string,
    recipients: string[],
    body: string,
    cb: (err?: Error | null, msg?: string) => void
  ) {
    const callback =
      typeof cb === 'function'
        ? cb
        : function () {
            //
          }
    connectMx(domain, function (err, sock) {
      if (!sock) {
        return callback(new Error('sock is empty'))
      }

      if (err) {
        logger.error('error on connectMx', err.stack)
        return callback(err)
      }

      function w(s: string) {
        logger.debug('send ' + domain + '>' + s)

        if (!sock) {
          return callback(new Error('sock is empty'))
        }

        sock.write(s + CRLF)
      }

      sock.setEncoding('utf8')

      sock.on('data', function (chunk) {
        data += chunk
        parts = data.split(CRLF)
        const parts_length = parts.length - 1
        for (let i = 0, len = parts_length; i < len; i++) {
          onLine(parts[i])
        }
        data = parts[parts.length - 1]
      })

      sock.on('close', function (_err: Error) {
        logger.debug('socket closed ' + domain)
        // callback(err)
      })

      sock.on('error', function (err) {
        logger.error('fail to connect ' + domain)
        callback(err)
      })

      let data = ''
      let step = 0
      let loginStep = 0
      const queue: string[] = []
      const login: string[] = []
      let parts
      let cmd

      /*
       if(mail.user && mail.pass){
         queue.push('AUTH LOGIN');
         login.push(new Buffer(mail.user).toString("base64"));
         login.push(new Buffer(mail.pass).toString("base64"));
       }
       */

      queue.push('MAIL FROM:<' + from + '>')
      const recipients_length = recipients.length
      for (let i = 0; i < recipients_length; i++) {
        queue.push('RCPT TO:<' + recipients[i] + '>')
      }
      queue.push('DATA')
      queue.push('QUIT')
      queue.push('')

      function response(code: number, msg: string) {
        logger.info('response', code, msg)

        switch (code) {
          case 220:
            //*   220   on server ready
            //*   220   服务就绪
            if (/\besmtp\b/i.test(msg)) {
              // TODO:  determin AUTH type; auth login, auth crm-md5, auth plain
              cmd = 'EHLO'
            } else {
              cmd = 'HELO'
            }
            w(cmd + ' ' + srcHost)
            break

          case 221: // bye
          case 235: // verify ok
          case 250: // operation OK
          case 251: // foward
            if (step === queue.length - 1) {
              logger.info('OK:', code, msg)
              callback(null, msg)
            }
            w(queue[step])
            step++
            break

          case 354: // start input end with . (dot)
            logger.info('sending mail', body)
            w(body)
            w('')
            w('.')
            break

          case 334: // input login
            w(login[loginStep])
            loginStep++
            break

          default:
            if (code >= 400) {
              logger.warn('SMTP responds error code', code)
              callback(new Error('SMTP code:' + code + ' msg:' + msg))
              sock && sock.end()
            }
        }
      }

      let msg = ''

      function onLine(line: string) {
        logger.debug('recv ' + domain + '>' + line)

        msg += line + CRLF

        if (line[3] === ' ') {
          // 250-information dash is not complete.
          // 250 OK. space is complete.
          response(parseInt(line), msg)
          msg = ''
        }
      }
    })
  }

  function getAddress(address: string) {
    return address.replace(/^.+</, '').replace(/>\s*$/, '').trim()
  }

  function getAddresses(addresses: string[] | string) {
    const results = []
    if (!Array.isArray(addresses)) {
      addresses = addresses.split(',')
    }

    const addresses_length = addresses.length
    for (let i = 0; i < addresses_length; i++) {
      results.push(getAddress(addresses[i]))
    }
    return results
  }

  /**
   * sendmail directly
   *
   * @param mail {object}
   *             from
   *             to
   *             cc
   *             bcc
   *             replyTo
   *             returnTo
   *             subject
   *             type         default 'text/plain', 'text/html'
   *             charset      default 'utf-8'
   *             encoding     default 'base64'
   *             id           default timestamp+from
   *             headers      object
   *             content
   *             attachments
   *               [{
   *                 type
   *                 filename
   *                 content
   *               }].
   *
   * @param callback function(err, domain).
   *
   */
  function sendmail(
    mail: Mail,
    callback: (err?: Error | null, message?: string) => void
  ) {
    const mailMe = new mailcomposer(mail)
    let recipients: string[] = []
    if (mail.to) {
      recipients = recipients.concat(getAddresses(mail.to))
    }

    if (mail.cc) {
      recipients = recipients.concat(getAddresses(mail.cc))
    }

    if (mail.bcc) {
      recipients = recipients.concat(getAddresses(mail.bcc))
    }

    const groups = groupRecipients(recipients)

    logger.info('sending groups', groups)

    const from = getAddress(mail.from)
    const srcHost = getHost(from)

    if (!srcHost) {
      return callback(new Error('srcHost is empty'))
    }

    mailMe.build(function (err: Error | null, message: string) {
      if (err) {
        logger.error('Error on creating message : ', err)
        callback(err)
        return
      }
      try {
        if (dkimPrivateKey) {
          const signature = DKIMSign(message, {
            privateKey: dkimPrivateKey,
            keySelector: dkimKeySelector,
            domainName: srcHost,
          })
          message = signature + '\r\n' + message
        }
        for (const domain in groups) {
          logger.info('sending send to group domain', domain)

          sendToSMTP(domain, srcHost, from, groups[domain], message, callback)
        }
      } catch (error) {
        callback(error as Error)
      }
    })
  }

  return sendmail
}
