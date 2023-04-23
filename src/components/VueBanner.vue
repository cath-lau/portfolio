<template>
    <v-app>
      <v-container class="h-100">
        <v-row class="h-100 ma-1 md-0">
          <v-col cols="6">
            <div class="d-flex justify-center align-center h-100">
              <div class="container-profile-img">
              <v-img src="../assets/img/Portrait.jpg" contain></v-img>
            </div> 
            </div>   
          </v-col>
          <v-col cols="6" class="d-flex flex-column justify-center">
            <div>
              <h5 class="brown--text text--darken-1 top">Hello, moi c'est Catherine</h5>
            <h1 class="white--text">Développeuse front-end VueJS</h1>
            <p class="grey--text">
              Diplômée d'un BTS SIO suite à une reconversion professionnelle et fort de 5 années d'expérience, j’ai eu l’occasion de travailler sur divers projets en Drupal, ce qui m’a permis d’approfondir mes compétences en développement fullstack. Mais c’est lors de mon expérience en VueJS sur un projet de deux ans pour un opérateur télécom que je me suis le plus épanouie et ai pu parfaire mes compétences en développement front-end.
              Ma créativité et ma curiosité me permettent de réellement m'épanouir dans ce métier et de mener à bien les projets auxquels j'ai pris part. Autonome et réfléchie, je sais aussi bien travailler de façon indépendante qu'en équipe. Ma polyvalence et mon adaptabilité seront de véritables atouts dans votre équipe.
            </p>
            <v-btn color="brown darken-1" dark @click="scroll('about')">A propos</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>

<script>
  export default {
      methods: {
          scroll(refName) {
          const element = document.getElementById(refName);
          element.scrollIntoView({ behavior: "smooth" });
          },
      },
  };
</script>

<style>
  .h-100 {
    height: 100%;
  }
  .container-profile-img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
  }
</style>