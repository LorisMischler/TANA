<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { categoriesUrgence } from '~/data/urgences'

useFadeIn()

useSeoMeta({
  title: "Aide d'urgence – TANA",
  description: "Numéros et ressources d'urgence pour les jeunes en difficulté.",
})
</script>

<template>
  <section class="section-pad">
    <div class="container">
      <div class="urgence-hero fade-in">
        <h1 class="font-display">Aide d'urgence</h1>
        <p>Si vous êtes en danger ou si vous connaissez un jeune en difficulté, ces ressources peuvent vous aider immédiatement.</p>
        <a href="tel:119" class="urgence-cta">📞 119 – Allô Enfance en Danger</a>
      </div>
      <div class="cats fade-in">
        <div v-for="cat in categoriesUrgence" :key="cat.titre" class="cat">
          <h3><span>{{ cat.emoji }}</span> {{ cat.titre }}</h3>
          <div class="links">
            <UiUrgenceLinkItem v-for="lien in cat.liens" :key="lien.href" :lien="lien" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.urgence-hero { background:linear-gradient(135deg,#1B2E2A,#2D3E3A); border-radius:var(--radius); padding:48px; margin-bottom:48px; }
.urgence-hero h1 { font-size:clamp(28px,5vw,44px); color:#fff; margin-bottom:12px; }
.urgence-hero p  { color:rgba(255,255,255,.65); font-size:16px; margin-bottom:28px; max-width:480px; }
.urgence-cta { display:inline-flex; align-items:center; gap:12px; background:#D4450F; color:#fff; padding:14px 24px; border-radius:var(--radius-sm); text-decoration:none; font-weight:700; font-size:20px; transition:background .15s; }
.urgence-cta:hover { background:#B83209; }
.cats { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; }
.cat h3 { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); padding-bottom:12px; border-bottom:1.5px solid var(--border); margin-bottom:14px; display:flex; align-items:center; gap:8px; }
.links { display:flex; flex-direction:column; gap:8px; }
</style>
