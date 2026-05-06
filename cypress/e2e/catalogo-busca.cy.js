import catalog from "../fixtures/catalogo.json"

describe('Funcionalidade: Busca no catálogo', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve buscar o livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        // Resultado esperado
        cy.get('.card-title').should('contain', '1984')
    });

    it('Deve buscar um livro do arquivo de massa de dados com sucesso', () => {
        cy.get('#search-input').type(catalog[10].livro)
        // Resultado esperado
        cy.get('.card-title').should('contain', catalog[10].livro)
    });

});