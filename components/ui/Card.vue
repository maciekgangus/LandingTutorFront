<template>
  <component
    :is="tag"
    :class="cardClasses"
    v-bind="componentBind"
    @click="handleClick"
  >
    <!-- Image slot -->
    <div v-if="image || $slots.image" class="card-image">
      <slot name="image">
        <img
          v-if="image"
          :src="image"
          :alt="title || 'Card image'"
          class="w-full h-48 object-cover"
          :class="{ 'rounded-t-lg': !variant.includes('borderless') }"
        />
      </slot>
    </div>

    <!-- Content wrapper -->
    <div :class="contentClasses">
      <!-- Header slot -->
      <div v-if="title || $slots.header" class="card-header">
        <slot name="header">
          <h3 v-if="title" class="text-lg font-semibold text-gray-900 mb-2">
            {{ title }}
          </h3>
        </slot>
      </div>

      <!-- Description -->
      <div v-if="description || $slots.description" class="card-description">
        <slot name="description">
          <p v-if="description" class="text-gray-600 mb-4">
            {{ description }}
          </p>
        </slot>
      </div>

      <!-- Default slot for custom content -->
      <div v-if="$slots.default" class="card-content">
        <slot />
      </div>

      <!-- Footer slot -->
      <div v-if="$slots.footer" class="card-footer mt-auto pt-4">
        <slot name="footer" />
      </div>
    </div>

    <!-- Loading overlay -->
    <div
      v-if="loading"
      class="absolute inset-0 bg-white/80 flex items-center justify-center rounded-lg"
    >
      <UiLoading size="md" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

interface Props {
  title?: string
  description?: string
  image?: string
  href?: string
  to?: string
  variant?: 'default' | 'elevated' | 'bordered' | 'borderless' | 'hoverable'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  loading: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const attrs = useAttrs()

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  if (props.clickable) return 'button'
  return 'div'
})

const componentBind = computed(() => {
  const bind: Record<string, unknown> = { ...attrs }

  if (tag.value === 'NuxtLink' && props.to) {
    bind.to = props.to
  } else if (tag.value === 'a' && props.href) {
    bind.href = props.href
    bind.target = '_blank'
    bind.rel = 'noopener noreferrer'
  } else if (tag.value === 'button') {
    bind.type = 'button'
  }

  return bind
})

const cardClasses = computed(() => {
  const base = 'relative flex flex-col transition-all duration-200'

  const variants = {
    default: 'bg-white rounded-lg',
    elevated: 'bg-white rounded-lg shadow-md hover:shadow-lg',
    bordered: 'bg-white rounded-lg border border-gray-200',
    borderless: 'bg-transparent',
    hoverable: 'bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md cursor-pointer'
  }

  const sizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const interactive = props.clickable || props.to || props.href
    ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]'
    : ''

  const loadingClass = props.loading ? 'pointer-events-none' : ''

  return `${base} ${variants[props.variant]} ${sizes[props.size]} ${interactive} ${loadingClass}`
})

const contentClasses = computed(() => {
  const base = 'flex flex-col h-full'
  const spacing = props.variant === 'borderless' ? '' : 'space-y-2'

  return `${base} ${spacing}`
})

const handleClick = (event: Event) => {
  if (!props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.card-image {
  @apply -m-6 mb-6;
}

.card-image img {
  @apply rounded-t-lg;
}

.card-header {
  @apply flex-shrink-0;
}

.card-description {
  @apply flex-grow;
}

.card-content {
  @apply flex-grow;
}

.card-footer {
  @apply flex-shrink-0;
}

/* Borderless variant adjustments */
.card-image:has(+ * .card-header) {
  @apply mb-4;
}
</style>