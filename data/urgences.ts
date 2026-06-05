export interface LienUrgence { label: string; badge: string; href: string; badgeRed?: boolean }
export interface CategorieUrgence { titre: string; emoji: string; liens: LienUrgence[] }

export const categoriesUrgence: CategorieUrgence[] = [
  { titre:"Santé mentale", emoji:"🧠", liens:[
    { label:"Fil Santé Jeunes", badge:"filsantejeunes.com", href:"https://www.filsantejeunes.com" },
    { label:"Prévention Suicide", badge:"3114", href:"https://3114.fr", badgeRed:true },
    { label:"Maisons des Adolescents", badge:"anmda.fr", href:"https://anmda.fr" },
  ]},
  { titre:"Violences & harcèlement", emoji:"🚨", liens:[
    { label:"Cyberharcèlement", badge:"3018", href:"https://www.3018.fr", badgeRed:true },
    { label:"Violences Femmes Info", badge:"3919", href:"https://www.solidaritefemmes.org", badgeRed:true },
    { label:"e-Enfance", badge:"e-enfance.org", href:"https://www.e-enfance.org" },
  ]},
  { titre:"Addictions", emoji:"💊", liens:[
    { label:"Drogues Info Service", badge:"0800 23 13 13", href:"https://www.drogues-info-service.fr" },
    { label:"Alcool Info Service", badge:"0980 980 930", href:"https://www.alcool-info-service.fr" },
    { label:"Tabac Info Service", badge:"39 89", href:"https://www.tabac-info-service.fr" },
  ]},
  { titre:"Hébergement & aide sociale", emoji:"🏠", liens:[
    { label:"Hébergement d'urgence (Samu Social)", badge:"115", href:"https://www.samusocial.paris", badgeRed:true },
    { label:"Croix-Rouge française", badge:"croix-rouge.fr", href:"https://www.croix-rouge.fr" },
    { label:"Secours Populaire", badge:"secourspopulaire.fr", href:"https://www.secourspopulaire.fr" },
    { label:"Restos du Cœur", badge:"restosducoeur.org", href:"https://www.restosducoeur.org" },
  ]},
  { titre:"Orientation & insertion", emoji:"🎯", liens:[
    { label:"Mission Locale", badge:"unml.info", href:"https://www.unml.info" },
    { label:"CIDJ – Centre Info Jeunesse", badge:"cidj.com", href:"https://www.cidj.com" },
  ]},
]
