describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve enviar o formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')
  });

  it('Deve exibir erro ao enviar formulário sem preencher o nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
  });

  it('Deve exibir erro ao enviar formulário sem preencher o e-mail', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve exibir erro ao enviar formulário sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

  it('Deve exibir erro ao enviar formulário sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });

})