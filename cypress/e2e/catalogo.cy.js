describe('Funcionalidade: Catálogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve adicionar um livro à cesta ao clicar no botão', () => {
        // Exemplo proposital de seletor frágil demonstrado em aula.
        // Pode quebrar com alterações na estrutura do DOM.
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        // Resultado esperado
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve adicionar todos os livros à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
        // Resultado esperado
        cy.get('#cart-count').should('contain', 12)
    });

    it('Deve adicionar o primeiro livro à cesta', () => {
        cy.get('.btn-primary').first().click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', '1984')
    });

    it('Deve adicionar o último livro à cesta', () => {
        cy.get('.btn-primary').last().click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'O Alquimista')
    });

    it('Deve adicionar o terceiro livro à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia')
    });

    it('Deve adicionar o quinto livro à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });

    it('Deve acessar a página de detalhes do livro e adicioná-lo à cesta', () => {
        cy.contains('Harry Potter e a Pedra Filosofal').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        // Resultado esperado
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });

});