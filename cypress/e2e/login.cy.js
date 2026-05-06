import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        // Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', 'Usuário Padrão')
    });

    it('Deve fazer login com sucesso - Utilizando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')
    });

    it('Deve fazer login ADM com sucesso - Utilizando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

    it('Deve fazer login com sucesso - Utilizando importação de massa de dados', () => {
        cy.login(user.email, user.senha)
    });

});