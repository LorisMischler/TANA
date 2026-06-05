<template>
  <section id="actions" class="section-pad actions">
    <div class="container">
      <div class="fade-in header">
        <SectionTag label="Nos actions" />
        <h2 class="section-title font-display">Ce que nous faisons<br>concrètement</h2>
      </div>
      <div class="actions-grid fade-in">
        <div v-for="action in actions" :key="action.titre" class="action-card">
          <div class="action-icon" :style="{ background: action.bg, color: action.color }">{{ action.icon }}</div>
          <h3>{{ action.titre }}</h3>
          <p>{{ action.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const actions = [
  { icon:'🗣️', bg:'#EEEEFF', color:'#3730C4', titre:'Temps de parole',  desc:"Des espaces d'échange bienveillants où les jeunes peuvent s'exprimer librement, sans jugement." },
  { icon:'🎨', bg:'#FDE8DF', color:'#E8450A', titre:'Ateliers créatifs', desc:"Art et expression comme outils de reconstruction et d'épanouissement personnel." },
  { icon:'🍳', bg:'#FEF3C7', color:'#B45309', titre:'Ateliers cuisine',  desc:"Apprendre ensemble, créer du lien et retrouver des repères à travers la cuisine collective." },
  { icon:'🩺', bg:'#EEEEFF', color:'#3730C4', titre:'Soutien médical',   desc:"Accès à des médecins, psychologues et accompagnement de santé." },
  { icon:'🏠', bg:'#F0F4F8', color:'#334155', titre:'Hébergement',       desc:"Orientation vers des solutions d'hébergement d'urgence ou temporaire." },
  { icon:'📚', bg:'#FDE8DF', color:'#E8450A', titre:'Formations',        desc:"Formations pour les professionnels (éducateurs, enseignants, soignants)." },
  { icon:'📢', bg:'#EEEEFF', color:'#3730C4', titre:'Sensibilisation',   desc:"Interventions en milieu scolaire pour informer sur les risques de l'exploitation." },
  { icon:'💪', bg:'#FDE8DF', color:'#E8450A', titre:'Estime de soi',     desc:"Ateliers dédiés à la confiance en soi et à l'affirmation de soi." },
]
</script>

<style scoped>
.actions { background:var(--bg); }
.header { display:flex; align-items:flex-end; justify-content:space-between; gap:24px; flex-wrap:wrap; margin-bottom:48px; }
.section-title { font-size:clamp(28px,4vw,44px); line-height:1.2; color:var(--dark); }
.actions-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; }
.action-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:28px 22px; transition:all .2s; }
.action-card:hover { transform:translateY(-3px); box-shadow:var(--shadow-md); border-color:var(--primary-light); }
.action-icon { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; font-size:26px; margin-bottom:16px; }
h3 { font-size:16px; font-weight:700; color:var(--dark); margin-bottom:8px; }
p  { font-size:13.5px; color:var(--text-sec); line-height:1.6; }
</style>
