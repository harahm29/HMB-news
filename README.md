<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://github.com/harahm29/HMB-news/blob/main/public/logo/log-240.svg" width="400" alt="HMB News"></a></p>

## About HMB News

This is a [HMB News] project bootstrapped with backend and frontend.

## backend and frontend Getting installtion

```bash
git clone https://github.com/harahm29/HMB-news.git
```

First, .env.example rename .env then please flow installtion steps

1. please install composer:

```bash
composer install
```

2. please install npm :

```bash
npm install
```

3.please setup you db access on .env file and migrate the db :

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=newlara
DB_USERNAME=root
DB_PASSWORD=

```bash
php artisan migrate
```

4.please setup you email access on .env file and use email in register, new password , etc :

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

## backend and frontend serve

1. please start frontend:

```bash
npm run dev
```

2. please start backend:

```bash
php artisan serve
```
