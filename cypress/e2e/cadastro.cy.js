import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve cadastrar usuário com sucesso utilizando dados dinâmicos', () => {
        let email = `test${Date.now()}@abc.com`
        cy.get('#name').type('User Test')
        cy.get('#email').type(email)
        cy.get('#phone').type('11198765432')
        cy.get('#password').type('Test@123!')
        cy.get('#confirm-password').type('Test@123!')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve cadastrar usuário com sucesso utilizando dados gerados pelo Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11198765432')
        cy.get('#password').type('Test@123!')
        cy.get('#confirm-password').type('Test@123!')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso - Utilizando comando customizado', () => {
        let email = `test${Date.now()}@abc.com`
        cy.preencherCadastro(
            'User Test',
            email,
            '11198765432',
            'Test@123!',
            'Test@123!'
        )
        // Resultado esperado
        cy.url().should('include', 'dashboard')
    });

});