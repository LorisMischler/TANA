<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
useFadeIn()
useSeoMeta({
  title: 'Notre équipe – TANA',
  description: "Huit éducateurs spécialisés en formation, animés par l'envie d'accompagner et de soutenir les personnes dans leur parcours de vie.",
})

const membres = [
  { nom:'Arnaud',   initiale:'A', president:true,  role:"Président de l'association",          desc:"Investi et à l'écoute, Arnaud veille au bon fonctionnement de l'association et encourage les projets portés par l'équipe." },
  { nom:'Yanis',    initiale:'Y', president:false, role:'Éducateur spécialisé en formation',   desc:"Curieux et dynamique, Yanis aime aller à la rencontre des autres et s'investit pleinement dans les actions de terrain." },
  { nom:'Marion',   initiale:'M', president:false, role:'Éducatrice spécialisée en formation', desc:"Bienveillante et attentive, Marion accorde une grande importance à l'écoute et au respect du rythme de chacun." },
  { nom:'Laura',    initiale:'L', president:false, role:'Éducatrice spécialisée en formation', desc:"Souriante et engagée, Laura apprécie le travail d'équipe et met son énergie au service de l'accompagnement des personnes." },
  { nom:'Mélina',   initiale:'M', president:false, role:'Éducatrice spécialisée en formation', desc:"Créative et motivée, Mélina aime développer de nouvelles idées pour favoriser l'inclusion et la participation de tous." },
  { nom:'Mathilde', initiale:'M', president:false, role:'Éducatrice spécialisée en formation', desc:"Patiente et rigoureuse, Mathilde sait créer un climat de confiance propice aux échanges et à l'accompagnement." },
  { nom:'Lucien',   initiale:'L', president:false, role:'Éducateur spécialisé en formation',   desc:"Réfléchi et disponible, Lucien apporte un regard posé sur les situations et apprécie le travail en collaboration." },
  { nom:'Mélusine', initiale:'M', president:false, role:'Éducatrice spécialisée en formation', desc:"Empathique et enthousiaste, Mélusine s'investit avec conviction dans les projets et les relations humaines." },
]

const couleurs = ['#3730C4', '#E8450A', '#5B56E0', '#B45309', '#3730C4', '#E8450A', '#5B56E0', '#B45309']
</script>

<template>
  <div>
    <section class="equipe-hero">
      <div class="container">
        <div class="fade-in">
          <SectionTag label="Notre équipe" />
          <h1 class="font-display page-title">Une aventure humaine</h1>
          <p class="page-desc">
            Notre équipe est composée de huit éducateurs spécialisés en formation, animés par l'envie
            d'accompagner et de soutenir les personnes dans leur parcours de vie. Chacun apporte sa
            personnalité, ses expériences et ses compétences, ce qui fait la richesse de notre équipe.
            Nous partageons des valeurs communes de respect, d'écoute, de bienveillance et de solidarité,
            qui guident nos actions au quotidien. Ensemble, nous avons à cœur de créer un environnement
            accueillant, rassurant et propice à l'épanouissement de chacun. Parce que nous croyons que
            l'accompagnement est avant tout une aventure humaine, nous avançons main dans la main avec
            les personnes que nous rencontrons.
          </p>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:var(--bg)">
      <div class="container">
        <div class="team-grid fade-in">
          <div v-for="(m, i) in membres" :key="m.nom" class="member-card" :class="{ president: m.president }">
            <div class="avatar" :style="{ background: couleurs[i] }">{{ m.initiale }}</div>
            <span v-if="m.president" class="badge">Président</span>
            <h3>{{ m.nom }}</h3>
            <p class="role">{{ m.role }}</p>
            <p class="desc">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.equipe-hero { background:var(--surface); padding:60px 2rem 48px; border-bottom:1px solid var(--border); }
.page-title { font-size:clamp(28px,5vw,52px); color:var(--dark); line-height:1.1; margin:12px 0; }
.page-desc  { font-size:16px; color:var(--text-sec); max-width:760px; line-height:1.9; }
.team-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:22px; }
.member-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:28px 24px; transition:all .2s; position:relative; }
.member-card:hover { transform:translateY(-3px); box-shadow:var(--shadow-md); border-color:var(--primary-light); }
.member-card.president { border-color:var(--primary-light); box-shadow:var(--shadow); }
.avatar { width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-family:'DM Serif Display',serif; font-size:26px; margin-bottom:16px; }
.badge { position:absolute; top:24px; right:24px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--primary); background:var(--primary-pale); padding:4px 10px; border-radius:100px; }
.member-card h3 { font-size:18px; font-weight:700; color:var(--dark); margin-bottom:4px; }
.role { font-size:13px; font-weight:600; color:var(--accent); margin-bottom:12px; }
.desc { font-size:14px; color:var(--text-sec); line-height:1.7; }
</style>
