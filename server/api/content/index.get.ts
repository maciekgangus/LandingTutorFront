import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import type { Subject, Teacher, FAQ, Review } from '~/types'

interface SubjectsData {
  subjects: Subject[]
}

interface TeachersData {
  teachers: Teacher[]
}

interface FaqData {
  faq: FAQ[]
}

interface ReviewsData {
  reviews: Review[]
}

export default defineEventHandler(async (event) => {
  try {
    const contentDir = join(process.cwd(), 'content')

    // Wczytanie wszystkich plików YAML
    const subjectsContent = readFileSync(join(contentDir, 'subjects.yaml'), 'utf8')
    const teachersContent = readFileSync(join(contentDir, 'teachers.yaml'), 'utf8')
    const faqContent = readFileSync(join(contentDir, 'faq.yaml'), 'utf8')
    const reviewsContent = readFileSync(join(contentDir, 'reviews.yaml'), 'utf8')

    // Parsowanie danych
    const subjectsData = yaml.load(subjectsContent) as SubjectsData
    const teachersData = yaml.load(teachersContent) as TeachersData
    const faqData = yaml.load(faqContent) as FaqData
    const reviewsData = yaml.load(reviewsContent) as ReviewsData

    // Walidacja danych
    if (!subjectsData?.subjects || !Array.isArray(subjectsData.subjects)) {
      throw new Error('Invalid subjects data structure')
    }
    if (!teachersData?.teachers || !Array.isArray(teachersData.teachers)) {
      throw new Error('Invalid teachers data structure')
    }
    if (!faqData?.faq || !Array.isArray(faqData.faq)) {
      throw new Error('Invalid FAQ data structure')
    }
    if (!reviewsData?.reviews || !Array.isArray(reviewsData.reviews)) {
      throw new Error('Invalid reviews data structure')
    }

    // Sortowanie opinii po dacie (najnowsze najpierw)
    const sortedReviews = [...reviewsData.reviews].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    // Zwrócenie wszystkich danych
    return {
      success: true,
      data: {
        subjects: subjectsData.subjects,
        teachers: teachersData.teachers,
        faq: faqData.faq,
        reviews: sortedReviews,
        lastUpdated: new Date().toISOString(),
        stats: {
          subjectsCount: subjectsData.subjects.length,
          teachersCount: teachersData.teachers.length,
          faqCount: faqData.faq.length,
          reviewsCount: reviewsData.reviews.length,
          averageRating: reviewsData.reviews.reduce((sum, review) => sum + review.rating, 0) / reviewsData.reviews.length
        }
      }
    }
  } catch (error) {
    console.error('Error loading content data:', error)

    // Zwrócenie błędu
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load content data',
      data: {
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    })
  }
})