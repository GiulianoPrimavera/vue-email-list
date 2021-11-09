Vue.config.devtools = true;

const vueApp = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        indirizziEmailRandom: [

        ]
    },  
    methods: {
        creaIndirizziEmailRandom: function(){
            for(let i = 0; i < 10; i++){
                axios.get(this.url).then((ajaxResponse) =>{
                    //con la funzione then() riesco a recuperare i dati che l'api vuole mostrare chiamando al suo interno .data
                    this.indirizziEmailRandom.push(ajaxResponse.data.response)
                })
            }
            console.log(this.indirizziEmailRandom);
        }
    }
})