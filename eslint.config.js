import { defineConfig } from 'eslint'

export default defineConfig({
  extends: [
    '@nuxt/eslint-config'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
})
