import { Prisma, PrismaClient } from '@prisma/client'
import { createPassword } from '../server/nexus/types/User/resolvers'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = []

async function main() {
  // eslint-disable-next-line no-console
  console.log(`Start seeding ...`)

  const password = process.env.SUDO_PASSWORD
  if (!password) {
    throw new Error('SUDO_PASSWORD env is empty')
  } else {
    userData.push({
      username: 'admin',
      email: 'admin@localhost',
      password: await createPassword(password),
      sudo: true,
    })
  }

  for (const u of userData) {
    await prisma.user
      .create({
        data: u,
      })
      .then((user) => {
        // eslint-disable-next-line no-console
        console.log(`Created user with id: ${user.id}`)
      })
      .catch(console.error)
  }
  // eslint-disable-next-line no-console
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
