<script setup lang="ts">
defineProps<{ label: string; dark?: boolean }>()
</script>
<template>
  <span class="section-tag" :class="{ dark }">✦ {{ label }}</span>
</template>
<style scoped>
.section-tag.dark { background:rgba(82,183,136,.15); color:var(--primary-light); }
</style>
