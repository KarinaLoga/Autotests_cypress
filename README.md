# Autotests_cypress
Автотесты на клиентскую часть на Cypress JavaScript

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Проверка флоу восстановления пароля
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине

## Детали реализации

1. baseUrl вынесен в переменные в файл конфиг
![image](https://raw.githubusercontent.com/KarinaLoga/Autotests_cypress/refs/heads/main/Screenshot_1.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/KarinaLoga/Autotests_cypress/refs/heads/main/Screenshot_5.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://raw.githubusercontent.com/KarinaLoga/Autotests_cypress/refs/heads/main/Screenshot_2.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/KarinaLoga/Autotests_cypress/refs/heads/main/Screenshot_6.png)
