Vue.createApp({
    data() {
        return {
            tasks: [],
            valeurDeInput: '',
            books: [
                {
                    title: "L'appel de cthulhu",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Cthulhu_sketch_by_Lovecraft.jpg",
                    description: "L'Appel de Cthulhu (titre original : The Call of Cthulhu) est une nouvelle fantastique de l'écrivain américain Howard Phillips Lovecraft, publiée en février 1928 dans le magazine Weird Tales. ",
                    date: 1926,
                },
                {
                    title: "<h2> La couleur tomber du ciel </h1>",
                    img: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Colour_out_of_Space_by_Paul_Flanders.jpg/250px-Colour_out_of_Space_by_Paul_Flanders.jpg'></img>",
                    description: "<p>La Couleur tombée du ciel (The Colour Out of Space) est une nouvelle fantastique et de science-fiction de H. P. Lovecraft publiée en 1927. </p>",
                    date: "<p>1927</p>",
                },
            ],
            text: '',

        };
    },
    methods: {
        ajouterTask() {
            this.tasks.push(this.valeurDeInput);
            this.valeurDeInput = "";
        },
        onInput(e){
            this.text = e.target.value;
        }
    },
}).mount("#app")