<template>
  <div class="urgence-banner">
    <div class="inner">
      <p><strong>119</strong> – Allô Enfance en Danger – numéro gratuit, 24h/24</p>
      <NuxtLink to="/aide-urgence" class="link">Toutes les ressources d'urgence →</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.urgence-banner { background:linear-gradient(135deg,#E8450A,#C93A08); padding:14px 2rem; text-align:center; }
.inner { max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:center; gap:20px; flex-wrap:wrap; }
p { color:#fff; font-size:14px; font-weight:500; }
strong { font-size:18px; font-weight:700; }
.link { display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,.2); color:#fff; text-decoration:none; padding:6px 14px; border-radius:100px; font-size:13px; font-weight:600; border:1px solid rgba(255,255,255,.3); transition:background .15s; }
.link:hover { background:rgba(255,255,255,.3); }
</style>
