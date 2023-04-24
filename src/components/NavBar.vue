<template>
    <div>
        <v-app-bar color="#111111" dark flat class="px-8">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
            <v-btn text @click="scroll('home')" class="d-none d-md-block">Catherine Lau</v-btn>
            <v-spacer></v-spacer>
            <div class="d-none d-md-block">
                <v-btn text v-for="item in items" :key="item.value" @click="scroll(item.value)">{{ item.title }}</v-btn>
            </div>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute color="#111111">
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="grey--text text--accent-4">
                    <v-list-item v-for="item in items" :key="item.value" @click="scroll(item.value)">
                        <v-list-item-title >{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                group: null,
                items: [
                    {
                        title: 'Accueil',
                        value: 'home'
                    },
                    {
                        title: 'Projets',
                        value: 'projects'
                    },
                    {
                        title: 'A propos',
                        value: 'about'
                    },
                    {
                        title: 'Contact',
                        value: 'contact'
                    }
                ]
            }
        },
        watch: {
            group () {
                this.drawer = false
            },
        },
        methods: {
            scroll(refName) {
                const element = document.getElementById(refName);
                element.scrollIntoView({ behavior: "smooth" });
            },
        },
    };
</script>

<style>
</style>