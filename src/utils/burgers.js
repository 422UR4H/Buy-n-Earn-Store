import costelinhaPng from "../images/burgers/artesanals/premiums/Costelinha.png";
import dreamsBurgerPng from "../images/burgers/artesanals/premiums/Dreams Burger.png";
import dreamsCheesePng from "../images/burgers/artesanals/premiums/Dreams Cheese.png";
import stuffedBurgerPng from "../images/burgers/artesanals/premiums/Stuffed Burger.png";
import cheeseBaconPng from "../images/burgers/artesanals/classics/Cheese Bacon.png";
import classicBurgerPng from "../images/burgers/artesanals/classics/Classic Burger.png";
import kidsBurgerPng from "../images/burgers/artesanals/classics/Kids Burger.png";
import saladBurgerPng from "../images/burgers/artesanals/classics/Salad Burger.png";
import bigCheddarPng from "../images/burgers/artesanals/smashes/Big Cheddar.png";
import triploCheesePng from "../images/burgers/artesanals/smashes/Triplo Cheese.png";
import bigCheddarTradPng from "../images/burgers/tradicionals/Big Cheddar Tradicional.png";
import tresQueijosPng from "../images/burgers/tradicionals/Tres Queijos.png";
import xBaconPng from "../images/burgers/tradicionals/X Bacon.png";
import xEggBaconPng from "../images/burgers/tradicionals/X Egg Bacon.png";
import xSaladaBaconPng from "../images/burgers/tradicionals/X Salada Bacon.png";

import costelinhaJpg from "../images/burgers/artesanals/premiums/Costelinha.jpg";
import dreamsBurgerJpg from "../images/burgers/artesanals/premiums/Dreams Burger.jpg";
import dreamsCheeseJpg from "../images/burgers/artesanals/premiums/Dreams Cheese.jpg";
import stuffedBurgerJpg from "../images/burgers/artesanals/premiums/Stuffed Burger.jpg";
import cheeseBaconJpg from "../images/burgers/artesanals/classics/Cheese Bacon.jpg";
import classicBurgerJpg from "../images/burgers/artesanals/classics/Classic Burger.jpg";
import kidsBurgerJpg from "../images/burgers/artesanals/classics/Kids Burger.jpg";
import saladBurgerJpg from "../images/burgers/artesanals/classics/Salad Burger.jpg";
import bigCheddarJpg from "../images/burgers/artesanals/smashes/Big Cheddar.jpg";
import triploCheeseJpg from "../images/burgers/artesanals/smashes/Triplo Cheese.jpg";
import bigCheddarTradJpg from "../images/burgers/tradicionals/Big Cheddar Tradicional.jpg";
import tresQueijosJpg from "../images/burgers/tradicionals/Tres Queijos.jpg";
import xBaconJpg from "../images/burgers/tradicionals/X Bacon.jpg";
import xEggBaconJpg from "../images/burgers/tradicionals/X Egg Bacon.jpg";
import xSaladaBaconJpg from "../images/burgers/tradicionals/X Salada Bacon.jpg";

