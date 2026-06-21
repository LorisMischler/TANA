<script setup lang="ts">
const mobileOpen = ref(false)
const navLinks = [
  { label: "L'association", href: '/#qui-sommes-nous' },
  { label: 'Nos actions',   href: '/#actions' },
  { label: 'Actualités',    href: '/actualites' },
  { label: 'Ressources',    href: '/ressources' },
  { label: 'Équipe',        href: '/equipe' },
  { label: 'Contact',       href: '/contact' },
]
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" class="nav-logo">
      <!-- Remplacer par : <img src="/logo.jpg" width="52" height="52" alt="TANA" style="object-fit:contain;" /> -->
      <img src="/logo.jpg" alt="TANA" class="logo-img" />
      <div class="logo-text">
        <strong>TANA</strong>
        <span>Tous Avec Nos Ados</span>
      </div>
    </NuxtLink>
    <ul class="nav-links" :class="{ open: mobileOpen }">
      <li v-for="link in navLinks" :key="link.href">
        <NuxtLink :to="link.href" @click="mobileOpen = false">{{ link.label }}</NuxtLink>
      </li>
      <li class="urgence-link">
        <NuxtLink to="/aide-urgence" @click="mobileOpen = false">🚨 Aide d'urgence</NuxtLink>
      </li>
      <li class="cta-link">
        <NuxtLink to="/#don" @click="mobileOpen = false">Faire un don</NuxtLink>
      </li>
    </ul>
    <button class="menu-btn" @click="mobileOpen = !mobileOpen" aria-label="Menu">
      {{ mobileOpen ? '✕' : '☰' }}
    </button>
  </nav>
</template>

<style scoped>
.navbar { position:sticky; top:0; z-index:100; background:rgba(255,255,255,.95); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); padding:0 2rem; display:flex; align-items:center; justify-content:space-between; height:120px; }
.nav-logo { display:flex; align-items:center; gap:12px; text-decoration:none; color:var(--dark); }
.logo-img { height:120px; width:auto; object-fit:contain; }
.logo-placeholder { width:52px; height:52px; border-radius:50%; background:var(--primary); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:16px; }
.logo-text strong { display:block; font-size:15px; font-weight:700; color:var(--primary); letter-spacing:.04em; }
.logo-text span   { display:block; font-size:11px; color:var(--muted); }
.nav-links { display:flex; align-items:center; gap:2px; list-style:none; }
.nav-links a { display:block; padding:8px 12px; border-radius:var(--radius-sm); text-decoration:none; color:var(--text-sec); font-size:13px; font-weight:500; transition:all .15s; }
.nav-links a:hover { background:var(--primary-pale); color:var(--primary); }
.urgence-link a { background:#FDE8DF !important; color:#E8450A !important; font-weight:600 !important; }
.urgence-link a:hover { background:#FBCBB8 !important; }
.cta-link a { background:var(--primary) !important; color:#fff !important; }
.cta-link a:hover { background:var(--dark) !important; }
.menu-btn { display:none; background:none; border:1px solid var(--border); border-radius:var(--radius-sm); padding:8px 12px; cursor:pointer; font-size:16px; color:var(--text); }
@media (max-width:900px) {
  .menu-btn { display:block; }
  .nav-links { display:none; flex-direction:column; align-items:stretch; position:absolute; top:72px; left:0; right:0; background:rgba(255,255,255,.98); backdrop-filter:blur(12px); border-bottom:1px solid var(--border); padding:12px; gap:4px; z-index:99; }
  .nav-links.open { display:flex; }
}
</style>
