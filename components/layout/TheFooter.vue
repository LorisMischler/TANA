<template>
  <footer class="site-footer">
    <div class="footer-grid container">
      <div class="footer-brand">
        <div class="footer-name"><span class="dot"></span> TANA</div>
        <p>Tous Avec Nos Ados — Prévention, formation, accompagnement, sensibilisation et réinsertion des mineurs en situation de prostitution.</p>
        <div class="socials">
          <a href="mailto:contact@tana-asso.fr" class="social-link" title="Email">✉</a>
          <a href="https://www.instagram.com/tana_asso67?igsh=aWM3MG5meXlhMnhr&utm_source=qr" class="social-link" title="Instagram" target="_blank" rel="noopener">📸</a>
          <a href="https://www.facebook.com/profile.php?id=61590554433548&mibextid=wwXIfr&rdid=2pMeoj7zou5GiSYx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1bEX4FyNC3%2F%3Fmibextid%3DwwXIfr#" class="social-link" title="Facebook" target="_blank" rel="noopener">📘</a>
          <a href="https://www.linkedin.com/in/tana-tous-avec-nos-ados-a38435418/" class="social-link" title="LinkedIn" target="_blank" rel="noopener">💼</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>L'association</h4>
        <ul>
          <li><NuxtLink to="/#qui-sommes-nous">Qui sommes-nous ?</NuxtLink></li>
          <li><NuxtLink to="/equipe">Notre équipe</NuxtLink></li>
          <li><NuxtLink to="/#objectifs">Nos objectifs</NuxtLink></li>
          <li><NuxtLink to="/#actions">Nos actions</NuxtLink></li>
          <li><NuxtLink to="/actualites">Actualités</NuxtLink></li>
          <li><NuxtLink to="/ressources">Ressources</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Agir</h4>
        <ul>
          <li><NuxtLink to="/#don">Faire un don</NuxtLink></li>
          
          <li><NuxtLink to="/contact">Nous contacter</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Urgence</h4>
        <ul>
          <li><a href="tel:119">119 – Enfance en Danger</a></li>
          <li><a href="tel:3114">3114 – Prévention Suicide</a></li>
          <li><a href="tel:115">115 – Hébergement</a></li>
          <li><NuxtLink to="/aide-urgence">Toutes les ressources</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>© 2026 TANA – Projet pédagogique ESEIS Strasbourg · Président : Arnaud HAILLANT</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background:var(--dark); color:rgba(255,255,255,.7); padding:60px 2rem 30px; }
.footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; padding-bottom:48px; border-bottom:1px solid rgba(255,255,255,.1); }
.footer-name { display:flex; align-items:center; gap:8px; color:#fff; font-weight:700; font-size:15px; letter-spacing:.04em; margin-bottom:12px; }
.dot { width:8px; height:8px; border-radius:50%; background:var(--accent-light); display:inline-block; }
.footer-brand p { font-size:14px; line-height:1.7; margin-bottom:20px; }
.socials { display:flex; gap:10px; }
.social-link { width:36px; height:36px; border-radius:var(--radius-sm); background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.6); display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:15px; transition:all .15s; }
.social-link:hover { background:rgba(232,69,10,.3); color:var(--accent-light); }
.footer-col h4 { color:#fff; font-size:14px; font-weight:700; margin-bottom:16px; }
.footer-col ul { list-style:none; display:flex; flex-direction:column; gap:8px; }
.footer-col a { color:rgba(255,255,255,.55); text-decoration:none; font-size:13.5px; transition:color .15s; }
.footer-col a:hover { color:var(--accent-light); }
.footer-bottom { padding-top:24px; font-size:12.5px; color:rgba(255,255,255,.3); }
@media (max-width:768px) { .footer-grid { grid-template-columns:1fr 1fr; } }
@media (max-width:480px) { .footer-grid { grid-template-columns:1fr; } }
</style>
