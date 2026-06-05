<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { evenements } from '~/data/evenements'

useFadeIn()

useSeoMeta({
  title: 'TANA – Tous Avec Nos Ados',
  description: "Association de prévention, accompagnement et réinsertion des mineurs en situation de prostitution.",
})

const objectifs = [
  "Sensibiliser les jeunes aux dangers de l'exploitation sexuelle",
  "Prévenir les risques liés aux réseaux sociaux et au cyberharcèlement",
  "Accompagner les mineurs en situation de vulnérabilité",
  "Favoriser l'accès à l'écoute, aux soins et à la protection",
  "Créer des espaces de parole sécurisants et bienveillants",
  "Développer des actions éducatives et préventives concrètes",
  "Informer les familles et les professionnels du secteur",
  "Promouvoir la protection et les droits des mineurs",
]

const evenementsRecents = evenements.slice(0, 3)
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsAboutSection />

    <section id="objectifs" class="section-pad" style="background:var(--bg)">
      <div class="container">
        <div class="fade-in" style="text-align:center;max-width:560px;margin:0 auto 48px;">
          <SectionTag label="Nos objectifs" />
          <h2 class="font-display" style="font-size:clamp(28px,4vw,44px);color:var(--dark);line-height:1.2;margin-top:8px;">Ce pour quoi nous agissons</h2>
        </div>
        <div class="obj-grid fade-in">
          <div v-for="(obj, i) in objectifs" :key="i" class="obj-item">
            <div class="obj-num">{{ String(i + 1).padStart(2, '0') }}</div>
            <p>{{ obj }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionsActionsSection />

    <section class="section-pad" style="background:var(--bg)">
      <div class="container">
        <div class="fade-in" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:48px;gap:16px;flex-wrap:wrap;">
          <div>
            <SectionTag label="Agenda" />
            <h2 class="font-display" style="font-size:clamp(28px,4vw,44px);color:var(--dark);line-height:1.2;margin-top:8px;">Prochains événements</h2>
          </div>
          <NuxtLink to="/actualites" class="btn btn-outline">Voir tous les événements →</NuxtLink>
        </div>
        <div class="actu-grid fade-in">
          <UiActuCard v-for="event in evenementsRecents" :key="event.id" :event="event" />
        </div>
      </div>
    </section>

    <SectionsDonSection />
  </div>
</template>

<style scoped>
.obj-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; }
.obj-item { display:flex; align-items:flex-start; gap:14px; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:20px; transition:all .2s; }
.obj-item:hover { border-color:var(--primary-light); box-shadow:var(--shadow); }
.obj-num { width:36px; height:36px; min-width:36px; border-radius:10px; background:var(--primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; }
.obj-item p { font-size:14px; color:var(--text-sec); line-height:1.5; padding-top:6px; }
.actu-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:22px; }
</style>
