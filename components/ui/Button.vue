<template>
  <component
    :is="tag"
    :class="buttonClasses"
    v-bind="componentBind"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Loading spinner -->
    <span
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      aria-hidden="true"
    >
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>

    <!-- Content wrapper for better animation -->
    <span :class="contentClasses">
      <slot />
    </span>

    <!-- Ripple effect overlay -->
    <span
      v-if="!disabled && !loading && rippleEffect"
      class="absolute inset-0 overflow-hidden rounded-lg pointer-events-none"
      aria-hidden="true"
    >
      <span
        v-for="ripple in ripples"
        :key="ripple.id"
        :class="ripple.classes"
        :style="ripple.style"
        class="absolute rounded-full bg-white/30 animate-ping"
      />
    </span>

    <!-- Background gradient overlay for enhanced visual appeal -->
    <span
      v-if="variant === 'primary' && !disabled"
      class="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
      aria-hidden="true"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs, ref, reactive } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  to?: string
  href?: string
  rippleEffect?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  rippleEffect: true
})

const emit = defineEmits<{
  click: [event: Event]
  mouseenter: [event: MouseEvent]
  mouseleave: [event: MouseEvent]
}>()

// Ripple effect state
const ripples = ref<Array<{ id: number; classes: string; style: string }>>([])
let rippleId = 0

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

const attrs = useAttrs()
const componentBind = computed(() => {
  const bind: Record<string, unknown> = { ...attrs }

  if (tag.value === 'NuxtLink' && props.to) {
    bind.to = props.to
  } else if (tag.value === 'a' && props.href) {
    bind.href = props.href
    // Add external link attributes for security
    if (props.href && !props.href.startsWith('#') && !props.href.startsWith('/')) {
      bind.target = '_blank'
      bind.rel = 'noopener noreferrer'
    }
  } else if (tag.value === 'button') {
    bind.type = 'button'
    bind.disabled = props.disabled || props.loading
  }

  return bind
})

const contentClasses = computed(() => {
  if (props.loading) return 'opacity-70'
  return 'transition-transform duration-200 group-hover:scale-105'
})

const handleClick = (event: Event) => {
  // Add ripple effect
  if (props.rippleEffect && !props.disabled && !props.loading) {
    addRipple(event as MouseEvent)
  }

  // Handle smooth scroll for anchor links
  if (tag.value === 'a' && props.href?.startsWith('#')) {
    event.preventDefault()
    const targetId = props.href.substring(1)
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Update URL without triggering page reload
      history.pushState(null, '', props.href)
    }
  }
  emit('click', event)
}

const handleMouseEnter = (event: MouseEvent) => {
  emit('mouseenter', event)
}

const handleMouseLeave = (event: MouseEvent) => {
  emit('mouseleave', event)
}

const addRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLElement
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  const id = rippleId++
  const ripple = {
    id,
    classes: 'animate-ping',
    style: `left: ${x}px; top: ${y}px; width: ${size}px; height: ${size}px;`
  }

  ripples.value.push(ripple)

  // Remove ripple after animation
  setTimeout(() => {
    const index = ripples.value.findIndex(r => r.id === id)
    if (index > -1) {
      ripples.value.splice(index, 1)
    }
  }, 600)
}

const buttonClasses = computed(() => {
  const base = [
    'relative inline-flex items-center justify-center font-semibold',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus:ring-4 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'overflow-hidden group transform-gpu',
    'active:scale-95',
    props.fullWidth ? 'w-full' : '',
  ].filter(Boolean).join(' ')

  const variants = {
    primary: [
      'bg-blue-600 hover:bg-blue-700',
      'text-white shadow-lg hover:shadow-xl',
      'focus:ring-blue-500/50',
      'border border-blue-600 hover:border-blue-700'
    ].join(' '),

    secondary: [
      'bg-gray-600 hover:bg-gray-700',
      'text-white shadow-lg hover:shadow-xl',
      'focus:ring-gray-500/50',
      'border border-gray-600 hover:border-gray-700'
    ].join(' '),

    outline: [
      'border-2 border-blue-600 text-blue-600',
      'hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700',
      'focus:ring-blue-500/50',
      'bg-white shadow-sm hover:shadow-md'
    ].join(' '),

    ghost: [
      'text-blue-600 hover:text-blue-700',
      'hover:bg-blue-50',
      'focus:ring-blue-500/50'
    ].join(' '),

    success: [
      'bg-green-500 hover:bg-green-600',
      'text-white shadow-lg hover:shadow-xl',
      'focus:ring-green-500/50',
      'border border-green-500 hover:border-green-600'
    ].join(' '),

    warning: [
      'bg-yellow-500 hover:bg-yellow-600',
      'text-white shadow-lg hover:shadow-xl',
      'focus:ring-yellow-500/50',
      'border border-yellow-500 hover:border-yellow-600'
    ].join(' '),

    danger: [
      'bg-red-500 hover:bg-red-600',
      'text-white shadow-lg hover:shadow-xl',
      'focus:ring-red-500/50',
      'border border-red-500 hover:border-red-600'
    ].join(' ')
  }

  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs rounded-md',
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2.5 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
    xl: 'px-8 py-4 text-lg rounded-xl'
  }

  const disabled = props.disabled || props.loading ? 'pointer-events-none' : 'hover:scale-105 hover:-translate-y-0.5'

  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabled}`
})
</script>

<style scoped>
/* Additional custom animations for enhanced interactions */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Ensure smooth transitions for all states */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced focus styles for better accessibility */
.focus\:ring-4:focus {
  box-shadow: 0 0 0 4px var(--tw-ring-color);
}

/* Performance optimization for animations */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
