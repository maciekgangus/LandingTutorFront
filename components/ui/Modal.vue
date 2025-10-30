<template>
  <teleport to="body">
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>

        <!-- Modal container -->
        <div class="flex min-h-full items-center justify-center p-4">
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div
              v-if="isOpen"
              :class="modalClasses"
              @click.stop
              ref="modalRef"
            >
              <!-- Header -->
              <div
                v-if="$slots.header || title || closable"
                class="flex items-center justify-between p-6 border-b border-gray-200"
              >
                <div class="flex-1">
                  <slot name="header">
                    <h3 v-if="title" class="text-lg font-semibold text-gray-900">
                      {{ title }}
                    </h3>
                  </slot>
                </div>

                <!-- Close button -->
                <button
                  v-if="closable"
                  @click="close"
                  class="ml-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  :aria-label="closeLabel"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <!-- Body -->
              <div :class="bodyClasses">
                <slot />
              </div>

              <!-- Footer -->
              <div
                v-if="$slots.footer"
                class="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50"
              >
                <slot name="footer" />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

interface Props {
  modelValue?: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  persistent?: boolean
  scrollable?: boolean
  closeLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: 'md',
  closable: true,
  closeOnBackdrop: true,
  closeOnEscape: true,
  persistent: false,
  scrollable: true,
  closeLabel: 'Zamknij'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  open: []
  close: []
  'before-close': [event: { preventDefault: () => void }]
}>()

const modalRef = ref<HTMLElement>()
const previousActiveElement = ref<HTMLElement>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const modalClasses = computed(() => {
  const base = 'relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col'

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-7xl mx-4'
  }

  return `${base} ${sizes[props.size]}`
})

const bodyClasses = computed(() => {
  const base = 'flex-1'
  const padding = 'p-6'
  const scrollable = props.scrollable ? 'overflow-y-auto' : ''

  return `${base} ${padding} ${scrollable}`
})

const close = () => {
  if (props.persistent) return

  const event = {
    preventDefault: () => {
      // Prevent closing
    }
  }

  emit('before-close', event)

  // Only close if preventDefault wasn't called
  if (!event.preventDefault.toString().includes('// Prevent closing')) {
    isOpen.value = false
    emit('close')
  }
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    close()
  }
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEscape && isOpen.value) {
    close()
  }
}

// Focus management
const trapFocus = (event: KeyboardEvent) => {
  if (!modalRef.value || event.key !== 'Tab') return

  const focusableElements = modalRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  const firstFocusable = focusableElements[0] as HTMLElement
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement

  if (event.shiftKey) {
    if (document.activeElement === firstFocusable) {
      lastFocusable?.focus()
      event.preventDefault()
    }
  } else {
    if (document.activeElement === lastFocusable) {
      firstFocusable?.focus()
      event.preventDefault()
    }
  }
}

const focusFirstElement = async () => {
  await nextTick()
  if (modalRef.value) {
    const focusableElement = modalRef.value.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement

    if (focusableElement) {
      focusableElement.focus()
    } else {
      modalRef.value.focus()
    }
  }
}

const restoreFocus = () => {
  if (previousActiveElement.value) {
    previousActiveElement.value.focus()
    previousActiveElement.value = undefined
  }
}

// Watch for modal open/close
watch(isOpen, async (newValue) => {
  if (newValue) {
    // Store current active element
    previousActiveElement.value = document.activeElement as HTMLElement

    // Prevent body scroll
    document.body.style.overflow = 'hidden'

    // Focus first element in modal
    await focusFirstElement()

    emit('open')
  } else {
    // Restore body scroll
    document.body.style.overflow = ''

    // Restore focus
    restoreFocus()
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
  document.addEventListener('keydown', trapFocus)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  document.removeEventListener('keydown', trapFocus)

  // Restore body scroll if modal was open
  if (isOpen.value) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Custom scrollbar for modal body */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: rgb(203 213 225) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgb(203 213 225);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgb(148 163 184);
}
</style>