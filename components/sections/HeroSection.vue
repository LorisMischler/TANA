<template>
  <section class="hero">
    <div class="hero-bg" />
    <div class="hero-content container">
      <div class="hero-tag">Association loi 1901 · Strasbourg</div>
      <h1>Prévenir, écouter,<br><em>protéger</em> les jeunes.</h1>
      <p class="hero-slogan">Prévention, formation, accompagnement, sensibilisation<br>et réinsertion des mineurs en situation de prostitution.</p>
      <p class="hero-desc">TANA est une association à but non lucratif et un accueil de jour qui accompagne les adolescents confrontés aux violences et à l'exploitation sexuelle. Nous agissons ensemble pour chaque jeune en difficulté.</p>e
      <div class="hero-actions">
        <NuxtLink to="#qui-sommes-nous" class="btn btn-accent">Découvrir l'association</NuxtLink>
        <NuxtLink to="/aide-urgence" class="btn btn-ghost">Aide d'urgence</NuxtLink>
      </div>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><strong>8</strong><span>Éducateurs fondateurs</span></div>
      <div class="hero-stat"><strong>8</strong><span>Types d'actions</span></div>
      <div class="hero-stat"><strong>0€</strong><span>Pour les jeunes</span></div>
    </div>
  </section>
</template>

<style scoped>
.hero { min-height:92vh; display:flex; align-items:center; padding:60px 2rem 80px; position:relative; overflow:hidden; background:var(--dark); }
.hero-bg {
  position:absolute; inset:0;
  background:
    radial-gradient(ellipse 70% 60% at 110% 50%, rgba(232,69,10,.2) 0%, transparent 65%),
    radial-gradient(ellipse 50% 70% at -10% 80%, rgba(91,86,224,.25) 0%, transparent 60%),
    var(--dark);
}
.hero-content { position:relative; z-index:1; max-width:700px; }
.hero-tag { display:inline-flex; align-items:center; background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.2); color:rgba(255,255,255,.85); font-size:12px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; padding:6px 14px; border-radius:100px; margin-bottom:28px; }
h1 { font-family:'DM Serif Display',serif; font-size:clamp(36px,6vw,72px); line-height:1.08; color:#fff; margin-bottom:20px; }
h1 em { font-style:italic; color:var(--accent-light); }
.hero-slogan { font-size:15px; font-weight:600; color:var(--accent-light); letter-spacing:.01em; margin-bottom:16px; line-height:1.6; border-left:3px solid var(--accent); padding-left:14px; }
.hero-desc { font-size:17px; color:rgba(255,255,255,.55); line-height:1.7; margin-bottom:40px; max-width:520px; }
.hero-actions { display:flex; gap:14px; flex-wrap:wrap; }
.hero-stats { position:absolute; right:2rem; bottom:3rem; display:flex; gap:28px; z-index:1; }
.hero-stat { text-align:center; }
.hero-stat strong { display:block; font-family:'DM Serif Display',serif; font-size:36px; color:var(--accent-light); }
.hero-stat span { font-size:12px; color:rgba(255,255,255,.45); text-transform:uppercase; letter-spacing:.06em; }
@media (max-width:768px) { .hero-stats { display:none; } }
</style>
