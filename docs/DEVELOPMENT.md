# Development Guide

This guide provides detailed information for developers working on the tutoring landing page project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Architecture Guidelines](#architecture-guidelines)
- [Testing](#testing)
- [Performance](#performance)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For version control
- **VS Code**: Recommended editor with extensions

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "vue.volar",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Initial Setup

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd landingpage
npm install
```

2. **Environment configuration**:
```bash
cp .env.example .env
```

Edit `.env` with your local settings:
```env
NUXT_PORT=3000
NUXT_HOST=0.0.0.0
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_URL=http://localhost:3000
```

3. **Start development server**:
```bash
npm run dev
```

## Development Workflow

### Branch Naming Convention

Follow this naming pattern for branches:

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `style/description` - UI/UX improvements

Example: `feature/teacher-profiles`, `fix/contact-form-validation`

### Commit Message Convention

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests
- `chore`: Changes to build process or auxiliary tools

**Examples:**
```
feat(components): add teacher profile card component
fix(api): resolve content loading error
docs(readme): update installation instructions
```

### Pull Request Process

1. **Create feature branch**:
```bash
git checkout -b feature/your-feature-name
```

2. **Make changes and commit**:
```bash
git add .
git commit -m "feat(scope): your changes description"
```

3. **Push and create PR**:
```bash
git push origin feature/your-feature-name
```

4. **PR Requirements**:
   - Clear description of changes
   - Link to related issues
   - Screenshots for UI changes
   - Updated documentation if needed

## Code Standards

### TypeScript Guidelines

- **Use strict type checking**:
```typescript
// Good
interface Teacher {
  id: string;
  name: string;
  subjects: string[];
}

// Avoid
const teacher: any = {
  id: "1",
  name: "John"
};
```

- **Prefer interfaces over types for object shapes**:
```typescript
// Good
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// Use type for unions
type Status = 'loading' | 'success' | 'error';
```

### Vue.js Best Practices

- **Use Composition API with `<script setup>`**:
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
</script>
```

- **Props with TypeScript**:
```vue
<script setup lang="ts">
interface Props {
  title: string
  optional?: boolean
}

const props = defineProps<Props>()
</script>
```

- **Emit events properly**:
```vue
<script setup lang="ts">
interface Emits {
  submit: [data: FormData]
  cancel: []
}

const emit = defineEmits<Emits>()
</script>
```

### CSS/Tailwind Guidelines

- **Use Tailwind utility classes primarily**:
```vue
<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Title</h2>
  </div>
</template>
```

- **Custom CSS only when necessary**:
```vue
<style scoped>
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

- **Use CSS variables for themes**:
```css
:root {
  --color-primary: theme('colors.blue.600');
  --color-secondary: theme('colors.purple.600');
}
```

### File and Folder Naming

- **Components**: PascalCase (`TeacherCard.vue`)
- **Pages**: kebab-case (`contact-form.vue`)
- **Composables**: camelCase (`useContentData.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Folders**: kebab-case (`contact-forms/`)

## Architecture Guidelines

### Component Architecture

```
components/
├── ui/                    # Basic UI components
│   ├── Button.vue
│   ├── Card.vue
│   └── Modal.vue
├── sections/              # Page sections
│   ├── HeroSection.vue
│   └── ContactSection.vue
└── layout/               # Layout components
    ├── Header.vue
    └── Footer.vue
```

### Composables Pattern

Create focused, reusable composables:

```typescript
// useApi.ts
export const useApi = <T>(url: string) => {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetch = async () => {
    loading.value = true
    try {
      const response = await $fetch<T>(url)
      data.value = response
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    fetch
  }
}
```

### State Management

Use composables for state management:

```typescript
// stores/useGlobalState.ts
const state = reactive({
  user: null,
  theme: 'light'
})

export const useGlobalState = () => {
  return {
    state: readonly(state),
    setUser: (user) => state.user = user,
    toggleTheme: () => state.theme = state.theme === 'light' ? 'dark' : 'light'
  }
}
```

### API Layer

Structure API calls consistently:

```typescript
// api/subjects.ts
export const subjectsApi = {
  getAll: () => $fetch<Subject[]>('/api/subjects'),
  getById: (id: string) => $fetch<Subject>(`/api/subjects/${id}`),
  create: (data: CreateSubjectDto) => $fetch<Subject>('/api/subjects', {
    method: 'POST',
    body: data
  })
}
```

## Testing

### Unit Testing Setup

Install testing dependencies:

```bash
npm install -D @nuxt/test-utils vitest @vue/test-utils
```

### Component Testing

```typescript
// tests/components/Button.test.ts
import { mount } from '@vue/test-utils'
import Button from '~/components/ui/Button.vue'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'primary'
      },
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('btn-primary')
  })
})
```

### API Testing

```typescript
// tests/api/subjects.test.ts
import { $fetch } from 'ohmyfetch'

describe('/api/subjects', () => {
  it('returns subjects list', async () => {
    const response = await $fetch('/api/subjects')

    expect(response.success).toBe(true)
    expect(Array.isArray(response.data.subjects)).toBe(true)
  })
})
```

### E2E Testing

Consider using Playwright or Cypress:

```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Korepetycje/)
  await expect(page.locator('h1')).toBeVisible()
})
```

## Performance

### Image Optimization

Use Nuxt Image for optimized images:

```vue
<template>
  <NuxtImg
    src="/images/teacher.jpg"
    alt="Teacher photo"
    width="400"
    height="300"
    format="webp"
    quality="80"
    loading="lazy"
  />
</template>
```

### Code Splitting

Lazy load components when appropriate:

```vue
<script setup lang="ts">
const LazyComponent = defineAsyncComponent(
  () => import('~/components/HeavyComponent.vue')
)
</script>
```

### Bundle Analysis

Analyze bundle size:

```bash
npm run build
npm run analyze
```

### Performance Monitoring

Monitor Core Web Vitals:

```typescript
// plugins/performance.client.ts
export default defineNuxtPlugin(() => {
  if (process.client) {
    import('web-vitals').then(({ getLCP, getFID, getCLS }) => {
      getLCP(console.log)
      getFID(console.log)
      getCLS(console.log)
    })
  }
})
```

## Deployment

### Build Configuration

Optimize for production:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  experimental: {
    payloadExtraction: false
  }
})
```

### Environment Variables

Production environment setup:

```env
NUXT_PUBLIC_SITE_URL=https://yourdomain.com
NUXT_PUBLIC_API_URL=https://api.yourdomain.com
NODE_ENV=production
```

### CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - name: Deploy
        run: npm run deploy
```

## Troubleshooting

### Common Issues

**1. CORS Issues**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
  }
})
```

**2. Hydration Mismatches**
```vue
<template>
  <div>
    <!-- Use ClientOnly for client-specific content -->
    <ClientOnly>
      <DatePicker />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </ClientOnly>
  </div>
</template>
```

**3. Memory Leaks**
```vue
<script setup lang="ts">
const interval = setInterval(() => {
  // Some work
}, 1000)

// Clean up on unmount
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>
```

### Debug Commands

```bash
# Check bundle size
npm run build --analyze

# Check for type errors
npm run typecheck

# Run with debug mode
DEBUG=nuxt:* npm run dev

# Memory usage analysis
node --inspect npm run dev
```

### VSCode Debug Configuration

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Nuxt",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run", "dev"],
  "env": {
    "DEBUG": "nuxt:*"
  }
}
```

## Code Quality Tools

### ESLint Configuration

```json
{
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "prettier"
  ],
  "rules": {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### Prettier Configuration

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
```

### Husky Pre-commit Hooks

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,vue}": ["eslint --fix", "prettier --write"],
    "*.{css,scss,vue}": ["prettier --write"]
  }
}
```

This development guide provides the foundation for maintaining high code quality and development efficiency. Always refer to the latest documentation and best practices as the ecosystem evolves.