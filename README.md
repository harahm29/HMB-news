<p align="center"><a href="https://imharsh.web.app/" target="_blank"><img src="https://github.com/harahm29/HMB-news/blob/main/public/logo/log-240.svg" width="400" alt="HMB News"></a></p>

## About HMB News

HMB News is a web application that allows users to read news articles from various sources, including NewsAPI, The Guardian, and New York Times. This project is built with ReactJS, Laravel 9, and Tailwind CSS.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/harahm29/HMB-news.git
```

2. Rename `.env.example` to `.env`

3. Install composer:

```bash
composer install
```

4. Install npm:

```bash
npm install
```

5. Configure your database access in the .env file, and then run the migrations :

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=newlara
DB_USERNAME=root
DB_PASSWORD=

```bash
php artisan migrate
```

6 .Configure your email settings in the .env file to enable registration, password reset, and other email-based features.:

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

## Usage

To start using HMB News, follow these steps:

1. Start the frontend server:

```bash
npm run dev
```

2. Start the backend server:

```bash
php artisan serve
```

3. Open your web browser and go to http://localhost:8000 to access the HMB News web application.

## Contributing

If you'd like to contribute to HMB News, please fork the repository and create a pull request with your changes. Before submitting your pull request, please ensure that your changes are thoroughly tested and that the project is still functional.
