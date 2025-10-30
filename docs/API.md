# API Documentation

This document describes the API endpoints available in the tutoring landing page application.

## Base URL

- **Development**: `http://localhost:3000/api`
- **Production**: `https://your-domain.com/api`

## Authentication

Currently, all endpoints are public and do not require authentication.

## Content Endpoints

### Get All Content

**GET** `/api/content/index`

Returns all content data in a single response, including subjects, teachers, FAQ, and reviews.

#### Response

```json
{
  "success": true,
  "data": {
    "subjects": [
      {
        "id": "matematyka",
        "name": "Matematyka",
        "description": "Korepetycje z matematyki na wszystkich poziomach...",
        "icon": "/images/icons/math.svg",
        "levels": ["podstawowy", "średni", "matura", "studia"],
        "priceFrom": 45,
        "link": "/matematyka"
      }
    ],
    "teachers": [
      {
        "id": "teacher-1",
        "name": "Jan Kowalski",
        "photo": "/images/teachers/jan-kowalski.jpg",
        "subjects": ["matematyka", "fizyka"],
        "experience": 5,
        "education": "Politechnika Warszawska",
        "description": "Doświadczony nauczyciel matematyki..."
      }
    ],
    "faq": [
      {
        "id": "faq-1",
        "question": "Jak długo trwają zajęcia?",
        "answer": "Standardowe zajęcia trwają 60 minut.",
        "category": "general"
      }
    ],
    "reviews": [
      {
        "id": "review-1",
        "name": "Anna Nowak",
        "photo": "/images/students/anna-nowak.jpg",
        "rating": 5,
        "comment": "Doskonałe korepetycje!",
        "subject": "Matematyka",
        "date": "2023-10-01"
      }
    ],
    "lastUpdated": "2023-10-29T10:30:00.000Z",
    "stats": {
      "subjectsCount": 8,
      "teachersCount": 3,
      "faqCount": 10,
      "reviewsCount": 15,
      "averageRating": 4.8
    }
  }
}
```

#### Error Response

```json
{
  "statusCode": 500,
  "statusMessage": "Failed to load content data",
  "data": {
    "error": "Error message details"
  }
}
```

### Get Subjects

**GET** `/api/content/subjects`

Returns information about all available subjects.

#### Response

```json
{
  "success": true,
  "data": {
    "subjects": [
      {
        "id": "matematyka",
        "name": "Matematyka",
        "description": "Korepetycje z matematyki na wszystkich poziomach - od podstaw po studia.",
        "icon": "/images/icons/math.svg",
        "levels": ["podstawowy", "średni", "matura", "studia"],
        "priceFrom": 45,
        "link": "/matematyka"
      },
      {
        "id": "informatyka",
        "name": "Informatyka",
        "description": "Nauka programowania, przygotowanie do matury z informatyki.",
        "icon": "/images/icons/computer.svg",
        "levels": ["podstawy", "programowanie", "matura"],
        "priceFrom": 55,
        "link": "/informatyka"
      }
    ],
    "count": 8,
    "lastUpdated": "2023-10-29T10:30:00.000Z"
  }
}
```

### Get Teachers

**GET** `/api/content/teachers`

Returns profiles of all tutoring staff.

#### Response

```json
{
  "success": true,
  "data": {
    "teachers": [
      {
        "id": "teacher-1",
        "name": "Dr. Jan Kowalski",
        "photo": "/images/teachers/jan-kowalski.jpg",
        "subjects": ["matematyka", "fizyka"],
        "experience": 8,
        "education": "Doktor nauk matematycznych, Politechnika Warszawska",
        "description": "Specjalizuje się w przygotowaniu do matury rozszerzonej z matematyki..."
      }
    ],
    "count": 3,
    "lastUpdated": "2023-10-29T10:30:00.000Z"
  }
}
```

### Get FAQ

**GET** `/api/content/faq`

Returns frequently asked questions and answers.

#### Query Parameters

- `category` (optional): Filter by category (e.g., "general", "pricing", "lessons")

#### Response

