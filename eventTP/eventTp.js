Vue.createApp({
    data() {
        return {
            text: '',
            secondText: ''

        };
    },
    methods: {
        inputChange(e, whatTochange){
            console.log(e);
            if(whatTochange === true){
                this.text = e.target.value;
            }else{
                this.secondText = e.target.value;
                
            }
        },
        message(){
            console.log("Vous ete sur l'input");
        },
        alarm(){
            alert("une alerte s'affiche");
        },
        clear(){
            this.text = '';
            this.secondText ='';
        }
    },
}).mount("#app")