# Content Management Guide

This guide explains how to manage content in the tutoring landing page application using the YAML-based content management system.

## Table of Contents

- [Overview](#overview)
- [Content Structure](#content-structure)
- [Managing Subjects](#managing-subjects)
- [Managing Teachers](#managing-teachers)
- [Managing FAQ](#managing-faq)
- [Managing Reviews](#managing-reviews)
- [Best Practices](#best-practices)
- [Validation](#validation)
- [Troubleshooting](#troubleshooting)

## Overview

The application uses a YAML-based content management system that allows non-technical users to update content without modifying code. All content files are located in the `/content` directory and are automatically loaded by the API.

### Benefits

- **Easy to edit**: Human-readable YAML format
- **Version controlled**: Changes are tracked in Git
- **Type safe**: TypeScript interfaces ensure data consistency
- **Fast loading**: Content is cached and optimized
- **SEO friendly**: Content is server-side rendered

### Content Files Location

```
content/
├── subjects.yaml      # Available subjects and courses
├── teachers.yaml      # Teacher profiles and information
├── faq.yaml          # Frequently asked questions
└── reviews.yaml      # Customer testimonials and reviews
```

## Content Structure

### File Format

All content files use YAML format with the following structure:

```yaml
# Main collection name
subjects:
  - id: unique-identifier
    field1: value
    field2: value
    nested_field:
      - item1
      - item2
```

### Data Types

- **String**: Text content (use quotes for special characters)
- **Number**: Numeric values (prices, ratings, etc.)
- **Array**: Lists of items (levels, subjects, etc.)
- **Date**: ISO format dates (YYYY-MM-DD)

## Managing Subjects

### File: `/content/subjects.yaml`

This file defines all available subjects, their descriptions, pricing, and metadata.

#### Structure

```yaml
subjects:
  - id: subject-id                    # Unique identifier (no spaces)
    name: "Subject Name"              # Display name
    description: "Detailed description of the subject and what it covers"
    icon: "/images/icons/icon.svg"    # Path to subject icon
    levels:                           # Available skill levels
      - beginner
      - intermediate
      - advanced
    priceFrom: 50                     # Starting price in PLN
    link: "/subject-page"             # Link to subject page
```

#### Adding a New Subject

1. **Open** `/content/subjects.yaml`
2. **Add** a new entry at the end of the subjects array:

```yaml
subjects:
  # ... existing subjects ...

  - id: biology
    name: "Biologia"
    description: "Korepetycje z biologii obejmujące wszystkie działy - od podstaw po poziom rozszerzony i przygotowanie do matury."
    icon: "/images/icons/biology.svg"
    levels:
      - podstawowy
      - rozszerzony
      - matura
    priceFrom: 45
    link: "/biologia"
```

3. **Save** the file and restart the server

#### Subject Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (kebab-case) |
| `name` | string | Yes | Display name |
| `description` | string | Yes | Detailed description |
| `icon` | string | Yes | Path to icon image |
| `levels` | array | Yes | Available skill levels |
| `priceFrom` | number | Yes | Starting price in PLN |
| `link` | string | Yes | Link to subject page |

#### Example Complete Subject

```yaml
- id: matematyka
  name: "Matematyka"
  description: "Korepetycje z matematyki na wszystkich poziomach - od podstaw po studia. Przygotowanie do matury, egzaminów wstępnych i zajęć na uczelni."
  icon: "/images/icons/math.svg"
  levels:
    - podstawowy
    - średni
    - matura
    - studia
  priceFrom: 45
  link: "/matematyka"
```

## Managing Teachers

### File: `/content/teachers.yaml`

This file contains profiles of all tutoring staff.

#### Structure

```yaml
teachers:
  - id: teacher-id                    # Unique identifier
    name: "Full Name"                 # Teacher's full name
    photo: "/images/teachers/photo.jpg" # Path to profile photo
    subjects:                         # Subjects they teach
      - matematyka
      - fizyka
    experience: 5                     # Years of teaching experience
    education: "Educational background" # Degrees and qualifications
    description: "Biography and teaching approach"
```

#### Adding a New Teacher

```yaml
teachers:
  # ... existing teachers ...

  - id: anna-kowalska
    name: "Dr Anna Kowalska"
    photo: "/images/teachers/anna-kowalska.jpg"
    subjects:
      - matematyka
      - informatyka
    experience: 8
    education: "Doktor nauk informatycznych, Politechnika Krakowska. Magister matematyki stosowanej, Uniwersytet Jagielloński."
    description: "Specjalizuję się w nauczaniu matematyki i informatyki na poziomie licealnym i akademickim. Moje zajęcia charakteryzują się praktycznym podejściem do rozwiązywania problemów."
```

#### Teacher Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (kebab-case) |
| `name` | string | Yes | Full name with titles |
| `photo` | string | Yes | Path to profile photo |
| `subjects` | array | Yes | List of subject IDs they teach |
| `experience` | number | Yes | Years of teaching experience |
| `education` | string | Yes | Educational background |
| `description` | string | Yes | Biography and teaching philosophy |

## Managing FAQ

### File: `/content/faq.yaml`

This file contains frequently asked questions organized by category.

#### Structure

```yaml
faq:
  - id: question-id                   # Unique identifier
    question: "Question text?"        # The question
    answer: "Detailed answer text"    # The answer
    category: "category-name"         # Category for organization
```

#### Adding New FAQ Items

```yaml
faq:
  # ... existing items ...

  - id: lesson-duration
    question: "Jak długo trwają zajęcia?"
    answer: "Standardowe zajęcia trwają 60 minut. Możliwe są również sesje 90-minutowe dla uczniów przygotowujących się do matury lub sesji egzaminacyjnej."
    category: "general"

  - id: online-lessons
    question: "Czy zajęcia mogą odbywać się online?"
    answer: "Tak, oferujemy zarówno zajęcia stacjonarne jak i online. Zajęcia online prowadzone są przez platformy takie jak Zoom lub Google Meet z możliwością udostępniania ekranu i tablicy interaktywnej."
    category: "technology"
```

#### FAQ Categories

Common categories include:
- `general` - General questions
- `pricing` - Pricing and payment
- `lessons` - Lesson format and scheduling
- `technology` - Online learning and tools
- `preparation` - Exam preparation
- `booking` - Booking and cancellation

#### FAQ Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `question` | string | Yes | Question text |
| `answer` | string | Yes | Detailed answer |
| `category` | string | Yes | Category for filtering |

## Managing Reviews

### File: `/content/reviews.yaml`

This file contains customer testimonials and reviews.

#### Structure

```yaml
reviews:
  - id: review-id                     # Unique identifier
    name: "Customer Name"             # Student or parent name
    photo: "/images/students/photo.jpg" # Optional profile photo
    rating: 5                         # Rating from 1-5
    comment: "Review text"            # Testimonial content
    subject: "Subject Name"           # Subject of tutoring
    date: "2023-10-01"               # Date in YYYY-MM-DD format
```

#### Adding New Reviews

```yaml
reviews:
  # ... existing reviews ...

  - id: review-kacper-math
    name: "Kacper"
    photo: "/images/students/kacper.jpg"
    rating: 5
    comment: "Pierwszy raz naprawdę zrozumiałem pochodne. Mega fajnie wytłumaczone, zero stresu. Polecam!"
    subject: "Matematyka"
    date: "2023-09-15"

  - id: review-anna-parent
    name: "Pani Anna"
    rating: 5
    comment: "Moja córka wreszcie przestała płakać przed sprawdzianami z matematyki. Oceny poszły w górę, a co najważniejsze - pewność siebie też."
    subject: "Matematyka"
    date: "2023-10-05"
```

#### Review Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `name` | string | Yes | Student or parent name |
| `photo` | string | No | Path to profile photo |
| `rating` | number | Yes | Rating from 1-5 |
| `comment` | string | Yes | Review text |
| `subject` | string | Yes | Subject name |
| `date` | string | Yes | Date in YYYY-MM-DD format |

## Best Practices

### Content Writing Guidelines

#### 1. Use Clear, Concise Language
```yaml
# Good
description: "Korepetycje z matematyki na wszystkich poziomach"

# Avoid
description: "Oferujemy kompleksowe i bardzo szczegółowe korepetycje z matematyki dla uczniów na różnych poziomach zaawansowania"
```

#### 2. Maintain Consistent Tone
- Use formal Polish language
- Be professional but approachable
- Focus on benefits for students
- Use active voice when possible

#### 3. SEO-Friendly Content
```yaml
# Include relevant keywords naturally
description: "Korepetycje z matematyki - przygotowanie do matury, poprawa ocen, indywidualne podejście"
```

### Technical Guidelines

#### 1. Unique IDs
Always use unique, descriptive IDs:
```yaml
# Good
id: matematyka-liceum
id: teacher-jan-kowalski
id: faq-lesson-duration

# Avoid
id: math1
id: teacher1
id: q1
```

#### 2. Proper YAML Syntax
```yaml
# Good - consistent indentation (2 spaces)
subjects:
  - id: matematyka
    name: "Matematyka"
    levels:
      - podstawowy
      - średni

# Avoid - mixed indentation
subjects:
- id: matematyka
  name: "Matematyka"
    levels:
    - podstawowy
      - średni
```

#### 3. Date Formats
Always use ISO format (YYYY-MM-DD):
```yaml
# Good
date: "2023-10-29"

# Avoid
date: "29/10/2023"
date: "October 29, 2023"
```

### Image Management

#### 1. File Naming
Use descriptive, lowercase names:
```
/images/teachers/jan-kowalski.jpg
/images/icons/math.svg
/images/students/anna-nowak.jpg
```

#### 2. Image Optimization
- Use WebP format when possible
- Optimize file sizes (< 200KB for photos)
- Provide alt text in components

#### 3. Icon Guidelines
- Use SVG format for icons
- Maintain consistent style
- Size: 64x64px or vector

### Content Review Process

#### 1. Before Publishing
- [ ] Check spelling and grammar
- [ ] Verify all links work
- [ ] Ensure images exist
- [ ] Test on development server
- [ ] Review for consistency

#### 2. After Publishing
- [ ] Verify content appears correctly
- [ ] Check mobile responsiveness
- [ ] Test loading performance
- [ ] Monitor for errors

## Validation

### YAML Syntax Validation

Use online YAML validators or VS Code extensions:

```bash
# Install YAML lint
npm install -g yaml-lint

# Validate files
yaml-lint content/subjects.yaml
yaml-lint content/teachers.yaml
```

### Content Validation

The application includes TypeScript validation:

```typescript
// Types are enforced automatically
interface Subject {
  id: string;
  name: string;
  description: string;
  // ... other properties
}
```

### Common Validation Errors

#### 1. Invalid YAML Syntax
```yaml
# Wrong - missing quotes for special characters
description: This is a description with "quotes" inside

# Correct
description: "This is a description with \"quotes\" inside"
```

#### 2. Missing Required Fields
```yaml
# Wrong - missing required 'id' field
- name: "Matematyka"
  description: "Math tutoring"

# Correct
- id: matematyka
  name: "Matematyka"
  description: "Math tutoring"
```

#### 3. Incorrect Data Types
```yaml
# Wrong - rating should be number
rating: "5"

# Correct
rating: 5
```

## Troubleshooting

### Common Issues

#### 1. Content Not Updating
**Problem**: Changes to YAML files don't appear on the website

**Solutions**:
- Restart the development server
- Clear browser cache
- Check for YAML syntax errors
- Verify file was saved

#### 2. YAML Parsing Errors
**Problem**: Server errors when loading content

**Solutions**:
- Validate YAML syntax
- Check indentation (use spaces, not tabs)
- Ensure proper quoting of special characters
- Verify all required fields are present

#### 3. Missing Images
**Problem**: Images not displaying

**Solutions**:
- Verify image files exist in `/public` directory
- Check file paths are correct
- Ensure proper file extensions
- Optimize image sizes

#### 4. Character Encoding Issues
**Problem**: Special Polish characters not displaying correctly

**Solutions**:
- Save files with UTF-8 encoding
- Use proper YAML escaping for special characters
- Test with different text editors

### Debug Commands

```bash
# Check YAML syntax
npx js-yaml content/subjects.yaml

# Validate all content files
for file in content/*.yaml; do
  echo "Validating $file"
  npx js-yaml "$file" > /dev/null && echo "✓ Valid" || echo "✗ Invalid"
done

# Check API endpoints
curl http://localhost:3000/api/content/subjects
```

### Content Backup

#### 1. Version Control
All content is automatically backed up through Git:
```bash
git add content/
git commit -m "Update content: add new teacher profile"
git push
```

#### 2. Manual Backup
Create periodic backups:
```bash
# Create backup directory
mkdir -p backups/$(date +%Y-%m-%d)

# Copy content files
cp -r content/ backups/$(date +%Y-%m-%d)/
```

### Content Migration

When migrating from other systems:

#### 1. From CMS (WordPress, etc.)
- Export content to JSON/CSV
- Convert to YAML format
- Validate data structure
- Test thoroughly

#### 2. From Spreadsheets
- Export as CSV
- Use conversion tools or scripts
- Maintain data relationships
- Verify formatting

This content management guide ensures that content updates are safe, consistent, and maintain the high quality of the tutoring website.