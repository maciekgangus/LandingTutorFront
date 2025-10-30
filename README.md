# Korepetycje Landing Page

Modern landing page for Polish tutoring services built with Nuxt.js, TypeScript, and Tailwind CSS.

## Project Overview

This is a professional landing page for a tutoring service offering personalized lessons in various subjects including mathematics, computer science, English, and other academic subjects. The project features a modern, responsive design with interactive sections, subject-specific pages, and a content management system.

### Key Features

- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Subject-Specific Pages**: Dedicated landing pages for mathematics, computer science, and English
- **Teachers Showcase**: Professional profiles of tutoring staff
- **Content Management**: YAML-based content system for easy updates
- **Interactive Animations**: Smooth scroll animations and transitions
- **SEO Optimized**: Meta tags, sitemap, and robots.txt
- **Performance Optimized**: Image optimization, code splitting, and compression
- **Contact Forms**: Interactive contact and booking forms

## Technology Stack

### Frontend
- **Nuxt.js 3** - Vue.js framework for production
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **VueUse** - Collection of Vue composition utilities

### Backend
- **Nitro** - Universal web server
- **YAML** - Human-readable data serialization
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

### SEO & Performance
- **@nuxtjs/sitemap** - Automatic sitemap generation
- **@nuxtjs/robots** - Robots.txt management
- **@nuxt/image** - Optimized image handling

## Project Structure

```
├── app.vue                    # Root Vue component
├── nuxt.config.ts            # Nuxt configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── assets/                   # Static assets
│   └── css/                 # Global styles and animations
├── components/              # Vue components
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page section components
│   └── layout/             # Layout components
├── composables/            # Vue composables
│   ├── useContent.ts       # Content management
│   ├── useSubjects.ts      # Subject data handling
│   ├── useTeachers.ts      # Teacher data handling
│   └── useScrollAnimation.ts # Animation utilities
├── content/                # YAML content files
│   ├── subjects.yaml       # Subject definitions
│   ├── teachers.yaml       # Teacher profiles
│   ├── faq.yaml           # FAQ content
│   └── reviews.yaml       # Customer reviews
├── layouts/                # Nuxt layouts
│   └── default.vue        # Default layout
├── middleware/             # Route middleware
├── pages/                  # Application routes
│   ├── index.vue          # Homepage
│   ├── matematyka.vue     # Mathematics page
│   ├── informatyka.vue    # Computer science page
│   ├── angielski.vue      # English page
│   ├── nauczyciele.vue    # Teachers page
│   ├── privacy.vue        # Privacy policy
│   └── terms.vue          # Terms of service
├── public/                 # Static files
├── server/                 # Server-side code
│   ├── api/               # API endpoints
│   └── utils/             # Server utilities
└── types/                  # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landingpage
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
NUXT_PORT=3000
NUXT_HOST=localhost
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_URL=http://localhost:8000
```

4. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev              # Start development server with hot reload

# Building
npm run build           # Build for production
npm run generate        # Generate static site
npm run preview         # Preview production build

# Utilities
npm run start           # Start production server
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
```

## Architecture

### Content Management

The project uses a YAML-based content management system that allows for easy updates without code changes:

- **subjects.yaml**: Defines available subjects, pricing, and metadata
- **teachers.yaml**: Teacher profiles and qualifications
- **faq.yaml**: Frequently asked questions
- **reviews.yaml**: Customer testimonials and reviews

### API Endpoints

All content is served through RESTful API endpoints:

- `GET /api/content/index` - All content data
- `GET /api/content/subjects` - Subject information
- `GET /api/content/teachers` - Teacher profiles
- `GET /api/content/faq` - FAQ data
- `GET /api/content/reviews` - Customer reviews
- `GET /api/health` - Health check endpoint

### Composables

The project uses Vue 3 composables for state management and data fetching:

- **useContent.ts**: Central content management with caching
- **useSubjects.ts**: Subject-specific data handling
- **useTeachers.ts**: Teacher data management
- **useScrollAnimation.ts**: Animation utilities
- **useBusinessData.ts**: Business information
- **useUtils.ts**: Utility functions

## Features

### Landing Page Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About Section**: Information about the tutoring service
3. **Subjects Section**: Available subjects with pricing
4. **Teachers Section**: Professional staff showcase
5. **FAQ Section**: Common questions and answers
6. **Contact Section**: Contact form and information

### Subject Pages

Specialized landing pages for key subjects:

- **Mathematics** (`/matematyka`): Comprehensive math tutoring
- **Computer Science** (`/informatyka`): Programming and IT skills
- **English** (`/angielski`): Language learning and certification prep

Each subject page includes:
- Problem/solution presentation
- Detailed curriculum
- Pricing tiers
- Success stories
- Testimonials

### Teachers Page

Professional showcase of tutoring staff with:
- Profile photos and bios
- Subject specializations
- Experience and qualifications
- Teaching approach

## Content Management

### Adding New Subjects

Edit `/content/subjects.yaml`:

```yaml
subjects:
  - id: new-subject
    name: "New Subject"
    description: "Subject description"
    icon: "/images/icons/subject.svg"
    levels:
      - beginner
      - intermediate
      - advanced
    priceFrom: 50
    link: "/new-subject"
```

### Adding New Teachers

Edit `/content/teachers.yaml`:

```yaml
teachers:
  - id: teacher-id
    name: "Teacher Name"
    photo: "/images/teachers/photo.jpg"
    subjects: ["mathematics", "physics"]
    experience: 5
    education: "University Degree"
    description: "Teacher bio and approach"
```

### Managing FAQ

Edit `/content/faq.yaml`:

```yaml
faq:
  - id: question-1
    question: "How long are the lessons?"
    answer: "Standard lessons are 60 minutes long."
    category: "general"
```

### Customer Reviews

Edit `/content/reviews.yaml`:

```yaml
reviews:
  - id: review-1
    name: "Student Name"
    photo: "/images/students/photo.jpg"
    rating: 5
    comment: "Great experience with tutoring!"
    subject: "Mathematics"
    date: "2023-10-01"
```

## Deployment

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Static Site Generation

```bash
# Generate static files
npm run generate

# Files will be in .output/public/
```

### Environment Configuration

Production environment variables:

```env
NUXT_PUBLIC_SITE_URL=https://your-domain.com
NUXT_PUBLIC_API_URL=https://your-api-domain.com
```

### Docker Deployment

A Dockerfile is included for containerized deployment:

```bash
# Build Docker image
docker build -t tutoring-landing .

# Run container
docker run -p 3000:3000 tutoring-landing
```

## Performance Optimizations

- **Image Optimization**: WebP format with compression
- **Code Splitting**: Automatic route-based splitting
- **Asset Compression**: Gzip compression enabled
- **Lazy Loading**: Images and components loaded on demand
- **Caching**: Content caching in composables
- **Minification**: CSS and JavaScript minification

## SEO Features

- **Meta Tags**: Comprehensive meta tag management
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling control

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests and formatting: `npm run format`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For technical support or questions about the codebase, please contact the development team.