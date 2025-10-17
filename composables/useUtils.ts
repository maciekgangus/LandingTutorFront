export const useSmoothScroll = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return {
    scrollTo
  }
}

export const useFormValidation = () => {
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateRequired = (value: string): boolean => {
    return value.trim().length > 0
  }

  return {
    validateEmail,
    validatePhone,
    validateRequired
  }
}
