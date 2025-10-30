<template>
  <div :class="containerClasses">
    <!-- Spinner variants -->
    <div v-if="variant === 'spinner'" :class="spinnerClasses">
      <svg
        class="animate-spin"
        :class="iconClasses"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>

    <!-- Dots variant -->
    <div v-else-if="variant === 'dots'" :class="dotsClasses">
      <div
        v-for="i in 3"
        :key="i"
        :class="dotClasses"
        :style="{ animationDelay: `${(i - 1) * 0.15}s` }"
      />
    </div>

    <!-- Pulse variant -->
    <div v-else-if="variant === 'pulse'" :class="pulseClasses">
      <div
        v-for="i in 3"
        :key="i"
        :class="pulseItemClasses"
        :style="{ animationDelay: `${(i - 1) * 0.2}s` }"
      />
    </div>

    <!-- Skeleton variant -->
    <div v-else-if="variant === 'skeleton'" :class="skeletonClasses">
      <div class="animate-pulse space-y-4">
        <!-- Header skeleton -->
        <div v-if="skeletonType === 'card' || skeletonType === 'full'">
          <div class="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          <div class="h-3 bg-gray-200 rounded w-1/2" />
        </div>

        <!-- Content skeleton -->
        <div v-if="skeletonType === 'text' || skeletonType === 'card' || skeletonType === 'full'">
          <div class="space-y-2">
            <div class="h-3 bg-gray-200 rounded" />
            <div class="h-3 bg-gray-200 rounded w-5/6" />
            <div class="h-3 bg-gray-200 rounded w-4/6" />
          </div>
        </div>

        <!-- Image skeleton -->
        <div v-if="skeletonType === 'image' || skeletonType === 'card' || skeletonType === 'full'">
          <div class="h-32 bg-gray-300 rounded" />
        </div>

        <!-- List skeleton -->
        <div v-if="skeletonType === 'list' || skeletonType === 'full'">
          <div v-for="i in 3" :key="i" class="flex items-center space-x-3 mb-3">
            <div class="w-8 h-8 bg-gray-300 rounded-full" />
            <div class="flex-1 space-y-1">
              <div class="h-3 bg-gray-200 rounded w-3/4" />
              <div class="h-2 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress bar variant -->
    <div v-else-if="variant === 'progress'" :class="progressClasses">
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div
          class="bg-blue-600 h-2 rounded-full transition-all duration-300"
          :style="{ width: `${progress}%` }"
        />
      </div>
      <div v-if="showPercentage" class="text-sm text-gray-600 mt-2 text-center">
        {{ progress }}%
      </div>
    </div>

    <!-- Loading text -->
    <div v-if="text && variant !== 'skeleton'" :class="textClasses">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'progress'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple'
  text?: string
  skeletonType?: 'text' | 'image' | 'card' | 'list' | 'full'
  progress?: number
  showPercentage?: boolean
  fullScreen?: boolean
  overlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'spinner',
  size: 'md',
  color: 'blue',
  skeletonType: 'text',
  progress: 0,
  showPercentage: false,
  fullScreen: false,
  overlay: false
})

const containerClasses = computed(() => {
  const base = 'flex flex-col items-center justify-center'

  const fullScreen = props.fullScreen
    ? 'fixed inset-0 z-50 bg-white'
    : ''

  const overlay = props.overlay
    ? 'absolute inset-0 bg-white/80 backdrop-blur-sm z-10'
    : ''

  const spacing = props.text && props.variant !== 'skeleton' ? 'space-y-3' : ''

  return `${base} ${fullScreen} ${overlay} ${spacing}`
})

const spinnerClasses = computed(() => {
  const colors = {
    blue: 'text-blue-600',
    gray: 'text-gray-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600'
  }

  return colors[props.color]
})

const iconClasses = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  return sizes[props.size]
})

const dotsClasses = computed(() => {
  return 'flex space-x-2'
})

const dotClasses = computed(() => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-6 h-6'
  }

  const colors = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600'
  }

  return `${sizes[props.size]} ${colors[props.color]} rounded-full animate-bounce`
})

const pulseClasses = computed(() => {
  return 'flex space-x-2'
})

const pulseItemClasses = computed(() => {
  const sizes = {
    sm: 'w-2 h-8',
    md: 'w-3 h-12',
    lg: 'w-4 h-16',
    xl: 'w-6 h-20'
  }

  const colors = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600'
  }

  return `${sizes[props.size]} ${colors[props.color]} rounded-sm animate-pulse-scale`
})

const skeletonClasses = computed(() => {
  const sizes = {
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-80',
    xl: 'w-96'
  }

  return `${sizes[props.size]} max-w-full`
})

const progressClasses = computed(() => {
  const sizes = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-80'
  }

  return sizes[props.size]
})

const textClasses = computed(() => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  const colors = {
    blue: 'text-blue-600',
    gray: 'text-gray-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600'
  }

  return `${sizes[props.size]} ${colors[props.color]} font-medium text-center`
})
</script>

<style scoped>
@keyframes pulse-scale {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

.animate-pulse-scale {
  animation: pulse-scale 1.2s infinite ease-in-out;
}

/* Custom bounce animation with better timing */
@keyframes bounce-dots {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounce {
  animation: bounce-dots 1.4s infinite ease-in-out both;
}

/* Improved skeleton shimmer effect */
@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.animate-pulse > div {
  background: linear-gradient(90deg, #f0f0f0 25%, transparent 37%, #f0f0f0 63%);
  background-size: 400px 100%;
  animation: shimmer 1.4s ease-in-out infinite;
}
</style>