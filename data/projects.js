/* ====== CONFIGURATION : à personnaliser ====== */
var CONFIG = {
  email: "kouamewilfried186@gmail.com",
  github: "https://github.com/legunzdeuxpointzero-rgb",
  cvFile: "assets/documents/CV_marc.pdf" // laisser vide ("") pour imprimer la page à la place
};

var POSTER = "assets/images/affiche-never-be-djaouli.webp";

/* ====== DONNEES DES PROJETS ====== */
var STATUS = { ligne: "En ligne", realise: "Réalisé", cours: "En développement", concept: "Concept", acad: "Académique" };
var DOMAINS = { web: "Web & entrepreneuriat", res: "Réseaux & systèmes", crea: "Création & communication" };

var PROJECTS = [
 { id:"veloci", featured:true, caseStudy:true, dom:"web", st:"ligne", title:"Véloçi — Location de vélos", ini:"V", hue:0, coverImage:"assets/images/veloci.jpeg", images:["assets/images/image.jpg"],
   cat:"Entrepreneuriat · Développement web · Mobilité",
   sum:"Plateforme de location de vélos pour les livreurs et les particuliers d'Abidjan.",
   problem:"Comment permettre aux livreurs et aux particuliers d'Abidjan d'accéder à un vélo fiable sans l'acheter, et leur faciliter la prise de contact ?",
   solution:"Un site vitrine complet : présentation des vélos (Standard, Classique, Premium), tarifs à partir de 1 500 FCFA par jour, parcours de location en 4 étapes, formule partenaire pour les entreprises, page randonnée, FAQ et contact par WhatsApp.",
   role:"Créateur de Véloçi. Site conçu et livré en équipe de 3 (HTML/CSS), avec la responsabilité complète du volet digital : structure des pages, contenus, identité visuelle, mise en ligne et communication.",
   tech:["HTML","CSS","JavaScript","Vercel","WhatsApp Business"],
   result:["Site multi-pages en ligne, adapté au mobile.","Demande de location en un message WhatsApp.","Un outil de gestion interne est développé à part (voir la fiche dédiée)."],
   link:"https://veloci-ci.vercel.app", linkTxt:"Voir le site" },

 { id:"ezuni", featured:true, caseStudy:true, dom:"web", st:"ligne", title:"EZUNIALU — Site d'entreprise", ini:"EA", hue:1, coverImage:"assets/images/ezunialu.jpeg",
   cat:"Développement web · Site vitrine",
   sum:"Site professionnel pour une entreprise de menuiserie aluminium et PVC.",
   problem:"Comment présenter une entreprise de menuiserie aluminium, PVC, vitrerie et construction métallique de façon crédible et permettre aux clients de demander un devis ?",
   solution:"Un site à navigation interne (accueil, services, réalisations, à propos, contact) avec appel à l'action vers le devis, des métadonnées de référencement soignées pour le marché ivoirien et un affichage adapté au mobile.",
   role:"Conception du site : structure des pages, design, identité de marque et déploiement.",
   tech:["HTML","CSS","JavaScript","Vercel","SEO de base"],
   result:["Site en ligne avec référencement local (Abidjan, Côte d'Ivoire).","Parcours clair vers la demande de devis sur WhatsApp."],
   link:"https://ezunialu.vercel.app", linkTxt:"Voir le site" },

 { id:"carriere", featured:false, caseStudy:true, dom:"web", st:"ligne", title:"Journée Carrière UIST / 2ITS", ini:"JC", hue:2, coverImage:"assets/images/CARRIERE.jpeg",
   cat:"Éducation · Collecte de données · Application web",
   sum:"Inscription en ligne des élèves à une journée d'orientation, avec espace organisateur.",
   problem:"Comment collecter rapidement et proprement les informations des élèves lors d'une journée d'orientation universitaire, puis les exploiter ?",
   solution:"Un formulaire unique (identité, établissement d'origine, niveau, domaine d'intérêt) qui délivre un numéro de participation, et un espace organisateur protégé par mot de passe : liste des inscrits, statistiques par établissement et par domaine, modification des inscriptions et export CSV/Excel.",
   role:"Conception et développement du formulaire, de l'espace administrateur et du tableau de bord statistique.",
   tech:["HTML","CSS","JavaScript","GitHub Pages"],
   result:["Application en ligne utilisable le jour de l'événement.","Numéro de participation à présenter à l'accueil.","Export des données pour le suivi des orientations."],
   link:"https://legunzdeuxpointzero-rgb.github.io/Journ-e-Carriere_UIST-2IST/", linkTxt:"Voir l'application" },

 { id:"gestion", featured:false, dom:"web", st:"cours", title:"Véloçi — Gestion de flotte", ini:"VG", hue:3,
   cat:"Gestion · Tableau de bord · Mobilité",
   sum:"Outil interne pour suivre les locations, les paiements et l'entretien du parc.",
   problem:"Comment suivre au quotidien les vélos loués, les paiements et l'entretien sans tableur dispersé ?",
   solution:"Un tableau de bord de gestion de flotte (version MVP v1) avec alertes et horloge locale. Les données sont pour l'instant stockées dans le navigateur ; une base de données partagée est la prochaine étape.",
   role:"Conception et développement de l'outil interne de Véloçi.",
   tech:["HTML","CSS","JavaScript","Render"],
   result:["MVP en ligne pour tester les écrans et les alertes.","Prochaine étape : stockage partagé et comptes utilisateurs."],
   link:"https://gestion-veloci.onrender.com", linkTxt:"Ouvrir le tableau de bord",
   note:"Version de démonstration : l'hébergement gratuit peut mettre quelques secondes à démarrer." },

 { id:"billetterie", featured:false, dom:"web", st:"ligne", title:"Plateforme intelligente de billetterie", ini:"BQ", hue:4, coverImage:"assets/images/ticket-event-ui.svg", images:["assets/images/ticket-event-ui.svg"],
   cat:"Application web · Événementiel · Billetterie",
   sum:"Réservation de places, billets QR et contrôle des entrées.",
   problem:"Comment faciliter la découverte d'événements, la réservation et le contrôle des entrées avec les moyens de paiement locaux ?",
   solution:"Une plateforme prévue en versions successives : catalogue d'événements, réservation, confirmation manuelle des paiements Wave, génération de billets QR, puis validation et contrôle à l'entrée. L'automatisation des paiements est envisagée dans un second temps.",
   role:"Conception fonctionnelle et développement.",
   tech:["HTML","CSS","JavaScript","QR code"],
   result:["Version initiale avec confirmation manuelle des paiements.","Démonstration accessible en ligne."],
   link:"https://ticket-event-dmqq.onrender.com", linkTxt:"Découvrir la plateforme" },

 { id:"linkcard", featured:false, dom:"web", st:"concept", title:"LINKCARD — Carte de visite numérique", ini:"LC", hue:5, coverImage:"assets/images/carte.jpeg",
   cat:"Identité numérique · QR code · Produit numérique",
   sum:"Une page unique, accessible par QR code, qui réunit contacts, réseaux et CV.",
   problem:"Comment partager ses coordonnées et son activité professionnelle en un geste, sans carte papier ?",
   solution:"Une carte de visite numérique : un QR code ouvre une page mobile avec coordonnées, réseaux sociaux, CV, portfolio ou informations d'activité.",
   role:"Idée, conception du produit.", tech:["QR code","Page web mobile"],
   result:["Concept défini, développement à venir."] },

 { id:"edu", featured:false, dom:"web", st:"concept", title:"EduDomicile — Mise en relation éducative", ini:"ED", hue:0,
   cat:"Éducation · Plateforme de services",
   sum:"Mettre en relation élèves, parents et enseignants pour du soutien scolaire à domicile.",
   problem:"Comment aider les parents à trouver rapidement un enseignant fiable pour un accompagnement à domicile ?",
   solution:"Une plateforme de recherche et de mise en relation entre élèves, parents et enseignants.",
   role:"Idée, conception du produit.", tech:["À définir"],
   result:["Concept défini, développement à venir."] },

 { id:"stockflow", featured:false, dom:"web", st:"concept", title:"StockFlow — Gestion de stock", ini:"SF", hue:1,
   cat:"Gestion · Automatisation · Tableaux de bord",
   sum:"Suivi des produits, des entrées et sorties, et alertes de stock.",
   problem:"Comment aider un petit commerce à suivre ses quantités et à éviter les ruptures ?",
   solution:"Un outil qui suit les produits, les mouvements de stock, les quantités disponibles, les alertes et les performances commerciales.",
   role:"Idée, conception du produit.", tech:["À définir"],
   result:["Concept défini, développement à venir."] },

 { id:"magazine", featured:false, dom:"web", st:"concept", title:"Magazine universitaire numérique", ini:"MU", hue:2,
   cat:"Édition numérique · Université · Gestion de contenu",
   sum:"Publication numérique pour valoriser la vie universitaire et les productions étudiantes.",
   problem:"Comment donner de la visibilité aux actualités, aux productions étudiantes et aux ressources pédagogiques ?",
   solution:"Un magazine numérique organisé avec Google Drive et Google Sheets pour gérer les contenus simplement.",
   role:"Idée, conception éditoriale.", tech:["Google Drive","Google Sheets"],
   result:["Concept défini, développement à venir."] },

 { id:"ad", featured:false, dom:"res", st:"acad", title:"Infrastructure réseau et Active Directory", ini:"AD", hue:3,
   cat:"Réseaux · Windows Server · Active Directory",
   sum:"Contrôleur de domaine Windows Server pour dix postes.",
   problem:"Comment gérer de façon centralisée les utilisateurs et les ressources d'un petit parc de dix postes ?",
   solution:"Déploiement d'un contrôleur de domaine Windows Server avec Active Directory : comptes, ressources partagées, rattachement des postes et résolution de problèmes de connectivité.",
   role:"Projet d'équipe à l'UIST : déploiement du contrôleur de domaine, contribution à l'optimisation de l'infrastructure et résolution des problèmes de connectivité avec l'équipe technique.",
   tech:["Windows Server","Active Directory","DNS","IPv4"],
   result:["Gestion centralisée des utilisateurs et des ressources.","Diagnostic et correction de problèmes de connectivité."] },

 { id:"lab", featured:false, dom:"res", st:"acad", title:"Laboratoire de réseaux et Wi-Fi", ini:"LR", hue:4,
   cat:"Réseaux · Diagnostic · Windows · Linux",
   sum:"Travaux pratiques : adressage IPv4, DNS, tests de ping, diagnostic Wi-Fi.",
   problem:"Comment comprendre et diagnostiquer une panne de connectivité, étape par étape ?",
   solution:"Documentation de travaux pratiques : configuration IPv4, masque, passerelle, DNS, tests de ping, analyse de la connectivité et diagnostic de problèmes Wi-Fi.",
   role:"Réalisation et documentation des manipulations.",
   tech:["Windows","Linux","IPv4","Ping","DNS"],
   result:["Méthode de diagnostic reproductible."] },

 { id:"support", featured:false, dom:"res", st:"acad", title:"Support technique et dépannage", ini:"ST", hue:5,
   cat:"Support IT · Maintenance · Dépannage",
   sum:"Pannes courantes, reconfiguration Wi-Fi, réinitialisation de postes.",
   problem:"Comment rétablir rapidement l'usage d'un poste ou d'un réseau pour un utilisateur ?",
   solution:"Interventions pratiques : résolution de pannes courantes, reconfiguration de réseaux Wi-Fi, réinitialisation de postes et intervention sur un clavier d'ordinateur portable.",
   role:"Intervention directe auprès des utilisateurs.",
   tech:["Windows","Matériel","Wi-Fi"],
   result:["Résolution d'incidents matériels et logiciels en autonomie.","Réparation d'un clavier de portable en urgence, quelques minutes avant une soutenance de projet."] },

 { id:"cyber", featured:false, dom:"res", st:"cours", title:"Cybersécurité et hacking éthique", ini:"CS", hue:0,
   cat:"Cybersécurité · Formation · Laboratoire autorisé",
   sum:"Documentation de mes apprentissages en sécurité informatique.",
   problem:"Comment apprendre la sécurité informatique de façon responsable ?",
   solution:"Un espace de documentation : fondamentaux, protection des comptes, sécurité des appareils, sécurité Wi-Fi et exercices réalisés uniquement dans des environnements autorisés.",
   role:"Apprentissage et documentation.",
   tech:["Sécurité des comptes","Wi-Fi","Laboratoire autorisé"],
   result:["Apprentissage en cours."] },

 { id:"affiche", featured:false, dom:"crea", st:"realise", title:"Affiche « Never be djaouli »", ini:"NB", hue:2, image:POSTER,
   cat:"Design graphique · Identité personnelle · Communication",
   sum:"Affiche façon couverture de magazine pour me présenter autrement qu'avec un CV.",
   problem:"Comment se présenter de façon mémorable et fidèle à sa personnalité, au-delà d'un CV classique ?",
   solution:"Une affiche façon couverture de magazine : grand titre, portrait détouré, message « Disponible pour des idées web », citation sur l'authenticité et contact direct.",
   role:"Conception graphique et rédaction des textes.",
   tech:["Design graphique","Photo détourée","Typographie"],
   result:["Support de communication personnelle, partageable sur mobile.","Montre mon intérêt pour la création visuelle."] },

 { id:"motion", featured:false, dom:"crea", st:"cours", title:"Motion design et communication Véloçi", ini:"MD", hue:1,
   cat:"Motion design · Storytelling · Branding",
   sum:"Scénarios vidéo, affiches et animations pour présenter Véloçi.",
   problem:"Comment présenter un service de location de vélos de façon vivante et mémorable ?",
   solution:"Scénarios vidéo, identité graphique, affiches promotionnelles, animations et contenus pour le service de location et les randonnées.",
   role:"Conception des scénarios et de l'identité visuelle.",
   tech:["Motion design","Identité graphique","Réseaux sociaux"],
   result:["Contenus en production, à ajouter au fur et à mesure."] },

 { id:"randos", featured:false, dom:"crea", st:"cours", title:"Véloçi — Randonnées du soir", ini:"RS", hue:2,
   cat:"Événementiel · Communication · Entrepreneuriat",
   sum:"Randonnées à vélo à Yopougon : 10, 15 et 20 km.",
   problem:"Comment faire découvrir le vélo comme sport, détente et moment de convivialité dans Abidjan ?",
   solution:"Un concept d'événements cyclistes à Yopougon et aux alentours, avec trois parcours de 10, 15 et 20 km et une organisation pensée pour la sécurité des participants.",
   role:"Conception de l'événement et de sa communication.",
   tech:["Événementiel","Communication","Page dédiée sur le site Véloçi"],
   result:["Page Randonnée en ligne sur le site Véloçi."],
   link:"https://veloci-ci.vercel.app/Randonne.html", linkTxt:"Voir la page Randonnée" },

 { id:"obsidian", featured:false, dom:"crea", st:"cours", title:"Espace de travail Obsidian", ini:"OB", hue:3,
   cat:"Productivité · Documentation · Organisation",
   sum:"Notes, fiches projets et tableau de bord personnel.",
   problem:"Comment structurer ses connaissances et suivre l'avancement de plusieurs initiatives ?",
   solution:"Un espace Obsidian avec notes reliées, fiches projets, tableaux de suivi et tableau de bord personnel.",
   role:"Conception et organisation.", tech:["Obsidian","Markdown"],
   result:["Outil de travail quotidien."] },

 { id:"sites", featured:false, dom:"crea", st:"cours", title:"Sites personnalisés et expériences interactives", ini:"WX", hue:4,
   cat:"HTML · CSS · Expérience utilisateur",
   sum:"Sites créatifs et pages événementielles.",
   problem:"Comment rendre une page web claire, belle et agréable à utiliser ?",
   solution:"Réalisations web personnelles : sites créatifs et pages événementielles, avec attention portée à la conception et à l'expérience utilisateur.",
   role:"Conception et développement.", tech:["HTML","CSS","JavaScript"],
   result:["Captures et explications à ajouter."] }
];

