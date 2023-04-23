import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    certificates: [
      {
        school: 'CFA Insta, Paris',
        label: 'BTS SIO option SLAM',
        date: '2017 - 2019',
        description: '14,68/20 de moyenne',
        skills: [
          'C',
          'PHP',
          'MySQL',
          'Java',
          'MCD',
          'UML'
        ]
      },
      {
        school: 'Cours Diderot, Lyon',
        label: 'BTS Tourisme',
        date: '2012 - 2014',
        description: '',
        skills: []
      },
      {
        school: 'Lycee Philibert Delorme, L\'Isle-D\'Abeau',
        label: 'Baccalaureat Litteraire',
        date: '2011 - 2012',
        description: 'Mention Assez Bien',
        skills: []
      },
    ],
    experiences: [
      {
        society: 'Orange, Arcueil',
        label: 'Lead développeuse PHP / Drupal',
        date: 'Décembre 2022 - Avril 2023',
        description: 'Livraison des features sur les différents environnements - validation des merge requests sur Gitlab - accompagnement des développeurs dans leur montée en compétence - développement en Drupal 9',
        skills: [
          'Drupal 9',
          'PHP',
          'MySQL',
          'Twig',
          'SASS',
          'JQuery'
        ]
      },
      {
        society: 'Orange, Arcueil',
        label: 'Développeuse PHP / Drupal',
        date: 'Septembre 2021 - Décembre 2022',
        description: 'Refonte de la Boutique Pro d\'Orange en Drupal 9',
        skills: [
          'Drupal 9',
          'PHP',
          'MySQL',
          'Twig',
          'SASS',
          'JQuery'
        ]
      },
      {
        society: 'Open Web Addict, Paris',
        label: 'Développeuse front-end',
        date: 'Septembre 2017 - Septembre 2021',
        description: 'Développement du portail client et de l\'intranet de Foliateam (VueJS / Laravel) - refonte du site de la Philharmonie de Paris en Drupal 8 - maintenance corrective et évolutive du site turbo.fr (Drupal 8) - refonte des sites des Hôpitaux de Gonesse et de Saint-Denis en Drupal 8 - développement d\'un entrepôt de médias en ligne en Drupal 7 pour la Banque de France',
        skills: [
          'VueJS 2',
          'Laravel 4',
          'Drupal 7 / 8',
          'PHP',
          'MySQL',
          'PostGreSQL',
          'Twig',
          'SASS',
          'JQuery'
        ]
      },
      {
        society: 'BCD Travel, Paris',
        label: 'Consultante hôtelière',
        date: 'Mai 2015 - Aout 2017',
        description: 'Réception et transferts des appels et mails - saisie et traitement des réservations - gestion et suivi des litiges',
        skills: []
      },
      {
        society: 'Comfort Hotel Paris Lafayette, Paris',
        label: 'Réceptionniste',
        date: 'Octobre 2014 - Mai 2015',
        description: 'Accueil des clients - saisie et traitement des réservations - facturation - classement / archivage',
        skills: []
      },
    ],
    projects: [
      {
        label: 'Cynodyssée',
        img: require('../assets/img/Cynodyssée.png'),
        skills: [
          'Drupal 9',
          'PHP',
          'MySQL',
          'Twig',
          'SASS',
          'JQuery'
        ],
        url: 'https://www.cynodyssee.com'
      },
      {
        label: 'Sélecteur de canapé',
        img: require('../assets/img/Sofa.png'),
        skills: [
          'VueJS 2'
        ],
        url: 'https://github.com/cath-lau/sofa-selector'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
