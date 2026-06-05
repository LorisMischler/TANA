<script setup lang="ts">
import type { Evenement } from '~/data/evenements'
defineProps<{ event: Evenement }>()
const formatLabel = { presentiel: 'Présentiel', visio: 'Visioconférence', hybride: 'Présentiel + visio' }
const formatClass = { presentiel: 'badge-presentiel', visio: 'badge-visio', hybride: 'badge-hybrid' }
</script>
<template>
  <a :href="event.lien" target="_blank" rel="noopener" class="actu-card">
    <div class="actu-meta">
      <span class="actu-badge" :class="formatClass[event.format]">{{ formatLabel[event.format] }}</span>
      <span class="actu-date">📅 {{ event.date }}</span>
    </div>
    <h3>{{ event.titre }}</h3>
    <div class="actu-location">📍 {{ event.lieu }}</div>
    <span class="actu-link">Voir l'événement →</span>
  </a>
</template>
<style scoped>
.actu-card { display:block; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:24px; text-decoration:none; color:inherit; transition:all .2s; }
.actu-card:hover { transform:translateY(-3px); box-shadow:var(--shadow-md); border-color:var(--primary-light); }
.actu-meta { display:flex; align-items:center; gap:8px; margin-bottom:14px; flex-wrap:wrap; }
.actu-badge { font-size:11px; font-weight:600; padding:3px 10px; border-radius:100px; }
.badge-presentiel { background:var(--primary-pale); color:var(--primary); }
.badge-hybrid     { background:var(--accent-pale); color:#C04020; }
.badge-visio      { background:#E8EAF6; color:#3949AB; }
.actu-date { font-size:12px; color:var(--muted); }
h3 { font-size:16px; font-weight:600; color:var(--dark); margin-bottom:8px; line-height:1.4; }
.actu-location { font-size:12.5px; color:var(--muted); margin-top:14px; }
.actu-link { display:inline-flex; align-items:center; gap:5px; font-size:12.5px; color:var(--primary); font-weight:600; margin-top:14px; }
</style>
