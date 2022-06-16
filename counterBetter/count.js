Vue.createApp({
    data() {
        return {
            count: 0,
            incrementValue: 10,
            userName: "",
            message: "",
        };
    },
    methods: {
        increment(qt){

            console.log(this.count)
            console.log(typeof qt)
            this.count += qt;
        },
        decrement(qt){

            this.count -= qt;
        },
        changeValue(){
            console.log(this.userName)
            if(this.userName === ""){
                this.userName = "Ruben";
            }else{
                this.userName = "";
            }
        }

    },
    computed:{
        somethingIn(){
            console.log("fonction launched");
            if(this.userName === ""){
                return "nothing to see there";
            }else{
                return "something in";
            }
        },

    },
    watch: {
        count(value){
            if(value === 7){
                this.message = "Vous avez gagner";
            }else if( value < 7){
                this.message = "c'est plus grand";
            }
            if(value > 7){
                this.message = "Perdu !";

            }
        }
    }
}).mount("#app")