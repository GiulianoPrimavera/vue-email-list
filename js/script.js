Vue.config.devtools = true;

const vueApp = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        indirizziEmailRandom: [

        ]
    },
    methods: {
        //clickando sul bottone si esegue questa funzione
        creaIndirizziEmailRandom: function(){
            //svuoto l'array di indirizzi random
            this.indirizziEmailRandom = []
            //popolo l'array
            for(let i = 0; i < 10; i++){
                axios.get(this.url).then((ajaxResponse) =>{
                    //con la funzione then() riesco a recuperare i dati che l'api vuole mostrare chiamando al suo interno .data
                    this.indirizziEmailRandom.push(ajaxResponse.data.response)
                })
            }
        }
    },
    //il browser esegue questa funzione senza alcun input da parte dell'utente, quadno l'istanza è stata "montata"
    mounted() {
        //popolo l'array in automatico inserendo 10 indirizzi email random
        for (let i = 0; i < 10; i++) {
            axios.get(this.url).then((ajaxResponse) => {
                //con la funzione then() riesco a recuperare i dati che l'api vuole mostrare chiamando al suo interno .data
                this.indirizziEmailRandom.push(ajaxResponse.data.response)
            })
        }
    }
})