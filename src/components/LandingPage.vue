<template>
    <v-app id="home">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
    </v-app>
</template>

<script>
import NavBar from './NavBar.vue'
import Banner from './VueBanner.vue'
import About from './AboutMe.vue'
import Projects from './MyProjects.vue'
import Contact from './ContactMe.vue'

export default {
    components: {
        NavBar,
        Banner,
        About,
        Projects,
        Contact
    }
}
</script>