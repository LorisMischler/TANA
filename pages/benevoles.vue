<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
useFadeIn()
useSeoMeta({ title: 'Bénévoles – TANA' })
const form = reactive({ prenom:'', nom:'', email:'', tel:'', competence:'Éducation / Formation', message:'' })
const perks = [
  { icon:'🎓', titre:'Formation incluse', desc:'Vous bénéficiez d\'une formation à nos méthodes et aux problématiques que nous traitons.' },
  { icon:'👥', titre:'Une équipe soudée', desc:'Rejoignez une équipe passionnée, portée par des valeurs communes.' },
  { icon:'💡', titre:'Un impact réel', desc:'Chaque heure donnée contribue directement à améliorer la vie de jeunes en difficulté.' },
  { icon:'📋', titre:'Flexibilité', desc:'Nous nous adaptons à vos disponibilités et proposons des missions variées.' },
]
function submit() { alert('Candidature envoyée ! Merci pour votre intérêt.') }
</script>

<template>
  <section class="section-pad">
    <div class="container">
      <div class="fade-in">
        <SectionTag label="Rejoignez-nous" />
        <h1 class="font-display page-title">Devenir bénévole</h1>
        <p class="page-desc">Vous souhaitez vous engager à nos côtés ? Remplissez ce formulaire et nous vous recontacterons rapidement.</p>
      </div>
      <div class="benv-grid">
        <div class="perks fade-in">
          <div v-for="p in perks" :key="p.titre" class="perk">
            <div class="perk-icon">{{ p.icon }}</div>
            <div><h4>{{ p.titre }}</h4><p>{{ p.desc }}</p></div>
          </div>
        </div>
        <div class="form-card fade-in">
          <h2>Candidature bénévole</h2>
          <div class="form-row">
            <div class="form-group"><label>Prénom *</label><input v-model="form.prenom" type="text" placeholder="Marie" /></div>
            <div class="form-group"><label>Nom *</label><input v-model="form.nom" type="text" placeholder="Dupont" /></div>
          </div>
          <div class="form-group"><label>Email *</label><input v-model="form.email" type="email" placeholder="marie@exemple.fr" /></div>
          <div class="form-group"><label>Téléphone</label><input v-model="form.tel" type="tel" placeholder="06 00 00 00 00" /></div>
          <div class="form-group"><label>Domaine de compétence</label>
            <select v-model="form.competence">
              <option>Éducation / Formation</option><option>Santé / Social</option><option>Communication</option><option>Animation / Ateliers</option><option>Juridique / Administratif</option><option>Autre</option>
            </select>
          </div>
          <div class="form-group"><label>Disponibilités & motivations</label><textarea v-model="form.message" rows="4" placeholder="Dites-nous en plus…"></textarea></div>
          <button class="btn btn-primary w-full" @click="submit">Envoyer ma candidature</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-title { font-size:clamp(28px,5vw,52px); color:var(--dark); line-height:1.1; margin:12px 0 8px; }
.page-desc  { font-size:17px; color:var(--text-sec); max-width:520px; margin-bottom:48px; }
.benv-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start; }
.perks { display:flex; flex-direction:column; gap:16px; }
.perk { display:flex; align-items:flex-start; gap:14px; padding:18px; background:var(--bg); border:1px solid var(--border); border-radius:var(--radius); }
.perk-icon { width:44px; height:44px; min-width:44px; border-radius:12px; background:var(--primary-pale); display:flex; align-items:center; justify-content:center; font-size:22px; }
.perk h4 { font-size:15px; font-weight:700; color:var(--dark); margin-bottom:4px; }
.perk p  { font-size:13.5px; color:var(--text-sec); line-height:1.5; }
.form-card { background:var(--bg); border:1px solid var(--border); border-radius:var(--radius); padding:36px; }
.form-card h2 { font-size:20px; font-weight:700; margin-bottom:24px; color:var(--dark); }
.w-full { width:100%; justify-content:center; }
@media (max-width:768px) { .benv-grid { grid-template-columns:1fr; } }
</style>
