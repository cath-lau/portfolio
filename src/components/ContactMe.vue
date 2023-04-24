<template>
    <v-container class="d-flex flex-column align-center" id="contact">
        <h2 class="text-center">Contact</h2>
        <v-col md="6">
            <v-form action="https://public.herotofu.com/v1/703cc970-e201-11ed-8300-fd92f9e8911a" 
                    method="post"
                    ref="form" 
                    class="d-flex flex-column">
                <v-text-field v-model="name" :rules="nameRules" label="Nom">
                </v-text-field>
                <v-text-field v-model="email" :rules="emailRules" label="Email">
                </v-text-field>
                <v-textarea v-model="message" :rules="messageRules" label="Message"></v-textarea>
                <v-btn depressed @click="submitForm" class="mb-4">Envoyer</v-btn>
                <v-alert type="success" v-if="sent">Merci pour votre message et a tres vite :)</v-alert>
            </v-form>
        </v-col>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                name: '',
                nameRules: [
                    v => !!v || 'Veuillez saisir votre nom'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'Veuillez saisir votre adresse email',
                    v => /.+@.+\..+/.test(v) || 'Veuillez saisir une adresse email valide',
                ],
                message: '',
                messageRules: [
                    v => !!v || 'Veuillez saisir votre message'
                ],
                sent: false
            }
        },
        methods: {
            submitForm () {
                let self = this;

                if (this.$refs.form.validate()) {
                    let data = {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    };

                    axios.post('https://public.herotofu.com/v1/703cc970-e201-11ed-8300-fd92f9e8911a', data)
                    .then(function (response) {
                        console.log(response);
                        self.sent = true;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
            },
        },
    }
</script>