```json
{
  "success": true,
  "data": {
    "faq": [
      {
        "id": "faq-1",
        "question": "Jak długo trwają zajęcia?",
        "answer": "Standardowe zajęcia trwają 60 minut. Możliwe są również sesje 90-minutowe dla uczniów przygotowujących się do matury.",
        "category": "general"
      }
    ],
    "categories": ["general", "pricing", "lessons", "technology"],
    "count": 12,
    "lastUpdated": "2023-10-29T10:30:00.000Z"
  }
}
```

### Get Reviews

**GET** `/api/content/reviews`

Returns customer reviews and testimonials.

#### Query Parameters

- `subject` (optional): Filter by subject
- `rating` (optional): Filter by minimum rating
- `limit` (optional): Limit number of results

#### Response

```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": "review-1",
        "name": "Anna Kowalska",
        "photo": "/images/students/anna-kowalska.jpg",
        "rating": 5,
        "comment": "Fantastyczne korepetycje! Pan Jan świetnie wyjaśnia trudne zagadnienia.",
        "subject": "Matematyka",
        "date": "2023-10-15"
      }
    ],
    "averageRating": 4.8,
    "totalReviews": 23,
    "ratingDistribution": {
      "5": 18,
      "4": 4,
      "3": 1,
      "2": 0,
      "1": 0
    },
    "lastUpdated": "2023-10-29T10:30:00.000Z"
  }
}
```

## Health Check

### Check API Health

**GET** `/api/health`

Simple health check endpoint to verify API availability.

#### Response

```json
{
  "status": "ok",
  "timestamp": "2023-10-29T10:30:00.000Z",
  "version": "1.0.0",
  "uptime": 3600
}
```

## Data Types

### Subject

```typescript
interface Subject {
  id: string;           // Unique identifier
  name: string;         // Display name
  description: string;  // Detailed description
  icon: string;         // Icon image path
  levels: string[];     // Available levels
  priceFrom: number;    // Starting price in PLN
  link: string;         // Page link
}
```

### Teacher

```typescript
interface Teacher {
  id: string;           // Unique identifier
  name: string;         // Full name
  photo: string;        // Photo image path
  subjects: string[];   // Taught subjects
  experience: number;   // Years of experience
  education: string;    // Educational background
  description: string;  // Biography and approach
}
```

### FAQ

```typescript
interface FAQ {
  id: string;           // Unique identifier
  question: string;     // Question text
  answer: string;       // Answer text
  category: string;     // Category for filtering
}
```

### Review

```typescript
interface Review {
  id: string;           // Unique identifier
  name: string;         // Student/parent name
  photo?: string;       // Optional photo path
  rating: number;       // Rating 1-5
  comment: string;      // Review text
  subject: string;      // Subject of tutoring
  date: string;         // Date in ISO format
}
```

## Error Handling

All endpoints follow consistent error handling:

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request (invalid parameters)
- `404` - Not Found (endpoint doesn't exist)
- `500` - Internal Server Error

### Error Response Format

```json
{
  "statusCode": 500,
  "statusMessage": "Error description",
  "data": {
    "error": "Detailed error message",
    "timestamp": "2023-10-29T10:30:00.000Z"
  }
}
```

## Rate Limiting

Currently, no rate limiting is implemented. For production deployment, consider implementing rate limiting based on:

- IP address
- User session
- API key (if authentication is added)

## Caching

### Client-Side Caching

The frontend implements caching through composables:

- Data is cached in memory during the session
- Cache is invalidated when refresh methods are called
- Cache prevents unnecessary API calls

### Server-Side Caching

Consider implementing:

- Redis for API response caching
- CDN for static content
- Database query caching

## Content Updates

### Manual Updates

Content is stored in YAML files in the `/content` directory:

1. Edit the appropriate YAML file
2. Restart the server for changes to take effect
3. No database synchronization required

### Automated Updates

For production environments, consider:

- Git hooks for automatic deployments
- Content management interface
- Database storage with migration system

## Security Considerations

### Input Validation

- All input parameters are validated using Zod schemas
- XSS protection through output encoding
- CSRF protection for form submissions

### Data Privacy

- No personal data is stored without consent
- Review submissions should be anonymized
- GDPR compliance for EU users

## Monitoring

### Recommended Monitoring

- API response times
- Error rates and types
- Content loading performance
- User engagement metrics

### Logging

- Request/response logging
- Error logging with stack traces
- Performance metrics logging
- User interaction logging