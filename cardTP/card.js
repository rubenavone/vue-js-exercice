Vue.createApp({
    data() {
        let name = "Jaqueline";
        return {
            profileUser: {
                img: "https://this-person-does-not-exist.com/static/images/fake-3.jpg",
                nameInObj: name,
                age: 43,
                luckyNumber: Math.round(Math.random() * 100),
                inputVal: name,
            },
        };
    },
    methods: {
        ageMoreTen(){
            console.log(typeof this.profileUser.age);
            return this.profileUser.age + 10;
        }
    },
}).mount("#app")