#QA Engineer Exam

Automated testing implementation for the Praxxys QA Engineer Exam.

Installation
1.	Clone the repository
git clone https://github.com/yeye-droid/qa-engineer-ex.git
cd qa-engineer-ex
2.	Install PHP dependencies
composer install
3.	Configure the environment
cp .env.example .env
php artisan key:generate
4.	Prepare the database
php artisan migrate --seed
5.	Install Node.js dependencies
npm install
6.	Build frontend assets
npm run build
7.	Install Playwright browsers
npx playwright install
8.	Start the application
php artisan serve
9.	Open the application
http://127.0.0.1:8000

Running Tests
1.	Run Laravel Dusk tests
php artisan dusk
2.	Run Playwright tests
npx playwright test
3.	Open Playwright report
npx playwright show-report
