# Use the official PHP image as a parent image
FROM php:8.0-fpm

# Set the working directory
WORKDIR /var/www/html

# Copy the composer.lock and composer.json files into the working directory
COPY composer.lock composer.json ./

# Install the required dependencies
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the source code into the working directory
COPY . .

# Run composer install to install the PHP dependencies
RUN composer install --no-dev

# Set the appropriate permissions for the storage and bootstrap/cache directories
RUN chown -R www-data:www-data storage bootstrap/cache
RUN chmod -R 775 storage bootstrap/cache

# Expose port 9000 and start the PHP-FPM process
EXPOSE 9000
CMD ["php-fpm"]

# Use the official Node.js image as a parent image
FROM node:16-alpine3.14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the working directory
COPY package*.json ./

# Install the required dependencies
RUN npm install

# Copy the source code into the working directory
COPY . .

# Build the ReactJS app
RUN npm run build

# Expose port 3000 and start the server
EXPOSE 3000
CMD ["npm", "start"]
