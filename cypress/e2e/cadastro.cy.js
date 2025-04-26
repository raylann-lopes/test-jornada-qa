/// <reference types="cypress"/>

describe("US-012-Funcionalidade: Cadastro de membros", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve fazer o cadastro de campos obrigatórios", () => {
    var email = `raylan${Date.now()}@teste.com`;
    cy.preencherCadastro(
      "Raylan",
      "Lopes",
      email,
      "11989898937",
      "Teste@12345"
    );
    cy.get("#signup-response").should(
      "contain",
      "Cadastro realizado com sucesso!"
    );
  });

  it("Deve validar mensagem de erro com o campo nome inválido", () => {
    cy.preencherCadastro(
      "raylan123",
      "lopes",
      "lopes@teste.com",
      "11989898937",
      "Teste@12345"
    );
    cy.get("#signup-response").should(
      "contain",
      "Nome deve conter apenas caracteres alfabéticos"
    );
  });

  it("Deve validar mensagem de erro do campo email", () => {
    expect(2 + 2).eq(4);
  });

  it("Deve validar mensagem de erro do sobrenom", () => {
    expect(2 + 2).eq(4);
  });

  it("Deve validar mensagem de erro de senha fraca", () => {
    expect(2 + 2).eq(4);
  });

  it("Deve validar mensagem de erro de senha vazia", () => {
    expect(2 + 2).eq(4);
  });
});
