# Deployment Guide

This guide covers deployment strategies and configurations for the tutoring landing page application.

## Table of Contents

- [Overview](#overview)
- [Environment Setup](#environment-setup)
- [Build Process](#build-process)
- [Deployment Options](#deployment-options)
- [Server Configuration](#server-configuration)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## Overview

The application can be deployed in multiple ways:

1. **Static Site Generation (SSG)** - Pre-rendered static files
2. **Server-Side Rendering (SSR)** - Dynamic server rendering
3. **Hybrid Deployment** - Combination of static and dynamic
4. **Containerized Deployment** - Docker-based deployment

## Environment Setup

### Production Environment Variables

Create a `.env.production` file:

```env
# Site Configuration
NUXT_PUBLIC_SITE_URL=https://yourdomain.com
NUXT_PUBLIC_API_URL=https://yourdomain.com

# Server Configuration
NUXT_HOST=0.0.0.0
NUXT_PORT=3000

# Node Environment
NODE_ENV=production

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
GOOGLE_TAG_MANAGER_ID=GTM_ID

# Contact Form (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=contact@yourdomain.com

# Security
SECRET_KEY=your-secret-key-here
```

### Environment Validation

The application validates required environment variables:

```typescript
// server/utils/env.ts
import { z } from 'zod'

const envSchema = z.object({
  NUXT_PUBLIC_SITE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  // Add other required variables
})

export const env = envSchema.parse(process.env)
```

## Build Process

### Production Build

```bash
# Install dependencies
npm ci --only=production

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
# Deploy these files to any static hosting
```

### Build Optimization

Configure build optimizations in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  // Production optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
    storage: {
      // Configure storage if needed
    }
  },

  // CSS optimization
  css: {
    postcss: {
      plugins: {
        cssnano: process.env.NODE_ENV === 'production'
      }
    }
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  }
})
```

## Deployment Options

### 1. Vercel Deployment

Vercel provides excellent Nuxt.js support with zero configuration.

#### Setup

1. **Connect repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy automatically** on git push

#### Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".output/public",
  "devCommand": "npm run dev",
  "framework": "nuxtjs",
  "env": {
    "NUXT_PUBLIC_SITE_URL": "https://yourdomain.vercel.app"
  }
}
```

### 2. Netlify Deployment

Static site deployment with form handling.

#### Setup

1. **Connect repository** to Netlify
2. **Configure build settings**:
   - Build command: `npm run generate`
   - Publish directory: `.output/public`
3. **Set environment variables** in Netlify dashboard

#### Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "max-age=31536000"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "max-age=31536000"
```

### 3. DigitalOcean App Platform

Full-stack deployment with automatic scaling.

#### Setup

1. **Create new app** in DigitalOcean
2. **Connect repository**
3. **Configure app spec**

#### Configuration

Create `.do/app.yaml`:

```yaml
name: tutoring-landing
services:
- name: web
  source_dir: /
  github:
    repo: your-username/your-repo
    branch: main
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: NODE_ENV
    value: production
  - key: NUXT_PUBLIC_SITE_URL
    value: https://your-app.ondigitalocean.app
```

### 4. AWS Deployment

#### Option A: AWS Amplify (Static)

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

#### Option B: AWS EC2 (Server)

User data script for EC2:

```bash
#!/bin/bash
yum update -y
yum install -y nodejs npm git

# Clone and setup application
git clone https://github.com/your-username/your-repo.git /var/www/app
cd /var/www/app
npm ci --only=production
npm run build

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start npm --name "tutoring-app" -- start
pm2 startup
pm2 save
```

### 5. Docker Deployment

Use the included Dockerfile:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app
COPY --from=builder /app/.output ./
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", "server/index.mjs"]
```

#### Build and Deploy

```bash
# Build Docker image
docker build -t tutoring-landing .

# Run container
docker run -d \
  --name tutoring-app \
  -p 3000:3000 \
  -e NUXT_PUBLIC_SITE_URL=https://yourdomain.com \
  tutoring-landing

# Using Docker Compose
docker-compose up -d
```

#### Docker Compose Configuration

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NUXT_PUBLIC_SITE_URL=https://yourdomain.com
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl/private
    depends_on:
      - app
    restart: unless-stopped
```

## Server Configuration

### Nginx Configuration

Create `nginx.conf` for reverse proxy:

```nginx
events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:3000;
    }

    # Redirect HTTP to HTTPS
    server {
        listen 80;
        server_name yourdomain.com www.yourdomain.com;
        return 301 https://$host$request_uri;
    }

    # HTTPS Configuration
    server {
        listen 443 ssl http2;
        server_name yourdomain.com www.yourdomain.com;

        # SSL Configuration
        ssl_certificate /etc/ssl/private/fullchain.pem;
        ssl_certificate_key /etc/ssl/private/privkey.pem;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
        ssl_prefer_server_ciphers off;

        # Security Headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";

        # Gzip Compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_proxied expired no-cache no-store private must-revalidate auth;
        gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

        # Static File Caching
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Proxy to Node.js application
        location / {
            proxy_pass http://app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;
        }
    }
}
```

### SSL Certificate Setup

Using Let's Encrypt with Certbot:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Generate SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Process Management with PM2

```bash
# Install PM2
npm install -g pm2

