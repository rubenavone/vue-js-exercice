Vue.createApp({
    data() {
        return {
            count: 0,
            incrementValue: 10,
            userName: "",
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

    }
}).mount("#app")