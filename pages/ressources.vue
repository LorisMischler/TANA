<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
useFadeIn()
useSeoMeta({
  title: 'Ressources – TANA',
  description: "Articles, guides et ressources éducatives sur la protection des mineurs.",
})

const categories = [
  {
    id: 'prevention',
    titre: 'Conseils de prévention',
    emoji: '🛡️',
    ressources: [
      { titre: "Comment parler de ces sujets à un adolescent ?", desc: "Conseils pratiques pour aborder la prostitution et l'exploitation avec les jeunes, de manière bienveillante et adaptée à leur âge.", tag: 'Guide', lien: '#' },
      { titre: "Reconnaître les signes d'une situation à risque", desc: "Quels sont les signaux d'alerte ? Comment réagir face à un jeune qui semble en difficulté ?", tag: 'Fiche pratique', lien: '#' },
      { titre: "Réseaux sociaux : les dangers pour les mineurs", desc: "Comprendre les risques liés aux applications de rencontre, au partage d'images et aux sollicitations en ligne.", tag: 'Prévention', lien: '#' },
    ],
  },
  {
    id: 'education',
    titre: 'Ressources éducatives',
    emoji: '📚',
    ressources: [
      { titre: "Comprendre l'exploitation sexuelle des mineurs", desc: "Une introduction claire aux mécanismes de l'exploitation, destinée aux professionnels et aux familles.", tag: 'Article', lien: '#' },
      { titre: "Le rôle de l'éducateur face aux situations de prostitution", desc: "Comment les professionnels du secteur social et éducatif peuvent intervenir et accompagner.", tag: 'Formation', lien: '#' },
      { titre: "Consentement et relations saines : outils pédagogiques", desc: "Ressources pour animer des ateliers sur le consentement, les relations respectueuses et les droits des jeunes.", tag: 'Pédagogie', lien: '#' },
    ],
  },
  {
    id: 'sante-mentale',
    titre: 'Santé mentale',
    emoji: '🧠',
    ressources: [
      { titre: "Trauma et adolescence : comprendre pour mieux aider", desc: "Présentation des mécanismes du trauma chez les jeunes et des approches thérapeutiques adaptées.", tag: 'Santé', lien: '#' },
      { titre: "Prendre soin de soi quand on accompagne des jeunes en difficulté", desc: "Guide de prévention de l'épuisement professionnel pour les travailleurs sociaux et bénévoles.", tag: 'Bien-être', lien: '#' },
    ],
  },
  {
    id: 'guides',
    titre: 'Guides & documents utiles',
    emoji: '📄',
    ressources: [
      { titre: "Guide de signalement — que faire en cas de danger ?", desc: "Les étapes pour signaler une situation de danger auprès des autorités compétentes (119, services sociaux...).", tag: 'Guide', lien: '#' },
      { titre: "Cadre légal : la prostitution des mineurs en France", desc: "Présentation des textes de loi qui encadrent la protection des mineurs contre l'exploitation sexuelle.", tag: 'Juridique', lien: '#' },
      { titre: "Annuaire des structures d'aide en Alsace", desc: "Liste des associations, services sociaux et structures médicales disponibles dans la région de Strasbourg.", tag: 'Annuaire', lien: '#' },
    ],
  },
]

const tagColors: Record<string, string> = {
  'Guide':          'background:#D8F3DC;color:#2D6A4F',
  'Fiche pratique': 'background:#FDE8DF;color:#C04020',
  'Prévention':     'background:#FEF3C7;color:#B45309',
  'Article':        'background:#E0E7FF;color:#4338CA',
  'Formation':      'background:#F3E8FF;color:#7E22CE',
  'Pédagogie':      'background:#DCFCE7;color:#15803D',
  'Santé':          'background:#FCE7F3;color:#9D174D',
  'Bien-être':      'background:#E0F2FE;color:#0369A1',
  'Juridique':      'background:#F1F5F9;color:#334155',
  'Annuaire':       'background:#FEF9C3;color:#92400E',
}
</script>

<template>
  <div>
    <section class="ressources-hero">
      <div class="container">
        <div class="fade-in">
          <SectionTag label="Ressources" />
          <h1 class="font-display page-title">Ressources & documentation</h1>
          <p class="page-desc">Articles, guides de prévention, ressources éducatives et informations sur la santé mentale — tout ce dont vous avez besoin pour comprendre, prévenir et agir.</p>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:var(--bg)">
      <div class="container">
        <div v-for="cat in categories" :key="cat.id" class="cat-block fade-in">
          <h2 class="cat-title"><span>{{ cat.emoji }}</span> {{ cat.titre }}</h2>
          <div class="ressources-grid">
            <div v-for="r in cat.ressources" :key="r.titre" class="ressource-card">
              <div class="card-top">
                <span class="tag" :style="tagColors[r.tag]">{{ r.tag }}</span>
              </div>
              <h3>{{ r.titre }}</h3>
              <p>{{ r.desc }}</p>
              <a :href="r.lien" class="card-link">Lire la ressource →</a>
            </div>
          </div>
        </div>

        <!-- Bloc contribution -->
        <div class="contribute fade-in">
          <div class="contribute-text">
            <h3>Vous avez une ressource à partager ?</h3>
            <p>Professionnels, chercheurs, associations — si vous souhaitez contribuer à cette page en proposant un article, un guide ou un outil pédagogique, contactez-nous.</p>
          </div>
          <NuxtLink to="/contact" class="btn btn-primary">Nous contacter</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ressources-hero { background:var(--surface); padding:60px 2rem 48px; border-bottom:1px solid var(--border); }
.page-title { font-size:clamp(28px,5vw,52px); color:var(--dark); line-height:1.1; margin:12px 0; }
.page-desc  { font-size:17px; color:var(--text-sec); max-width:600px; line-height:1.7; }
.cat-block  { margin-bottom:56px; }
.cat-title  { display:flex; align-items:center; gap:10px; font-size:22px; font-weight:700; color:var(--dark); margin-bottom:24px; padding-bottom:14px; border-bottom:2px solid var(--border); }
.ressources-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:20px; }
.ressource-card { background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:24px; display:flex; flex-direction:column; gap:10px; transition:all .2s; }
.ressource-card:hover { transform:translateY(-3px); box-shadow:var(--shadow-md); border-color:var(--primary-light); }
.card-top { display:flex; align-items:center; gap:8px; }
.tag { font-size:11px; font-weight:700; padding:3px 10px; border-radius:100px; }
.ressource-card h3 { font-size:16px; font-weight:700; color:var(--dark); line-height:1.4; }
.ressource-card p  { font-size:13.5px; color:var(--text-sec); line-height:1.6; flex:1; }
.card-link { display:inline-flex; align-items:center; gap:5px; font-size:13px; color:var(--primary); font-weight:600; text-decoration:none; margin-top:4px; }
.card-link:hover { text-decoration:underline; }
.contribute { background:var(--primary); border-radius:var(--radius); padding:40px 48px; display:flex; align-items:center; justify-content:space-between; gap:32px; flex-wrap:wrap; margin-top:16px; }
.contribute-text h3 { font-size:20px; font-weight:700; color:#fff; margin-bottom:8px; }
.contribute-text p  { font-size:15px; color:rgba(255,255,255,.75); max-width:520px; line-height:1.6; }
.contribute .btn { background:#fff; color:var(--primary); white-space:nowrap; }
.contribute .btn:hover { background:var(--primary-pale); }
</style>
