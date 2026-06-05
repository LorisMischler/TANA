<template>
  <section id="qui-sommes-nous" class="section-pad about">
    <div class="container about-grid">
      <div class="about-text fade-in">
        <SectionTag label="Notre histoire" />
        <h2 class="section-title font-display">Qui sommes-nous ?</h2>
        <p>TANA (<em>Tous Avec Nos Ados</em>) est une association fondée par 9 éducateurs spécialisés en formation à l'ESEIS de Strasbourg.</p>
        <p>Notre projet est né du constat que la prostitution des mineurs est un phénomène en augmentation, touchant des adolescents fragilisés par des violences, des ruptures familiales, l'isolement ou la précarité.</p>
        <p>Nous créons des espaces d'écoute, de protection et d'accompagnement pour les jeunes en difficulté.</p>
        <NuxtLink to="#actions" class="btn btn-outline" style="margin-top:28px;">Voir nos actions →</NuxtLink>
      </div>
      <div class="values-grid fade-in">
        <div v-for="val in values" :key="val.titre" class="value-card">
          <div class="value-icon">{{ val.icon }}</div>
          <h4>{{ val.titre }}</h4>
          <p>{{ val.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  { icon:'💙', titre:'Bienveillance', desc:"Accueillir chaque jeune sans jugement, avec respect et écoute." },
  { icon:'🛡️', titre:'Protection',   desc:"Mettre la sécurité des mineurs au cœur de nos actions." },
  { icon:'🤝', titre:'Solidarité',   desc:"Créer du lien entre jeunes, familles et professionnels." },
  { icon:'🔍', titre:'Prévention',   desc:"Informer pour permettre aux jeunes de mieux se protéger." },
  { icon:'🌟', titre:'Respect',      desc:"Respecter l'histoire et la parole de chaque personne." },
  { icon:'✊', titre:'Engagement',   desc:"Agir collectivement contre les violences et l'exploitation." },
]
</script>

<style scoped>
.about { background:var(--surface); }
.about-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start; }
.about-text p { color:var(--text-sec); margin-bottom:16px; }
.section-title { font-size:clamp(28px,4vw,44px); line-height:1.2; color:var(--dark); margin-bottom:16px; }
.values-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.value-card { background:var(--bg); border:1px solid var(--border); border-radius:var(--radius); padding:20px; transition:all .2s; }
.value-card:hover { border-color:var(--primary-light); transform:translateY(-2px); box-shadow:var(--shadow); }
.value-icon { width:40px; height:40px; border-radius:10px; background:var(--primary-pale); display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:12px; }
h4 { font-size:14px; font-weight:700; color:var(--dark); margin-bottom:4px; }
p  { font-size:13px; color:var(--text-sec); line-height:1.5; }
@media (max-width:768px) { .about-grid,.values-grid { grid-template-columns:1fr; } }
</style>
