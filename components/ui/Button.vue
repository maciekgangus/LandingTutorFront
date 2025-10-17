<template>
  <component
    :is="tag"
    :class="buttonClasses"
    v-bind="componentBind"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  to?: string
  href?: string  // ← Dodaj href dla zwykłych linków
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

const emit = defineEmits<{
  click: [event: Event]
}>()

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
  } else if (tag.value === 'button') {
    bind.type = 'button'
    bind.disabled = props.disabled || props.loading
  }

  return bind
})

const handleClick = (event: Event) => {
  // Dla anchor linków z #, dodaj smooth scroll
  if (tag.value === 'a' && props.href?.startsWith('#')) {
    event.preventDefault()
    const targetId = props.href.substring(1)
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
  emit('click', event)
}

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const disabled = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : ''

  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${disabled}`
})
</script>