/* ====== COMPETENCES ====== */
var SKILLS = [
 { t:"Réseaux et systèmes", d:"Faire communiquer des machines et gérer un parc.", items:[
   ["Adressage IPv4 et diagnostic de connectivité",4,"Laboratoire de réseaux"],
   ["Windows Server et Active Directory",3,"Infrastructure Active Directory"],
   ["Windows",4,"Support technique"],
   ["Linux",2,"Laboratoire de réseaux"]]},
 { t:"Développement web", d:"Du site vitrine à l'application utile.", items:[
   ["HTML et CSS",4,"Véloçi, EZUNIALU"],
   ["JavaScript",3,"Journée Carrière, gestion de flotte"],
   ["Python et SQL",2,"Notions"],
   ["Django",1,"En apprentissage"]]},
 { t:"Support et dépannage", d:"Rétablir l'usage, expliquer, accompagner.", items:[
   ["Pannes matérielles et logicielles",4,"Support technique"],
   ["Configuration et diagnostic Wi-Fi",4,"Laboratoire de réseaux"],
   ["Maintenance courante",3,"Support technique"],
   ["Sécurité des comptes et des appareils",2,"Cybersécurité"]]},
 { t:"Créativité et gestion de projets", d:"Transformer une idée en réalisation.", items:[
   ["Conception de sites vitrines",4,"Véloçi, EZUNIALU"],
   ["Communication numérique et motion design",2,"Communication Véloçi"],
   ["Documentation et organisation (Obsidian)",3,"Espace Obsidian"],
   ["Développement d'initiatives entrepreneuriales",3,"Véloçi"]]}
];

/* ====== FACETTES ====== */
var FACETS = {
 tech: { p:"Je dépanne, configure et documente : réseaux, systèmes Windows et Linux, postes de travail et connectivité. J'aime comprendre pourquoi une panne arrive, pas seulement la réparer.", ids:["ad","lab","support","cyber"] },
 crea: { p:"Je conçois des sites et des outils clairs, rapides et adaptés au mobile, pour des entreprises, une université et mes propres idées.", ids:["ezuni","carriere","affiche","motion"] },
 entr: { p:"Avec Véloçi, j'ai créé une activité de mobilité pour les livreurs d'Abidjan et je construis autour d'elle des outils, une communauté et de nouveaux projets.", ids:["veloci","gestion","randos","billetterie"] }
};
