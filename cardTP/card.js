Vue.createApp({
    data() {
        let name = "Jaqueline";
        return {
            profilUser: {
                img: "https://this-person-does-not-exist.com/static/images/fake-3.jpg",
                nameInObj: name,
                age: "43 ",
                luckyNumber: Math.round(Math.random() * 100),
                age10 : this.ageMoreTen(),
                inputVal: name,
            },
        };
    },
    methods: {
        ageMoreTen(){
            this.age += 10;
        }
    },
}).mount("#app")