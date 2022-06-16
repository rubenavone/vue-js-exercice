Vue.createApp({
    data() {
        return {
            count: 0,
            incrementValue: 10
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
    },
}).mount("#app")