/* eslint-disable cypress/no-unnecessary-waiting */
import { expect } from 'chai'
import { initMockServer } from 'e2e/mock'
import { User } from 'src/modules/gql/generated'

const formSelector = 'form[role=signin]'
const formSubmitSelector = `${formSelector} button[type=submit]`

const submitForm = () => {
  return cy.get(formSubmitSelector).click()
}

const getInputField = async (name: string) => {
  return new Promise<HTMLInputElement>((resolve) => {
    cy.get<HTMLInputElement>(`${formSelector} input[name="${name}"]`).then(
      (nodes) => {
        expect(nodes.length).equal(1)

        resolve(nodes[0])
      }
    )
  })
}

describe('Sign in', () => {
  beforeEach(() => {
    initMockServer({
      authed: false,
    })
  })

  before(() => {
    cy.visit('/signin')
  })

  after(() => {
    cy.mockNetworkReset()
  })

  it('Check error messages', async () => {
    submitForm()

    await getInputField('username').then((input) => {
      expect(input?.parentElement?.parentElement?.lastChild?.textContent).equal(
        'Обязательное поле'
      )
    })

    await getInputField('password').then((input) => {
      expect(input?.parentElement?.parentElement?.lastChild?.textContent).equal(
        'Обязательное поле'
      )
    })
  })

  it('Submit form', () => {
    cy.get('input[name=username]').type('username')
    cy.get('input[name=password]').type('password')

    const user: User = {
      id: 'test-user-1',
      active: true,
      blocked: false,
      showEmail: true,
      showFullname: true,
      createdAt: new Date('2022/03/31'),
      updatedAt: new Date('2022/03/31'),
      username: 'test-user',
      fullname: 'Test User',
    }

    cy.mockNetworkAdd({
      Mutation: () => ({
        signin: () => {
          return {
            success: true,
            errors: [],
            data: user,
            token: 'foo-token',
          }
        },
      }),
      Query: () => ({
        me: () => {
          return user
        },
      }),
    })

    submitForm()

    cy.get('h3').contains('Вы авторизованы как test-user')
  })
})

export default true
