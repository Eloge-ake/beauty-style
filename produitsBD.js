const produits = [
    {
        id: 91,
        nom: "BVLGARI",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/bvlgari-fin-carree.jpeg"
    },

    {
        id: 90,
        nom: "CELINE",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/celine-carree-epais-colore.jpeg"
    },

    {
        id: 89,
        nom: "Monture rouge",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-rouge.jpeg"
    },

    {
        id: 88,
        nom: "GUCCI",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/gucci-violet-cat-eye.jpeg"
    },

    {
        id: 87,
        nom: "Ray-Ban Nomad Wayfarer",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-transparent-vue-violet.jpeg"
    },

    {
        id: 86,
        nom: "BURBERRY",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/burberry-carree-vue.jpeg"
    },

    {
        id: 85,
        nom: "TOM FORD",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/tom-ford-carree-noir-vue.jpeg"
    },

    {
        id: 84,
        nom: "FENDI",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/fendi-carree-rose-vue.jpeg"
    },

    {
        id: 83,
        nom: "Ray-Ban Nomad Wayfarer",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-noir-rr-vue.jpeg"
    },

    {
        id: 82,
        nom: "MARC JACOBS",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-vue-epais-in.jpeg"
    },

    {
        id: 81,
        nom: "BURBERRY",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-vue-epais-in.jpeg"
    },

    {
        id: 80,
        nom: "BALENCIAGA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/balenciga-carree-vue-bleu.jpeg"
    },

    {
        id: 79,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/oval-carree-chopard-vue.jpeg"
    },

    {
        id: 78,
        nom: "TOM FORD",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/cat-eye-noir-marc-jacob.jpeg"
    },

    {
        id: 77,
        nom: "MARC JACOBS",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/cat-eye-noir-marc-jacob.jpeg"
    },

    {
        id: 76,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-violet-carre.jpeg"
    },

    {
        id: 75,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-vue-carree.jpeg"
    },

    {
        id: 74,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-noir-carree.jpeg"
    },

    {
        id: 73,
        nom: "Ferragamo",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/Ferragamo-carree-vue.jpeg"
    },

    {
        id: 72,
        nom: "Monture rouge",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-epais-rouge.jpeg"
    },

    {
        id: 71,
        nom: "Celine",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/celine-carree-colore-rose-epais.jpeg"
    },

    {
        id: 70,
        nom: "Celine",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/celine-epais-cat-eye.jpeg"
    },

    {
        id: 69,
        nom: "CHANEL",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chanel-carree-epais-vue-sombre.jpeg"
    },

    {
        id: 68,
        nom: "CHANEL",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chanel-cat-eye-vue-epais-joli.jpeg"
    },

    {
        id: 67,
        nom: "CHANEL",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chanel-rose-carre.jpeg"
    },

    {
        id: 66,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-bleu-violet-cat-eye.jpeg"
    },

    {
        id: 65,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-carre-arrondi-vue-epais.jpeg"
    },

    {
        id: 64,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-carree-arrondi-transparent-vue.jpeg"
    },

    {
        id: 63,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-carree-colore-vue.jpeg"
    },

    {
        id: 62,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-carree-epais-m.jpeg"
    },

    {
        id: 61,
        nom: "Chopard",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-cat-eye-vert.jpeg"
    },

    {
        id: 60,
        nom: "Chopard",
        prix: 32000,
        genre: "femme",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-rose-sombre-carree.jpeg"
    },

    {
        id: 59,
        nom: "DOLCE&GABANA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/dolce&gabana-fin-carree-vue.jpeg"
    },

    {
        id: 58,
        nom: "FENDI",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/fendi-carree-cafe.jpeg"
    },

    {
        id: 57,
        nom: "miu miu",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/miu-miu-cat-eye-vue.jpeg"
    },

    {
        id: 56,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-cat-eye-epais-cafe.jpeg"
    },

    {
        id: 55,
        nom: "TIFFANY&Co",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/tiffany&co-carree-noir.jpeg"
    },

    {
        id: 54,
        nom: "TIFFANY&Co",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/tiffany&co-jaune-carre-vue.jpeg"
    },

    {
        id: 53,
        nom: "TIFFANY&Co",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/tiffany&co-rose-carree.jpeg"
    },

    {
        id: 52,
        nom: "miu miu",
        prix: 32000,
        genre: "unisexe",
        forme: "ovale",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/miu-miu-ovale.jpg"
    },

    {
        id: 51,
        nom: "Lunettes de soleil rose",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "soleil",
        rim: "fin",
        image: "images/lunettes/rose-soleil-papillon.jpg"
    },

    {
        id: 50,
        nom: "Lunettes de soleil",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "soleil",
        rim: "sans",
        image: "images/lunettes/rectangle-rimless-soleil.jpg"
    },

    {
        id: 49,
        nom: "FANDIA",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/pantos-vue-simple.jpg"
    },

    {
        id: 48,
        nom: "Lunettes de soleil",
        prix: 32000,
        genre: "unisexe",
        forme: "",
        type: "soleil",
        rim: "fin",
        image: "images/lunettes/lunette-soleil-bord-fin.jpg"
    },

    {
        id: 48,
        nom: "Lunettes de soleil",
        prix: 32000,
        genre: "unisexe",
        forme: "",
        type: "soleil",
        rim: "fin",
        image: "images/lunettes/soleil-cafe-fin.jpg"
    },

    {
        id: 47,
        nom: "Lunettes de soleil",
        prix: 32000,
        genre: "unisexe",
        forme: "",
        type: "soleil",
        rim: "fin",
        image: "images/lunettes/soleil-noir-fin.jpg"
    },

    {
        id: 46,
        nom: "Monture noir",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/cat-eye-noir-vue.jpg"
    },

    {
        id: 45,
        nom: "Monture transparante et rose",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/rose-vue-simple.jpg"
    },

    {
        id: 44,
        nom: "Monture UV400",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/fin-vue-simple-uv400.jpg"
    },

    {
        id: 43,
        nom: "Dior",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "simple",
        rim: "sans",
        image: "images/lunettes/dior-rimless-rectangle.jpeg"
    },

    {
        id: 42,
        nom: "Monture noir",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/cat-eye-vue-noir.jpg"
    },

    {
        id: 41,
        nom: "FANDIA",
        prix: 32000,
        genre: "unisexe",
        forme: "cat-eye",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/cat-eye-vue-fin.jpg"
    },

    {
        id: 40,
        nom: "Cartier",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "soleil",
        rim: "sans",
        image: "images/lunettes/cartier-rectangle-rimless.jpg"
    },

    {
        id: 39,
        nom: "Monture transparante",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-vue-simple.jpg"
    },

    {
        id: 38,
        nom: "Monture bleue",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/carree-vue-bord-fin.jpg"
    },

    {
        id: 37,
        nom: "Monture bleue et transparante",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-vue.jpg"
    },

    {
        id: 36,
        nom: "Cartier",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "simple",
        rim: "sans",
        image: "images/lunettes/carre-cartier-rimless.jpeg"
    },

    {
        id: 35,
        nom: "BVLGARI",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "sans",
        image: "images/lunettes/bvlgari-carre-cat-eye.jpeg"
    },

    {
        id: 34,
        nom: "DIOR",
        prix: 32000,
        genre: "unisexe",
        forme: "",
        type: "soleil",
        rim: "sans",
        image: "images/lunettes/lunette-soleil-bleu.jpeg"
    },

    {
        id: 33,
        nom: "FENDI",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/fendi-carree-vue.jpeg"
    },

    {
        id: 32,
        nom: "VALENTINO",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/rectangle-valentino.jpeg"
    },

    {
        id: 31,
        nom: "VERSACE",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/carree-versace-vue.jpeg"
    },

    {
        id: 30,
        nom: "Chopard",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/cat-eye-chopard.jpeg"
    },

    {
        id: 29,
        nom: "MARC JACOB",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/MARC-JACOB-vue-carree.jpeg"
    },

    {
        id: 28,
        nom: "TIFFANY&Co",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/tiffany&co-vue-femme.jpeg"
    },

    {
        id: 27,
        nom: "CHANEL",
        prix: 32000,
        genre: "femme",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chanel-carree-vue.jpeg"
    },

    {
        id: 26,
        nom: "DIOR",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/dior-cat-eye-vue.jpeg"
    },

    {
        id: 25,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "fin",
        image: "images/lunettes/carree-prada-vue.jpeg"
    },

    {
        id: 24,
        nom: "CHANEL",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/channel-cat-eye-vue.jpeg"
    },

    {
        id: 23,
        nom: "BVLGARI",
        prix: 32000,
        genre: "homme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/bvlgari-cat-eye-vue.jpeg"
    },

    {
        id: 22,
        nom: "CHANEL",
        prix: 32000,
        genre: "femme",
        forme: "carree",
        type: "soleil",
        rim: "epais",
        image: "images/lunettes/chanel-carree-soleil.jpeg"
    },

    {
        id: 21,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-carree-vue.jpeg"
    },

    {
        id: 20,
        nom: "GUCCI",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "soleil",
        rim: "epais",
        image: "images/lunettes/gucci-soleil-carree.jpeg"
    },

    {
        id: 19,
        nom: "CHANEL",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "soleil",
        rim: "epais",
        image: "images/lunettes/chanel-cat-eye.jpeg"
    },

    {
        id: 18,
        nom: "Off White",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/off-White-carree.jpeg"
    },

    {
        id: 17,
        nom: "Lunettes de soleil",
        prix: 32000,
        genre: "homme",
        forme: "carree",
        type: "soleil",
        rim: "epais",
        image: "images/lunettes/carree-lunettes-de-soleil.jpeg"
    },

    {
        id: 16,
        nom: "Chopard",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-carree.jpeg"
    },

    {
        id: 15,
        nom: "DOLCE&GABANA",
        prix: 32000,
        genre: "femme",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/dolce&gabana-carree.jpeg"
    },

    {
        id: 14,
        nom: "BVLGARI",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/bvlgari-cat-eye.jpeg"
    },

    {
        id: 13,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-carree-unisex.jpeg"
    },

    {
        id: 12,
        nom: "BALMAIN PARIS",
        prix: 32000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/balmain-paris-carre.jpeg"
    },

    {
        id: 11,
        nom: "VALENTINO",
        prix: 32000,
        genre: "femme",
        forme: "rectangle",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/valentino-rectangle-femme.jpeg"
    },

    {
        id: 10,
        nom: "PRADA",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-rectangle-unisex.jpeg"
    },

    {
        id: 9,
        nom: "EMPERIO ARMENI",
        prix: 32000,
        genre: "unisexe",
        forme: "rectangle",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/emperio-armani-rectangle.jpeg"
    },

    {
        id: 8,
        nom: "Lunette de soleil",
        prix: 32000,
        genre: "unisexe",
        forme: "",
        type: "soleil",
        rim: "sans",
        image: "images/lunettes/lunette-soleil-rimless.jpeg"
    },

    {
        id: 7,
        nom: "CHANEL",
        prix: 32000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chanel-pantos.jpeg"
    },

    {
        id: 6,
        nom: "PRADA",
        prix: 40000,
        genre: "unisexe",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/prada-carree.jpeg"
    },

    {
        id: 5,
        nom: "VALENTINO",
        prix: 28000,
        genre: "femme",
        forme: "rectangle",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/valentino-ronde-rectangle.jpeg"
    },

    {
        id: 4,
        nom: "CELINE",
        prix: 35000,
        genre: "unisexe",
        forme: "ovale",
        type: "soleil",
        rim: "fin",
        image: "images/lunettes/celine-ovale.jpeg"
    },

    {
        id: 3,
        nom: "Chopard",
        prix: 20000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/chopard-cat-eye.jpeg"
    },

    {
        id: 2,
        nom: "TIFFANY&Co",
        prix: 30000,
        genre: "femme",
        forme: "cat-eye",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/cate-eye-tiffany&co.jpeg"
    },

    {
        id: 1,
        nom: "BURBERRY",
        prix: 25000,
        genre: "femme",
        forme: "carree",
        type: "simple",
        rim: "epais",
        image: "images/lunettes/lunette-Burberry.jpeg"
    }
];











const produitsBrumes = [
    {
        id: 1001,
        nom: "Brumes",
        prix: 25000,
        image: "images/brumes/bodycology-brumes.png"
    },

    {
        id: 1002,
        nom: "Brumes",
        prix: 30000,
        image: "images/brumes/victoria-secret-bleue.png"
    },

    {
        id: 1003,
        nom: "Brumes",
        prix: 20000,
        image: "images/brumes/victoria-secret-rose.png"
    },

    
];








const produitsMontres = [
    {
        id: 10001,
        nom: "Curren 9052",
        prix: 16000,
        image: "images/montres/curren-9052.jpg"
    },

    {
        id: 10002,
        nom: "Curren 9068",
        prix: 16000,
        image: "images/montres/curren-9068-black.jpg"
    },

    {
        id: 10003,
        nom: "Curren 9068",
        prix: 16000,
        image: "images/montres/curren-9068-bleue.jpg"
    },

    {
        id: 10004,
        nom: "Curren 9068",
        prix: 16000,
        image: "images/montres/curren-9068-doree.jpg"
    }
];