# Create PM2 configuration
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'tutoring-landing',
    script: '.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      NUXT_PUBLIC_SITE_URL: 'https://yourdomain.com'
    }
  }]
}
EOF

# Start application
pm2 start ecosystem.config.js

# Setup auto-start on boot
pm2 startup
pm2 save
```

## Monitoring

### Application Monitoring

#### 1. PM2 Monitoring

```bash
# View application status
pm2 status

# View logs
pm2 logs tutoring-landing

# Monitor resources
pm2 monit
```

#### 2. Health Checks

Implement health check endpoint:

```typescript
// server/api/health.get.ts
export default defineEventHandler(async (event) => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version || '1.0.0'
  }
})
```

#### 3. External Monitoring

Set up monitoring with services like:

- **Uptime Robot**: Free uptime monitoring
- **Pingdom**: Performance monitoring
- **New Relic**: Application performance monitoring
- **Sentry**: Error tracking

### Performance Monitoring

#### Web Vitals Tracking

```typescript
// plugins/analytics.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    import('web-vitals').then(({ getLCP, getFID, getCLS }) => {
      getLCP((metric) => {
        // Send to analytics
        gtag('event', 'web_vitals', {
          name: metric.name,
          value: metric.value,
          event_category: 'performance'
        })
      })

      getFID((metric) => {
        gtag('event', 'web_vitals', {
          name: metric.name,
          value: metric.value,
          event_category: 'performance'
        })
      })

      getCLS((metric) => {
        gtag('event', 'web_vitals', {
          name: metric.name,
          value: metric.value,
          event_category: 'performance'
        })
      })
    })
  }
})
```

### Log Management

#### Structured Logging

```typescript
// server/utils/logger.ts
import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    new transports.Console({
      format: format.simple()
    })
  ]
})
```

## Security

### Security Headers

Configure security headers in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
        }
      }
    }
  }
})
```

### Content Security Policy

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: *.google-analytics.com"
        }
      ]
    }
  }
})
```

## Troubleshooting

### Common Deployment Issues

#### 1. Build Failures

**Problem**: Build fails with memory errors
```bash
# Solution: Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Problem**: TypeScript compilation errors
```bash
# Solution: Check and fix type errors
npm run typecheck
```

#### 2. Runtime Errors

**Problem**: Application crashes on startup
```bash
# Check logs
pm2 logs tutoring-landing

# Common issues:
# - Missing environment variables
# - Port conflicts
# - File permissions
```

#### 3. Performance Issues

**Problem**: Slow loading times
```bash
# Analyze bundle size
npm run build --analyze

# Check for:
# - Large dependencies
# - Unoptimized images
# - Missing compression
```

### Debugging Tools

```bash
# Check application health
curl https://yourdomain.com/api/health

# Test API endpoints
curl https://yourdomain.com/api/content/subjects

# Check response headers
curl -I https://yourdomain.com

# Monitor real-time logs
pm2 logs tutoring-landing --lines 100
```

### Rollback Strategy

```bash
# Quick rollback with PM2
pm2 stop tutoring-landing
git checkout previous-version
npm run build
pm2 restart tutoring-landing

# Or use blue-green deployment
pm2 start ecosystem.config.js --name tutoring-landing-blue
# Test blue deployment
pm2 stop tutoring-landing-green
pm2 restart tutoring-landing-blue --name tutoring-landing
```

This deployment guide provides comprehensive instructions for deploying the tutoring landing page to various platforms with proper security, monitoring, and troubleshooting procedures.