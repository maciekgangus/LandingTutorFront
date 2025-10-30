import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import type { FAQ } from '~/types'

interface FaqData {
  faq: FAQ[]
}

export default defineEventHandler(async (event) => {
  try {
    // Pobranie parametru category z query string
    const query = getQuery(event)
    const category = query.category as string | undefined

    // Ścieżka do pliku YAML
    const yamlPath = join(process.cwd(), 'content', 'faq.yaml')

    // Odczytanie i parsowanie pliku YAML
    const fileContent = readFileSync(yamlPath, 'utf8')
    const data = yaml.load(fileContent) as FaqData

    // Walidacja danych
    if (!data || !Array.isArray(data.faq)) {
      throw new Error('Invalid FAQ data structure')
    }

    // Filtrowanie po kategorii jeśli podana
    let faqItems = data.faq
    if (category) {
      faqItems = data.faq.filter(item => item.category === category)
    }

    // Zwrócenie danych z dodatkowym metadanymi
    return {
      success: true,
      data: {
        faq: faqItems,
        lastUpdated: new Date().toISOString(),
        count: faqItems.length,
        totalCount: data.faq.length,
        filteredBy: category || null,
        categories: [...new Set(data.faq.map(item => item.category))]
      }
    }
  } catch (error) {
    console.error('Error loading FAQ data:', error)

    // Zwrócenie błędu
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load FAQ data',
      data: {
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    })
  }
})