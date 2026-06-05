<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
useFadeIn()
useSeoMeta({ title: 'Contact – TANA' })

const form = reactive({ prenom:'', nom:'', email:'', sujet:'Information générale', message:'' })
function send() { alert('Message envoyé ! Merci.') }
</script>

<template>
  <section class="section-pad">
    <div class="container">
      <div class="fade-in">
        <SectionTag label="Nous contacter" />
        <h1 class="font-display page-title">Prenons contact</h1>
      </div>
      <div class="contact-grid">
        <div class="contact-info fade-in">
          <div class="contact-item"><div class="ci-icon">✉️</div><div><h4>Email</h4><p><a href="mailto:contact@tana-asso.fr">contact@tana-asso.fr</a></p></div></div>
          <div class="contact-item"><div class="ci-icon">📞</div><div><h4>Téléphone</h4><p>À compléter</p></div></div>
          <div class="contact-item"><div class="ci-icon">📍</div><div><h4>Adresse</h4><p>Strasbourg, Alsace</p></div></div>
          <div class="contact-item"><div class="ci-icon">📸</div><div><h4>Instagram</h4><p><a href="#">@tana_asso</a></p></div></div>
          <div class="alert-urgence">
            <p class="alert-title">🚨 Vous êtes en danger ?</p>
            <p>Appelez immédiatement le <strong>119</strong> ou le <strong>15</strong>. Gratuit, 24h/24.</p>
          </div>
        </div>
        <div class="contact-form fade-in">
          <h2>Envoyer un message</h2>
          <div class="form-row">
            <div class="form-group"><label>Prénom</label><input v-model="form.prenom" type="text" placeholder="Marie" /></div>
            <div class="form-group"><label>Nom</label><input v-model="form.nom" type="text" placeholder="Dupont" /></div>
          </div>
          <div class="form-group"><label>Email *</label><input v-model="form.email" type="email" placeholder="marie@exemple.fr" /></div>
          <div class="form-group"><label>Sujet</label>
            <select v-model="form.sujet">
              <option>Information générale</option><option>Demande d'aide</option><option>Bénévolat</option><option>Partenariat</option><option>Presse / Médias</option>
            </select>
          </div>
          <div class="form-group"><label>Message *</label><textarea v-model="form.message" rows="5" placeholder="Votre message…"></textarea></div>
          <button class="btn btn-primary w-full" @click="send">Envoyer le message</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-title { font-size:clamp(28px,5vw,52px); color:var(--dark); line-height:1.1; margin:12px 0 40px; }
.contact-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:60px; align-items:start; }
.contact-info { display:flex; flex-direction:column; gap:16px; }
.contact-item { display:flex; align-items:flex-start; gap:14px; padding:18px; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); }
.ci-icon { width:42px; height:42px; min-width:42px; border-radius:10px; background:var(--primary-pale); display:flex; align-items:center; justify-content:center; font-size:20px; }
.contact-item h4 { font-size:13px; font-weight:600; color:var(--muted); text-transform:uppercase; letter-spacing:.06em; margin-bottom:2px; }
.contact-item p { font-size:15px; color:var(--dark); font-weight:500; }
.contact-item a { color:var(--primary); text-decoration:none; }
.alert-urgence { background:#FEF2F2; border:1px solid #FECACA; border-radius:var(--radius); padding:20px; }
.alert-title { font-size:14px; color:#7F1D1D; font-weight:600; margin-bottom:6px; }
.alert-urgence p { font-size:13px; color:#991B1B; }
.contact-form { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:36px; }
.contact-form h2 { font-size:20px; font-weight:700; color:var(--dark); margin-bottom:24px; }
.w-full { width:100%; justify-content:center; }
@media (max-width:768px) { .contact-grid { grid-template-columns:1fr; } }
</style>
