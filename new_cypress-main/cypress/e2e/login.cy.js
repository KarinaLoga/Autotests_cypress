import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало', function() {
        cy.visit('/');
    });

    afterEach('Конец', function () {
        cy.get(result_page.close).should('be.visible');
       });

    it('Верный логин и верный пароль', function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
     });

     it('Восстановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click();
        cy.get(recovery_password_page.email).type('user@yandex.ru');
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
     });

     it('Верный логин и неверный пароль', function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('12345');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');
     });

     it('Валидация на наличие @', function () {
      cy.get(main_page.email).type('USERLOGIN1'); //Логин без @
      cy.get(main_page.password).type(data.password);
      cy.get(main_page.login_button).click();
      cy.get(result_page.title).contains('Нужно исправить проблему валидации')
   });
     
 })