const burgers = [
    {
        type: "premium",
        name: "Costelinha",
        value: 23.90,
        description: "Pão australiano, costelinha suína artesanal, mussarela, cream cheese Philadelphia, cebola roxa, bacon defumado e barbecue Heinz",
        linkPng: costelinhaPng,
        linkJpg: costelinhaJpg
    },
    {
        type: "premium",
        name: "Dreams Burger",
        value: 24.90,
        description: "Pão australiano, costelinha, mussarela, alface americana, tomate, cebola roxa, bacon defumado, cream cheese Philadelphia e barbecue Heinz",
        linkPng: dreamsBurgerPng,
        linkJpg: dreamsBurgerJpg
    },
    {
        type: "premium",
        name: "Dreams Cheese",
        meatOptions: {
            titleWeight: "Peso da carne: ",
            weight: ["120g (R$ 31,90)", "160g (R$ 33,90)"],
            titlePoint: "Ponto da carne: ",
            point: ["Mal Passada", "Ao Ponto", "Bem Passada"]
        },
        description: "Pão de brioche, blend artesanal, mussarela, CATUPIRY EMPANADO, bacon defumado e molho verde da casa",
        linkPng: dreamsCheesePng,
        linkJpg: dreamsCheeseJpg
    },
    {
        type: "premium",
        name: "Stuffed Burger",
        meatOptions: {
            titleWeight: "Peso da carne: ",
            weight: ["160g (R$ 28,90)"],
            titlePoint: "Ponto da carne: ",
            point: ["Mal Passada", "Ao Ponto", "Bem Passada"]
        },
        description: "Pão australiano, blend RECHEADO com Catupiry, coberto com mussarela, bacon defumado e maionese da casa",
        linkPng: stuffedBurgerPng,
        linkJpg: stuffedBurgerJpg
    },

    {
        type: "classic",
        name: "Cheese Bacon",
        meatOptions: {
            titleWeight: "Peso da carne: ",
            weight: ["120g (R$ 22,90)", "160g (R$ 25,90)"],
            titlePoint: "Ponto da carne: ",
            point: ["Mal Passada", "Ao Ponto", "Bem Passada"]
        },
        description: "Pão de brioche, blend artesanal, mussarela, bacon defumado e maionese da casa",
        linkPng: cheeseBaconPng,
        linkJpg: cheeseBaconJpg
    },
    {
        type: "classic",
        name: "Classic Burger",
        meatOptions: {
            titleWeight: "Peso da carne: ",
            weight: ["120g (R$ 24,90)", "160g (R$ 27,90)"],
            titlePoint: "Ponto da carne: ",
            point: ["Mal Passada", "Ao Ponto", "Bem Passada"]
        },
        description: "Pão de brioche, blend artesanal, mussarela, alface americana, tomate, cebola roxa, bacon defumado e maionese de bacon da casa",
        linkPng: classicBurgerPng,
        linkJpg: classicBurgerJpg
    },
    {
        type: "classic",
        name: "Kids Burger",
        meatOptions: {
            titleWeight: "Peso da carne: ",
            weight: ["60g (R$ 14,90)", "120g (R$ 19,90)"],
            titlePoint: "Ponto da carne: ",
            point: ["Mal Passada", "Ao Ponto", "Bem Passada"]
        },
        description: "Pão de brioche, blend artesanal, mussarela e maionese da casa",
        linkPng: kidsBurgerPng,
        linkJpg: kidsBurgerJpg
    },
    {
        type: "classic",
        name: "Salad Burger",
        meatOptions: {
            titleWeight: "Peso da carne: ",
            weight: ["120g (R$ 20,90)", "160g (R$ 24,90)"],
            titlePoint: "Ponto da carne: ",
            point: ["Mal Passada", "Ao Ponto", "Bem Passada"]
        },
        description: "Pão de brioche, blend artesanal, mussarela, alface americana, tomate e maionese da casa",
        linkPng: saladBurgerPng,
        linkJpg: saladBurgerJpg
    },

    {
        type: "smashes",
        name: "Big Cheddar",
        meatOptions: {
            titleWeight: "Quantos smashes?",
            weight: ["2: (120g - R$ 26,50)", "3: (180g - R$ 30,90)"],
            // titlePoint: "Ponto da carne: ",
            // point: ["SMASH!"]
        },
        description: "Pão australiano, smashes artesanais, cheddar, bacon defumado, cebola ao shoyu e maionese de bacon da casa",
        linkPng: bigCheddarPng,
        linkJpg: bigCheddarJpg
    },
    {
        type: "smashes",
        name: "Triplo Cheese",
        meatOptions: {
            titleWeight: "Quantos smashes?",
            weight: ["2: (120g - R$ 27,50)", "3: (180g - R$ 30,90)"],
            // titlePoint: "Ponto da carne: ",
            // point: ["SMASH!"]
        },
        description: "Pão australiano, smashes artesanais, cheddas, mussarela, cream cheese Philadelphia e bacon defumado",
        linkPng: triploCheesePng,
        linkJpg: triploCheeseJpg
    },

    {
        type: "tradicional",
        name: "Big Cheddar Tradicional",
        value: 16.00,
        description: "Pão com gergelim, cheddar cremoso, bacon defumado e maionese de bacon da casa",
        linkPng: bigCheddarTradPng,
        linkJpg: bigCheddarTradJpg
    },
    {
        type: "tradicional",
        name: "Tres Queijos",
        value: 19.50,
        description: "Pão com gergelim, cream cheese Philadelphia, mussarela, cheddar cremoso e bacon defumado",
        linkPng: tresQueijosPng,
        linkJpg: tresQueijosJpg
    },
    {
        type: "tradicional",
        name: "X Bacon",
        value: 17.50,
        description: "Pão com gergelim, mussarela, bacon defumado, cream cheese Philadelphia e maionese de bacon da casa",
        linkPng: xBaconPng,
        linkJpg: xBaconJpg
    },
    {
        type: "tradicional",
        name: "X Egg Bacon",
        value: 18.50,
        description: "Pão com gergelim, mussarela, cheddar cremoso, bacon defumado, ovo e maionese da casa",
        linkPng: xEggBaconPng,
        linkJpg: xEggBaconJpg
    },
    {
        type: "tradicional",
        name: "X Salada Bacon",
        value: 17.50,
        description: "Pão com gergelim, alface americana, tomate, cebola roxa, bacon defumado, mussarela, cheddar cremoso e maionese da casa",
        linkPng: xSaladaBaconPng,
        linkJpg: xSaladaBaconJpg
    }
];

export default burgers;