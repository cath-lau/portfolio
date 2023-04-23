<template>
    <v-app id="projects">
        <v-container>
            <h2 class="text-center text-uppercase py-5">Projets</h2>
            <v-row>
                <v-col cols="12" sm="6" md="4" v-for="project in projects" :key="project.label">
                    <v-card class="card-project h-100">
                        <div class="card-container-img d-flex align-center">
                            <v-img :src="project.img" alt=""></v-img>
                        </div>
                        <v-card-title class="justify-center">{{ project.label }}</v-card-title>
                        <v-card-text class="d-flex justify-center flex-wrap">
                            <v-btn depressed x-small v-for="skill in project.skills" :key="skill" class="mr-1 mb-1">{{ skill }}</v-btn>
                        </v-card-text>
                        <a :href="project.url" class="card-link" target="_blank"></a>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        computed: mapState([
            'projects'
        ]),
    }
</script>

<style>
    .card-container-img {
        height: 300px;
        overflow: hidden;
        background-color: white;
    }
    .card-project {
        position: relative;
        border-radius: 0.75rem !important;
    }
    .card-project:hover {
        cursor: pointer;
        box-shadow: 3px 3px 13px 0px rgba(0,0,0,0.8) !important;
    }
    .card-link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>