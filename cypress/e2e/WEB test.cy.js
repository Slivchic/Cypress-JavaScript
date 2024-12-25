describe('Автотесты на клиенте', function () {

    it('Проверка авторизации', function () {
         cy.visit('login.qa.studio'); //Посетить сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
         cy.get('#loginButton').click(); //Нажать кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Вижу текст авторизации
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователям
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
     })

     it('Восстановление пароля', function () {
        cy.visit('login.qa.studio'); //Посетить сайт
        cy.get('#forgotEmailButton').click(); //Нажать кнопку забыли пароль
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Вижу текст восстановите пароль
        cy.get('#mailForgot').type('aleksandr@gmail.ru'); //Ввести почту
        cy.get('#restoreEmailButton').click(); //Нажать кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Вижу текст авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })
    it('Негативная авторизация', function () {
        cy.visit('login.qa.studio'); //Посетить сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввести верный логин
        cy.get('#pass').type('iLovemany'); //Ввести НЕверный пароль
        cy.get('#loginButton').click(); //Нажать кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Вижу текст неуспешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })
    it('Негативная авторизация 2', function () {
        cy.visit('login.qa.studio'); //Посетить сайт
        cy.get('#mail').type('aleksandr@gmail.com'); //Ввести НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
        cy.get('#loginButton').click(); //Нажать кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Вижу текст неуспешной авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })
    it('Негативная валидация', function () {
        cy.visit('login.qa.studio'); //Посетить сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
        cy.get('#loginButton').click(); //Нажать кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Вижу текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
    })
    it('Строчные буквы в логине', function () {
        cy.visit('login.qa.studio'); //Посетить сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввести верный логин с большими буквами
        cy.get('#pass').type('iLoveqastudio1'); //Ввести верный пароль
        cy.get('#loginButton').click(); //Нажать кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Вижу текст авторизации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден для пользователя
 })
})