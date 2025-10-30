import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
  duration?: number
  easing?: string
}

interface AnimatedElement {
  element: Element
  isVisible: boolean
  hasBeenVisible: boolean
  delay: number
  animation: string
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    delay = 0,
    duration = 600,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
  } = options

  const elements = ref<Map<Element, AnimatedElement>>(new Map())
  const observer = ref<IntersectionObserver | null>(null)
  const isScrolling = ref(false)
  const scrollDirection = ref<'up' | 'down'>('down')
  const scrollProgress = ref(0)
  const lastScrollY = ref(0)

  // Create intersection observer
  const createObserver = () => {
    if (typeof window === 'undefined') return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementData = elements.value.get(entry.target)
          if (!elementData) return

          const isVisible = entry.isIntersecting

          if (isVisible && (!elementData.hasBeenVisible || !once)) {
            elementData.isVisible = true
            elementData.hasBeenVisible = true

            // Apply animation with delay
            setTimeout(() => {
              entry.target.classList.add('animate-on-scroll-visible')
              entry.target.classList.remove('animate-on-scroll-hidden')
            }, elementData.delay)
          } else if (!isVisible && !once) {
            elementData.isVisible = false
            entry.target.classList.remove('animate-on-scroll-visible')
            entry.target.classList.add('animate-on-scroll-hidden')
          }

          elements.value.set(entry.target, elementData)
        })
      },
      {
        threshold,
        rootMargin
      }
    )
  }

  // Handle scroll events for additional effects
  const handleScroll = () => {
    if (typeof window === 'undefined') return

    const currentScrollY = window.scrollY
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight

    scrollDirection.value = currentScrollY > lastScrollY.value ? 'down' : 'up'
    scrollProgress.value = Math.min(currentScrollY / documentHeight, 1)
    lastScrollY.value = currentScrollY

    // Update scrolling state
    isScrolling.value = true
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false
    }, 150)
  }

  let scrollTimeout: ReturnType<typeof setTimeout>

  // Register element for animation
  const registerElement = (
    element: Element | string,
    animationType: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'custom' = 'fade-up',
    elementDelay: number = delay
  ) => {
    if (typeof window === 'undefined') return

    let targetElement: Element | null = null

    if (typeof element === 'string') {
      targetElement = document.querySelector(element)
    } else {
      targetElement = element
    }

    if (!targetElement) {
      console.warn('Element not found for scroll animation')
      return
    }

    // Set initial styles
    targetElement.classList.add('animate-on-scroll-hidden')

    // Add specific animation class
    switch (animationType) {
      case 'fade-up':
        targetElement.classList.add('animate-fade-in-up')
        break
      case 'fade-down':
        targetElement.classList.add('animate-fade-in-down')
        break
      case 'fade-left':
        targetElement.classList.add('animate-fade-in-left')
        break
      case 'fade-right':
        targetElement.classList.add('animate-fade-in-right')
        break
      case 'scale':
        targetElement.classList.add('animate-scale-in')
        break
    }

    const elementData: AnimatedElement = {
      element: targetElement,
      isVisible: false,
      hasBeenVisible: false,
      delay: elementDelay,
      animation: animationType
    }

    elements.value.set(targetElement, elementData)

    if (observer.value) {
      observer.value.observe(targetElement)
    }
  }

  // Unregister element
  const unregisterElement = (element: Element | string) => {
    let targetElement: Element | null = null

    if (typeof element === 'string') {
      targetElement = document.querySelector(element)
    } else {
      targetElement = element
    }

    if (targetElement && observer.value) {
      observer.value.unobserve(targetElement)
      elements.value.delete(targetElement)
    }
  }

  // Trigger animation manually
  const triggerAnimation = (element: Element | string) => {
    let targetElement: Element | null = null

    if (typeof element === 'string') {
      targetElement = document.querySelector(element)
    } else {
      targetElement = element
    }

    if (targetElement) {
      targetElement.classList.add('animate-on-scroll-visible')
      targetElement.classList.remove('animate-on-scroll-hidden')
    }
  }

  // Batch register elements by selector
  const registerElements = (
    selector: string,
    animationType: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'custom' = 'fade-up',
    staggerDelay: number = 100
  ) => {
    if (typeof window === 'undefined') return

    const targetElements = document.querySelectorAll(selector)
    targetElements.forEach((element, index) => {
      registerElement(element, animationType, delay + (index * staggerDelay))
    })
  }

  // Parallax effect for elements
  const applyParallax = (element: Element | string, speed: number = 0.5) => {
    if (typeof window === 'undefined') return

    let targetElement: Element | null = null

    if (typeof element === 'string') {
      targetElement = document.querySelector(element)
    } else {
      targetElement = element
    }

    if (!targetElement) return

    const updateParallax = () => {
      const rect = targetElement!.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const scrolled = (windowHeight - elementCenter) * speed

      targetElement!.style.transform = `translateY(${scrolled}px)`
    }

    // Initial call
    updateParallax()

    // Update on scroll
    const scrollHandler = () => {
      requestAnimationFrame(updateParallax)
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }

  // Initialize everything
  onMounted(async () => {
    await nextTick()
    createObserver()

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      lastScrollY.value = window.scrollY
    }
  })

  // Cleanup
  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }

    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll)
    }

    clearTimeout(scrollTimeout)
  })

  return {
    // State
    isScrolling,
    scrollDirection,
    scrollProgress,
    elements,

    // Methods
    registerElement,
    unregisterElement,
    registerElements,
    triggerAnimation,
    applyParallax,

    // Reactive values
    isIntersecting: (element: Element) => {
      const elementData = elements.value.get(element)
      return elementData?.isVisible ?? false
    }
  }
}

// Utility function for staggered animations
export function useStaggeredAnimation(
  selector: string,
  options: ScrollAnimationOptions & { staggerDelay?: number } = {}
) {
  const { staggerDelay = 100, ...scrollOptions } = options
  const { registerElements } = useScrollAnimation(scrollOptions)

  onMounted(async () => {
    await nextTick()
    registerElements(selector, 'fade-up', staggerDelay)
  })
}

// Utility for reveal on scroll with custom animations
export function useRevealOnScroll(selector: string, animationClass: string = 'fade-up') {
  const { registerElement } = useScrollAnimation()

  onMounted(async () => {
    await nextTick()
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      registerElement(element, animationClass as any, index * 100)
    })
  })
}