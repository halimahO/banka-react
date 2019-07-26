# Banka

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online, but must visit the branch to withdraw or deposit money.

---

[![Build Status](https://travis-ci.com/halimahO/banka-react.svg?branch=develop)](https://travis-ci.com/halimahO/banka-react)
[![Coverage Status](https://coveralls.io/repos/github/halimahO/banka-react/badge.svg?branch=ch-setup-test-167524682)](https://coveralls.io/github/halimahO/banka-react?branch=ch-setup-test-167524682)

## Features

- User (client) can sign up
- User (client) can login
- User (client) can create an account
- User (client) can view account transaction history
- User (client) can view a specific account transaction
- Staff (cashier) can debit user (client) account
- Staff (cashier) can credit user (client) account
- Admin/staff can view all user accounts
- Admin/staff can view a specific user account
- Admin/staff can activate or deactivate an account
- Admin/staff can delete a specific user account
- Admin can create staff and admin user accounts

---

## API Information

The API is hosted on [Heroku] https://my-banka-app.herokuapp.com/api/v1/

| METHOD | RESOURCE    | DESCRIPTION                     | ENDPOINTS                                  |
| ------ | ----------- | ------------------------------- | ------------------------------------------ |
| GET    | ----        | Home page                       | `/api/v1`                                  |
| POST   | Account     | Create an account               | `/api/v1/accounts`                         |
| PATCH  | Account     | Activate/deactivate an account  | `/api/v1/accounts/:accountNo`              |
| DELETE | Account     | Delete an account               | `/api/v1/accounts/:accountNo`              |
| GET    | Account     | Get a specific account          | `/api/v1/accounts/:accountNo`              |
| GET    | Account     | Get all accounts                | `/api/v1/accounts/`                        |
| GET    | Account     | Get all active accounts         | `/api/v1/accounts?status=active`           |
| GET    | Account     | Get all dormant accounts        | `/api/v1/accounts?status=dormant`          |
| GET    | Account     | Get account transaction history | `/api/v1/accounts/:accountNo/transactions` |
| POST   | User        | User signup                     | `/api/v1/auth/signup`                      |
| POST   | User        | User signin                     | `/api/v1/auth/signin`                      |
| POST   | User        | Create staff                    | `/api/v1/staff`                            |
| GET    | User        | Get all user accounts           | `/api/v1/user/:email/accounts`             |
| POST   | Transaction | Debit account                   | `/api/v1/transactions/:accountNo/debit`    |
| POST   | Transaction | Credit account                  | `/api/v1/transactions/:accountNo/credit`   |
| GET    | Transaction | Get specific transaction        | `/api/v1/transactions/:transactionId`      |

---

#### Clone

- Clone this repo to your local machine using `https://github.com/halimahO/Banka.git`

#### Setup

- Installing the project's dependencies:

> run the command below

```shell
$ npm install
```

> To start the server, run the command below

```shell
$ npm run dev
```

---

## Test

- To test the app

> run test using the command below

```shell
$ npm run test
```

---

## Acknowledgements

Andela

---

## Author

Halimah Oladosu
