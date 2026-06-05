<script setup lang="ts">
const selectedAmount = ref('20€')
const donType = ref<'ponctuel' | 'mensuel'>('ponctuel')
const amounts = ['10€', '20€', '50€', 'Autre']
const uses = [
  'Financer les ateliers et activités pour les jeunes',
  "Soutenir l'accompagnement psychologique",
  'Développer les actions de sensibilisation',
  'Former les professionnels de terrain',
  "Maintenir des permanences d'écoute",
]
function handleDon() {
  alert('Redirection vers le paiement sécurisé (HelloAsso – à intégrer)')
}
</script>

<template>
  <section id="don" class="section-pad don-section">
    <div class="don-bg" />
    <div class="container don-grid">
      <div class="don-text fade-in">
        <SectionTag label="Faire un don" :dark="true" />
        <h2 class="font-display">Soutenez notre action</h2>
        <p>Votre don permet à TANA de poursuivre ses missions auprès des adolescents les plus vulnérables.</p>
        <ul class="don-use">
          <li v-for="item in uses" :key="item"><span class="check">✓</span>{{ item }}</li>
        </ul>
      </div>
      <div class="don-card fade-in">
        <h3>Je fais un don</h3>
        <p>Chaque geste compte pour un jeune en difficulté.</p>
        <div class="don-type">
          <button :class="{ active: donType === 'ponctuel' }" @click="donType = 'ponctuel'">Don ponctuel</button>
          <button :class="{ active: donType === 'mensuel' }" @click="donType = 'mensuel'">Don mensuel</button>
        </div>
        <div class="amounts">
          <div v-for="a in amounts" :key="a" class="amount" :class="{ selected: selectedAmount === a }" @click="selectedAmount = a">{{ a }}</div>
        </div>
        <button class="btn btn-accent w-full" @click="handleDon">
          {{ selectedAmount === 'Autre' ? 'Choisir un montant 🧡' : `Faire un don de ${selectedAmount} 🧡` }}
        </button>
        <p class="mention">Paiement sécurisé · Reçu fiscal disponible</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.don-section { background:var(--dark); position:relative; overflow:hidden; }
.don-bg { position:absolute; inset:0; background:radial-gradient(ellipse 60% 70% at 80% 50%,rgba(232,69,10,.12) 0%,transparent 60%),radial-gradient(ellipse 40% 50% at 10% 20%,rgba(91,86,224,.15) 0%,transparent 60%); }
.don-grid { position:relative; z-index:1; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
.don-text h2 { font-size:clamp(28px,4vw,44px); color:#fff; line-height:1.2; margin:12px 0; }
.don-text > p { color:rgba(255,255,255,.6); font-size:17px; margin-bottom:24px; }
.don-use { list-style:none; display:flex; flex-direction:column; gap:10px; }
.don-use li { display:flex; align-items:center; gap:10px; color:rgba(255,255,255,.75); font-size:14.5px; }
.check { width:22px; height:22px; min-width:22px; border-radius:50%; background:rgba(232,69,10,.25); color:var(--accent-light); display:flex; align-items:center; justify-content:center; font-size:13px; }
.don-card { background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); border-radius:var(--radius); padding:36px; }
.don-card h3 { color:#fff; font-size:20px; font-weight:700; margin-bottom:8px; }
.don-card > p { color:rgba(255,255,255,.5); font-size:14px; margin-bottom:28px; }
.don-type { display:flex; gap:10px; margin-bottom:20px; }
.don-type button { flex:1; padding:10px; border-radius:var(--radius-sm); border:1.5px solid rgba(255,255,255,.15); background:transparent; color:rgba(255,255,255,.6); font-size:13.5px; font-weight:600; cursor:pointer; font-family:'Sora',sans-serif; transition:all .15s; }
.don-type button.active { background:rgba(232,69,10,.25); border-color:var(--accent-light); color:var(--accent-light); }
.amounts { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-bottom:20px; }
.amount { background:rgba(255,255,255,.08); border:1.5px solid rgba(255,255,255,.12); border-radius:var(--radius-sm); padding:12px 6px; text-align:center; color:rgba(255,255,255,.8); font-size:15px; font-weight:600; cursor:pointer; transition:all .15s; }
.amount:hover, .amount.selected { background:rgba(232,69,10,.25); border-color:var(--accent-light); color:var(--accent-light); }
.w-full { width:100%; justify-content:center; font-size:16px; padding:16px; }
.mention { font-size:12px; color:rgba(255,255,255,.35); text-align:center; margin-top:14px; }
@media (max-width:768px) { .don-grid { grid-template-columns:1fr; gap:40px; } .amounts { grid-template-columns:repeat(2,1fr); } }
</style>
