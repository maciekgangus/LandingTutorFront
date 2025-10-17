<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <LayoutHeader />

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Simplified layout without complex mobile menu logic
</script>
