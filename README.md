
# Job Board API

A RESTful API built with Laravel 10+ for a Job Board platform where Companies can post jobs and Candidates can apply.

## Features

### Core Features
- Separate authentication for Companies and Candidates using Laravel Passport
- Job posting management for Companies (CRUD operations)
- Public job listings with filtering capabilities
- Job application system with file upload
- Queue processing for resume uploads
- Comprehensive API documentation via Postman collection

### Bonus Features
- Response caching for improved performance
- Dashboard analytics for both Companies and Candidates

## Technical Stack

- Laravel 10+
- MySQL
- Laravel Passport (OAuth2)
- Laravel Queues
- Laravel Cache
- Composer

## Setup Instructions

1. **Clone the repository**
```bash
git clone [repository-url]
cd job-board-api
```

2. **Install Dependencies**
```bash
composer install
```

3. **Environment Setup**
```bash
cp .env.example .env
php artisan key:generate
```

4. **Configure Database**
- Update `.env` with your database credentials
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

5. **Run Migrations**
```bash
php artisan migrate
```

6. **Setup Passport**
```bash
php artisan passport:install
```

7. **Configure Queue Driver**
- Update `.env` to set your preferred queue driver
```bash
QUEUE_CONNECTION=database
```

8. **Start Queue Worker**
```bash
php artisan queue:work
```

9. **Cache Configuration**
```bash
php artisan config:cache
php artisan route:cache
```

## Design Choices

1. **Separate Authentication**
   - Companies and Candidates are kept as separate entities to maintain clear separation of concerns
   - Enables different authentication flows and permissions for each user type

2. **Queue Implementation**
   - File uploads are processed in the background to improve response times
   - Prevents timeout issues with large files

3. **Caching Strategy**
   - Public job listings are cached for 5 minutes
   - Improves performance for frequently accessed endpoints

4. **Soft Deletes**
   - Implemented for jobs to maintain data integrity
   - Allows for potential recovery of deleted posts

## Assumptions & Future Improvements

### Assumptions
- Companies and Candidates require email verification
- One application per candidate per job posting
- Resume files are limited to specific formats (PDF, DOC, DOCX)
- Job postings require approval before publishing

### Potential Improvements
1. **Search Enhancement**
   - Implement Elasticsearch for better full-text search
   - Add more advanced filtering options

2. **Performance Optimizations**
   - Implement rate limiting for API endpoints
   - Add request caching for other frequently accessed endpoints

3. **Feature Additions**
   - Job categories and tags
   - Candidate profile with skills matrix
   - Company verification system
   - Email notifications for application status updates

4. **Security Enhancements**
   - Implement two-factor authentication
   - Add API request signing for sensitive endpoints

## API Documentation

The complete API documentation is available in the included Postman collection. Import the collection file from the `docs` folder to view all available endpoints and their usage.
