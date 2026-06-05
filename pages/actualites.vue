<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { evenements } from '~/data/evenements'

useFadeIn()

useSeoMeta({
  title: "Actualités – TANA",
  description: "Retrouvez tous les événements et actualités de l'association TANA.",
})

const formatFilter = ref<string>('tous')

const filters = [
  { val: 'tous',       label: 'Tous' },
  { val: 'presentiel', label: 'Présentiel' },
  { val: 'hybride',    label: 'Hybride' },
  { val: 'visio',      label: 'Visio' },
]

const filtered = computed(() =>
  formatFilter.value === 'tous'
    ? evenements
    : evenements.filter(e => e.format === formatFilter.value)
)
</script>

<template>
  <section class="section-pad">
    <div class="container">
      <div class="fade-in page-header">
        <SectionTag label="Agenda" />
        <h1 class="font-display page-title">Actualités & événements</h1>
        <p class="page-desc">Conférences, colloques, forums et projections en lien avec la protection des mineurs.</p>
      </div>
      <div class="filters fade-in">
        <button
          v-for="f in filters"
          :key="f.val"
          :class="{ active: formatFilter === f.val }"
          @click="formatFilter = f.val"
        >
          {{ f.label }}
        </button>
      </div>
      <div class="actu-grid fade-in">
        <UiActuCard v-for="event in filtered" :key="event.id" :event="event" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-header { margin-bottom:40px; }
.page-title  { font-size:clamp(28px,5vw,52px); color:var(--dark); line-height:1.1; margin:12px 0; }
.page-desc   { font-size:17px; color:var(--text-sec); max-width:520px; }
.filters { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:40px; }
.filters button { padding:8px 18px; border-radius:100px; border:1.5px solid var(--border); background:transparent; font-size:13.5px; font-weight:600; color:var(--text-sec); cursor:pointer; font-family:'Sora',sans-serif; transition:all .15s; }
.filters button.active, .filters button:hover { background:var(--primary-pale); border-color:var(--primary-light); color:var(--primary); }
.actu-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:22px; }
</style>
