export interface Evenement {
  id: number
  titre: string
  date: string
  format: 'presentiel' | 'visio' | 'hybride'
  lieu: string
  lien: string
}

export const evenements: Evenement[] = [
  { id:1, titre:"Les mineur·es en situation de prostitution : prévenir, intervenir précocement", date:"29 janvier 2026", format:"hybride", lieu:"IFSI du GHICL, 2 rue Théodore Monod, 59120 Loos", lien:"http://directions.fr/" },
  { id:2, titre:"Comme si j'étais morte – projection débat", date:"6 mars 2026", format:"presentiel", lieu:"Le Lieu Documentaire, Strasbourg", lien:"https://www.facebook.com/lelieudocumentaire/videos/comme-si-j%C3%A9tais-morte-benjamin-montel-vrai-de-vrai-2026-festival-du-documentaire/1401377084575310/" },
  { id:3, titre:"Colloque national sur l'exploitation sexuelle des mineurs", date:"Avril 2026", format:"presentiel", lieu:"Ministère des Solidarités, 14 avenue Duquesne, 75007 Paris", lien:"https://solidarites.gouv.fr/sites/solidarite/files/2026-04/CR-conference-exploitation-sexuelle-des-mineurs-avril-2026.pdf" },
  { id:4, titre:"Être parent aujourd'hui", date:"5 mai 2026", format:"presentiel", lieu:"Humanis, 7 rue de la Krutenau, 67000 Strasbourg", lien:"https://www.humanis.org/agenda/sujets/prostitution/?mo=05&yr=2026" },
  { id:5, titre:"Forum du volontariat et de la mobilité internationale", date:"20 mai 2026", format:"presentiel", lieu:"Maison des Associations, 1a Place des Orphelins, 67000 Strasbourg", lien:"https://www.humanis.org/agenda/sujets/prostitution/?mo=05&yr=2026" },
  { id:6, titre:'Forum "Bienvenue à Strasbourg"', date:"21 mai 2026", format:"presentiel", lieu:"Place Kléber, 67000 Strasbourg", lien:"https://www.humanis.org/agenda/sujets/prostitution/?mo=05&yr=2026" },
  { id:7, titre:"XIXes Assises Nationales de la Protection de l'Enfance", date:"25–26 juin 2026", format:"hybride", lieu:"Palais de la Musique et des Congrès, Place de Bordeaux, 67000 Strasbourg", lien:"https://www.assisesprotectionenfance.fr/assises-2026" },
]
