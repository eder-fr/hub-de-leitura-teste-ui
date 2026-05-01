describe('Funcionalidade: Catálogo de Livros', () => {
    
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        // Resultado esperado
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
        // Resultado esperado
        cy.get('#cart-count').should('contain', 12)
    });

    it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', '1984')
    });

    it('Deve clicar no último botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'O Alquimista')
    });

    it('Deve clicar no terceiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia')
    });

    it('Deve clicar no quinto botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    });

    it('Deve clicar no nome do livro e direcionar para a tela desse livro', () => {
        cy.contains('Harry Potter e a Pedra Filosofal').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        // Resultado esperado
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });
    
});