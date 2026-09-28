QA Engineer Exam

Automated testing implementation for the Praxxys QA Engineer Exam.

Installation
Clone the repository
git clone https://github.com/yeye-droid/qa-engineer-ex.git
cd qa-engineer-ex
Install PHP dependencies
composer install
Configure the environment
cp .env.example .env
php artisan key:generate
Prepare the database
php artisan migrate --seed
Install Node.js dependencies
npm install
Build frontend assets
npm run build
Install Playwright browsers
npx playwright install
Start the application
php artisan serve
Open the application

http://127.0.0.1:8000

Running Tests
Run Laravel Dusk tests
php artisan dusk
Run Playwright tests
npx playwright test
Open Playwright report
npx playwright show-report
