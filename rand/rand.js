Vue.createApp({
  data() {
    return {
    lessThan: "C'est inférieur",
    moreThan: "C'est supérieur",
    result: ""
    };
  },
  methods: {
    itsLessOrMore(){
        let rand = Math.round(Math.random()* 100);
        console.log(rand);
        if(rand < 50){
            this.result = this.lessThan;
        }else{
            this.result = this.moreThan;
        }
    },
    logHello(){
        console.log("Hello");
      }
  },

}).mount("#app");
