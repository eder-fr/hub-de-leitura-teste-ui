  describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')

  });
  it('Deve validar mensagem de erro ao fazer envio sem preencher campo Nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

  });
  it('Deve validar mensagem de erro ao fazer envio sem preencher campo E-mail', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')

  });
  it('Deve validar mensagem de erro ao fazer envio sem selecionar o Assunto', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')

  });
  it('Deve validar mensagem de erro ao fazer envio sem preencher a Mensagem', () => {
    cy.get('[name="name"]').type('Elmo Code')
    cy.get('[name="email"]').type('elmo@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')

  });

})