# QA Engineer Exam

Automated testing implementation for the Praxxys QA Engineer Exam.

## Configuration

1. Clone this repository.

   ```bash
   git clone https://github.com/yeye-droid/qa-engineer-ex.git
   cd qa-engineer-ex
   ```

2. Recreate the environment variable file.

   ```bash
   cp .env.example .env
   ```

3. Install Composer and npm dependencies.

   ```bash
   composer install
   npm install
   ```

4. Generate the application key.

   ```bash
   php artisan key:generate
   ```

5. Configure the database in `.env`.

   ```text
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. Execute database migrations and seeders.

   ```bash
   php artisan migrate --seed
   ```

7. Build the frontend assets.

   ```bash
   npm run build
   ```

8. Install Playwright browsers.

   ```bash
   npx playwright install
   ```

9. Run the local server.

   ```bash
   php artisan serve
   ```

## Running Tests

1. Run Laravel Dusk tests.

   ```bash
   php artisan dusk
   ```

2. Run Playwright tests.

   ```bash
   npx playwright test
   ```

3. Open the Playwright report.

   ```bash
   npx playwright show-report
   ```

## Technologies

* Laravel 10
* PHP 8.2
* MySQL/MariaDB
* Laravel Dusk
* PHPUnit
* Playwright
* TypeScript
* Chromium
* Firefox
* GitHub Actions
