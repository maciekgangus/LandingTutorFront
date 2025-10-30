import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import type { Review } from '~/types'

interface ReviewsData {
  reviews: Review[]
}

export default defineEventHandler(async (event) => {
  try {
    // Pobranie parametrów z query string
    const query = getQuery(event)
    const subject = query.subject as string | undefined
    const limit = query.limit ? parseInt(query.limit as string) : undefined
    const rating = query.rating ? parseInt(query.rating as string) : undefined

    // Ścieżka do pliku YAML
    const yamlPath = join(process.cwd(), 'content', 'reviews.yaml')

    // Odczytanie i parsowanie pliku YAML
    const fileContent = readFileSync(yamlPath, 'utf8')
    const data = yaml.load(fileContent) as ReviewsData

    // Walidacja danych
    if (!data || !Array.isArray(data.reviews)) {
      throw new Error('Invalid reviews data structure')
    }

    // Sortowanie opinii po dacie (najnowsze najpierw)
    let reviews = [...data.reviews].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    // Filtrowanie po przedmiocie jeśli podany
    if (subject) {
      reviews = reviews.filter(review => review.subject === subject)
    }

    // Filtrowanie po ocenie jeśli podana
    if (rating) {
      reviews = reviews.filter(review => review.rating >= rating)
    }

    // Ograniczenie liczby wyników jeśli podane
    if (limit && limit > 0) {
      reviews = reviews.slice(0, limit)
    }

    // Zwrócenie danych z dodatkowym metadanymi
    return {
      success: true,
      data: {
        reviews,
        lastUpdated: new Date().toISOString(),
        count: reviews.length,
        totalCount: data.reviews.length,
        averageRating: data.reviews.reduce((sum, review) => sum + review.rating, 0) / data.reviews.length,
        filteredBy: {
          subject: subject || null,
          rating: rating || null,
          limit: limit || null
        },
        subjects: [...new Set(data.reviews.map(review => review.subject))]
      }
    }
  } catch (error) {
    console.error('Error loading reviews data:', error)

    // Zwrócenie błędu
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load reviews data',
      data: {
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    })
  }
})