<template>
    <v-app id="about">
        <v-container>
            <h2 class="text-center text-uppercase py-5">A propos</h2>
            <v-row class="ma-1 ma-md-0">
                <v-col cols="12" md="6">
                    <h3 class="text-center text-uppercase py-5">Formations</h3>
                    <ul class="steps">
                        <li v-for="certificate in certificates" :key="certificate" class="step pb-5 position-relative">
                            <div class="step-container-icon pa-1">
                                <v-icon color="#111111">mdi-school</v-icon>
                            </div>
                            <h5 class="brown--text text--darken-1 mb-0">{{ certificate.school }}</h5>
                            <h4>{{ certificate.label }}</h4>
                            <h6 class="text-secondary mb-1">{{ certificate.date }}</h6>
                            <p class="grey--text text-body-2">{{ certificate.description }}</p>
                            <v-btn depressed small v-for="skill in certificate.skills" :key="skill" class="mr-1 mb-1">{{ skill }}</v-btn>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12" md="6">
                    <h3 class="text-center text-uppercase py-5">Expériences professionnelles</h3>
                    <ul class="steps">
                        <li v-for="experience in experiences" :key="experience" class="step pb-5 position-relative">
                            <div class="step-container-icon pa-1">
                                <v-icon color="#111111">mdi-briefcase</v-icon>
                            </div>
                            <h5 class="brown--text text--darken-1 mb-0">{{ experience.society }}</h5>
                            <h4>{{ experience.label }}</h4>
                            <h6 class="text--secondary mb-1">{{ experience.date }}</h6>
                            <p class="text-body-2 grey--text">{{ experience.description }}</p>
                            <v-btn depressed small v-for="skill in experience.skills" :key="skill" class="mr-1 mb-1">{{ skill }}</v-btn>
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        computed: mapState([
            'certificates',
            'experiences'
        ]),
    }
</script>

<style>
    ul.steps {
        list-style: none;
        padding-left: 45px;
    }
    .step {
        position: relative;
    }
    .step::before {
        content: '';
        position: absolute;
        left: -40px;
        width: 1px;
        height: 100%;
        background-color: white;
    }
    .step-container-icon {
        position: absolute;
        top: 0;
        left: -56px;
        background-color: white;
        border-radius: 100%;
    }
</style>