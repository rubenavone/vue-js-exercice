Vue.createApp({
    data() {
        let name = "Jaqueline";
        return {
            profilUser: {
                img: "https://this-person-does-not-exist.com/img/avatar-6b83cca55c698f2be8031d9d3db5a99f.jpg",
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