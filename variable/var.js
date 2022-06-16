Vue.createApp({
    data() {
        return {
            tasks: [],
            valeurDeInput: '',
            book: {
                title: "L'appel de cthulhu",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cthulhu_sketch_by_Lovecraft.jpg",
                description: "L'Appel de Cthulhu (titre original : The Call of Cthulhu) est une nouvelle fantastique de l'écrivain américain Howard Phillips Lovecraft, publiée en février 1928 dans le magazine Weird Tales. ",
                date: 1926
            }

        };
    },
    methods: {
        ajouterTask() {
            this.tasks.push(this.valeurDeInput);
            this.valeurDeInput = "";
        },
    },
}).mount("#app")