import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("eu estou logado como {string}", (user) => {
    localStorage.setItem("user", JSON.stringify({"id":3,"email":"sugmabals@gmail.com","token":"a","tokenExpiration":1681828114072,"cnpj":"1234"}))
});

Given("eu estou na página {string}", (page) => {
    cy.visit('products')
});