<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
useFadeIn()
useSeoMeta({
  title: 'Atelier création de bijoux – TANA',
  description: "Un atelier où les jeunes créent leurs propres bijoux, gagnent en confiance et peuvent ensuite les vendre.",
})

const photos = [
  { src: '/ateliers/atelier-bijoux-1.jpg', alt: 'Bracelet à breloques réalisé pendant l\'atelier' },
  { src: '/ateliers/atelier-bijoux-2.jpg', alt: 'Table de l\'atelier avec bracelets terminés' },
  { src: '/ateliers/atelier-bijoux-3.jpg', alt: 'Matériel de création de bijoux disposé sur la table' },
  { src: '/ateliers/atelier-bijoux-4.jpg', alt: 'Jeune en train d\'assembler un bijou' },
  { src: '/ateliers/atelier-bijoux-5.jpg', alt: 'Perles et apprêts utilisés pendant l\'atelier' },
]

const etapes = [
  { num: '01', titre: 'On choisit', desc: "Chaque participant sélectionne ses perles, ses breloques et ses chaînes selon ses envies et son style." },
  { num: '02', titre: 'On crée', desc: "Avec l'aide des encadrants, les jeunes assemblent bracelets, colliers et porte-clés à leur rythme." },
  { num: '03', titre: 'On valorise', desc: "Les créations terminées peuvent être présentées, exposées, puis mises en vente lors de nos événements." },
]
</script>

<template>
  <div>
    <section class="atelier-hero">
      <div class="container">
        <div class="fade-in">
          <SectionTag label="Atelier créatif" />
          <h1 class="font-display page-title">Atelier de création de bijoux</h1>
          <p class="page-desc">
            Un moment pour soi, les mains occupées et l'esprit apaisé. Dans cet atelier, les jeunes
            apprennent à fabriquer leurs propres bijoux, à partir de perles, de chaînes et de petites
            breloques. Au-delà du plaisir de créer, chaque pièce devient un support d'expression, de
            concentration et de confiance en soi.
          </p>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:var(--bg)">
      <div class="container">
        <div class="fade-in intro-text">
          <p>
            La création de bijoux est bien plus qu'une activité manuelle. Elle permet de reprendre
            confiance, de retrouver de la concentration et de la fierté à travers un objet que l'on a
            fabriqué soi-même. Dans un cadre bienveillant et sans jugement, chaque participant avance à
            son rythme, accompagné par notre équipe. On y parle, on y rit, on y crée ensemble.
          </p>
        </div>

        <div class="gallery fade-in">
          <figure v-for="photo in photos" :key="photo.src" class="gallery-item">
            <NuxtImg :src="photo.src" :alt="photo.alt" loading="lazy" />
          </figure>
        </div>

        <div class="etapes fade-in">
          <div v-for="etape in etapes" :key="etape.num" class="etape">
            <div class="etape-num">{{ etape.num }}</div>
            <h3>{{ etape.titre }}</h3>
            <p>{{ etape.desc }}</p>
          </div>
        </div>

        <div class="vente fade-in">
          <div class="vente-text">
            <h2 class="font-display">Et ensuite ? On peut les vendre</h2>
            <p>
              Les bijoux réalisés pendant l'atelier ne restent pas dans un tiroir. Une fois terminés,
              ils peuvent être proposés à la vente lors de nos marchés solidaires, de nos événements et
              de nos forums. Cette démarche valorise le travail des jeunes, leur donne un premier rapport
              positif à l'argent gagné par leurs propres efforts, et finance en retour les actions de
              l'association. Créer, être fier de son objet, puis le voir trouver preneur : c'est tout un
              chemin de reconstruction qui se joue.
            </p>
            <NuxtLink to="/contact" class="btn btn-primary">Soutenir l'atelier</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.atelier-hero { background:var(--surface); padding:60px 2rem 48px; border-bottom:1px solid var(--border); }
.page-title { font-size:clamp(28px,5vw,52px); color:var(--dark); line-height:1.1; margin:12px 0; }
.page-desc  { font-size:17px; color:var(--text-sec); max-width:640px; line-height:1.8; }
.intro-text { max-width:720px; margin-bottom:48px; }
.intro-text p { font-size:16px; color:var(--text-sec); line-height:1.9; }
.gallery { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:18px; margin-bottom:64px; }
.gallery-item { margin:0; border-radius:var(--radius); overflow:hidden; border:1px solid var(--border); box-shadow:var(--shadow); aspect-ratio:4/3; }
.gallery-item img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .3s; }
.gallery-item:hover img { transform:scale(1.04); }
.etapes { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:20px; margin-bottom:64px; }
.etape { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:28px 24px; }
.etape-num { font-family:'DM Serif Display',serif; font-size:30px; color:var(--primary-light); margin-bottom:10px; }
.etape h3 { font-size:17px; font-weight:700; color:var(--dark); margin-bottom:8px; }
.etape p  { font-size:14px; color:var(--text-sec); line-height:1.6; }
.vente { background:var(--primary); border-radius:var(--radius); padding:48px; }
.vente-text { max-width:680px; }
.vente-text h2 { font-size:clamp(24px,3.5vw,36px); color:#fff; line-height:1.2; margin-bottom:16px; }
.vente-text p  { font-size:16px; color:rgba(255,255,255,.8); line-height:1.8; margin-bottom:24px; }
.vente-text .btn { background:#fff; color:var(--primary); }
.vente-text .btn:hover { background:var(--primary-pale); }
@media (max-width:768px) { .vente { padding:32px 24px; } }
</style>
