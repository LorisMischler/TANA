<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
useFadeIn()
useSeoMeta({
  title: 'Mentions légales & confidentialité – TANA',
  description: "Mentions légales, hébergement et politique de protection des données personnelles du site de l'association TANA.",
})
</script>

<template>
  <section class="section-pad">
    <div class="container legal">
      <div class="fade-in">
        <SectionTag label="Informations légales" />
        <h1 class="font-display page-title">Mentions légales & confidentialité</h1>
        <p class="intro">
          Cette page présente les informations légales relatives au site de l'association TANA ainsi que
          notre politique de protection des données personnelles, conformément au Règlement Général sur la
          Protection des Données (RGPD).
        </p>
      </div>

      <div class="fade-in block">
        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par l'association TANA (Tous Avec Nos Ados), association à but non
          lucratif régie par la loi du 1<sup>er</sup> juillet 1901.
        </p>
        <p>
          Siège social : 3 rue Sédillot, 67000 Strasbourg.<br>
          Représentant légal et directeur de la publication : Arnaud Haillant, président.<br>
          Contact : contact@tana-asso.fr<br>
          Site réalisé dans le cadre d'un projet pédagogique à l'ESEIS de Strasbourg.
        </p>
      </div>

      <div class="fade-in block">
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          Vercel s'engage à respecter le Règlement Général sur la Protection des Données et encadre les
          transferts de données par des garanties appropriées (clauses contractuelles types de la
          Commission européenne).
        </p>
      </div>

      <div class="fade-in block">
        <h2>Protection des données personnelles</h2>
        <p>
          Nous attachons une grande importance au respect de votre vie privée. Notre site ne dispose
          d'aucune base de données : il n'enregistre, ne collecte et ne conserve aucune donnée personnelle
          des personnes qui le consultent. La navigation sur le site est entièrement anonyme.
        </p>
        <p>
          Le site ne dépose pas de cookies de suivi ni d'outils de mesure d'audience permettant de vous
          identifier ou de tracer votre navigation.
        </p>
        <p>
          Le formulaire de contact présent sur le site sert uniquement à faciliter une prise de contact.
          Les informations que vous y saisissez ne sont pas stockées sur le site. Si vous nous écrivez par
          ce biais ou directement par courriel, les coordonnées que vous nous transmettez sont utilisées
          dans le seul but de répondre à votre demande et ne sont jamais cédées à des tiers.
        </p>
      </div>

      <div class="fade-in block">
        <h2>Liens et services externes</h2>
        <p>
          Le site contient des liens vers des plateformes externes, notamment les réseaux sociaux
          (Facebook, Instagram, LinkedIn) ainsi que des sites de ressources et d'aide. Ces plateformes
          sont indépendantes de l'association et disposent de leurs propres politiques de confidentialité,
          elles-mêmes soumises au RGPD. Nous vous invitons à les consulter. L'association ne saurait être
          tenue responsable du contenu ni des pratiques de collecte de données de ces sites tiers.
        </p>
      </div>

      <div class="fade-in block">
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et
          d'opposition concernant vos données personnelles. Dans la mesure où notre site ne conserve aucune
          donnée, ces droits s'appliquent uniquement aux échanges que vous auriez initiés avec nous. Pour
          toute question relative à vos données, vous pouvez nous contacter à l'adresse contact@tana-asso.fr.
        </p>
      </div>

      <div class="fade-in block">
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, visuels, logo) est la propriété de
          l'association TANA, sauf mention contraire. Toute reproduction sans autorisation préalable est
          interdite.
        </p>
      </div>

      <p class="fade-in maj">Dernière mise à jour : juin 2026.</p>
    </div>
  </section>
</template>

<style scoped>
.legal { max-width:760px; }
.page-title { font-size:clamp(28px,5vw,48px); color:var(--dark); line-height:1.15; margin:12px 0 20px; }
.intro { font-size:17px; color:var(--text-sec); line-height:1.8; margin-bottom:8px; }
.block { margin-top:40px; }
.block h2 { font-size:20px; font-weight:700; color:var(--dark); margin-bottom:14px; padding-bottom:10px; border-bottom:2px solid var(--border); }
.block p { font-size:15px; color:var(--text-sec); line-height:1.8; margin-bottom:14px; }
.block a { color:var(--primary); }
.maj { margin-top:40px; font-size:13px; color:var(--muted); font-style:italic; }
</style>
