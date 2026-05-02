# Hub de Leitura - Testes de Interface com Cypress

## Sobre o projeto

Este repositório contém a automação de testes de interface (UI) da aplicação **Hub de Leitura**, desenvolvida com **Cypress**.

O projeto foi criado como parte do curso da EBAC, com o objetivo de praticar a configuração do ambiente de testes e a implementação de cenários básicos de automação, seguindo exatamente a abordagem apresentada em aula.

---

## Objetivo

* Configurar um projeto de automação com Node.js e Cypress
* Validar o funcionamento do ambiente de testes
* Reproduzir os testes apresentados em aula
* Implementar cenários positivos e negativos
* Utilizar dados dinâmicos para execução dos testes
* Garantir a execução correta no ambiente local

---

## Tecnologias utilizadas

* Node.js
* Cypress
* JavaScript
* Faker (geração de dados dinâmicos)

---

## Estrutura do projeto

```
cypress/
  ├── e2e/
  │     ├── cadastro.cy.js
  │     ├── catalogo.cy.js
  │     └── contato.cy.js
  ├── fixtures/
  └── support/
cypress.config.js
package.json
```

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* Git
* Editor de código (recomendado: VS Code)
* Aplicação **Hub de Leitura** rodando localmente

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/eder-fr/hub-de-leitura-teste-ui.git
```

### 2. Acessar a pasta do projeto

```bash
cd hub-de-leitura-teste-ui
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o Cypress

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

---

## Configuração do ambiente

Os testes utilizam o ambiente local configurado no arquivo `cypress.config.js`:

```
baseUrl: "http://localhost:3000/"
```

Dessa forma, os testes utilizam caminhos relativos, como:

```
cy.visit('register.html')
```

---

## Testes implementados

Os testes foram desenvolvidos conforme os exemplos apresentados em aula, contemplando:

### Cadastro

* Cadastro com dados dinâmicos (JavaScript)
* Cadastro utilizando a biblioteca Faker

### Catálogo

* Adição de livros à cesta (diferentes posições)
* Interação com múltiplos elementos
* Navegação para página de detalhes

### Contato

* Envio de formulário com sucesso
* Validação de erros para campos obrigatórios:

  * Nome
  * E-mail
  * Assunto
  * Mensagem

---

## Observações técnicas

* O projeto segue a proposta didática da EBAC, mantendo a estrutura e abordagem apresentadas em aula
* Alguns seletores foram mantidos propositalmente como exemplos de seletores frágeis, para fins de aprendizado
* Os testes utilizam dados dinâmicos para evitar conflitos de execução
* A aplicação deve estar rodando localmente para execução dos testes

---

## Repositório

https://github.com/eder-fr/hub-de-leitura-teste-ui

---

## Autor

Éder Rocha

Projeto desenvolvido para prática de automação de testes de interface com Cypress.
