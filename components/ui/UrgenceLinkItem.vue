<script setup lang="ts">
import type { LienUrgence } from '~/data/urgences'
defineProps<{ lien: LienUrgence }>()
</script>
<template>
  <a :href="lien.href" target="_blank" rel="noopener" class="urgence-link-item">
    <span>{{ lien.label }}</span>
    <span class="badge" :class="{ red: lien.badgeRed }">{{ lien.badge }}</span>
  </a>
</template>
<style scoped>
.urgence-link-item { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:12px 16px; background:var(--bg); border:1px solid var(--border); border-radius:var(--radius-sm); text-decoration:none; color:var(--dark); font-size:14px; font-weight:500; transition:all .15s; }
.urgence-link-item:hover { border-color:var(--primary-light); color:var(--primary); background:var(--primary-pale); }
.badge { background:var(--primary); color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:100px; min-width:fit-content; }
.badge.red { background:#D4450F; }
</style>
