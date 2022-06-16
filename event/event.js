Vue.createApp({
    data() {
        return {
            text: '',

        };
    },
    methods: {
        inputChange(e){
            console.log(e);
            this.text = e.target.value;
        },
        message(){
            console.log("Vous ete sur l'input");
        }
    },
}).mount("#app")