//! Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const negozioBici = [
    {
        nome : "hyper",
        peso : 20
    },
    {
        nome : "turismo",
        peso : 17
    },
    {
        nome : "rainy",
        peso : 22
    },
    {
        nome : "carbon",
        peso : 15
    }
];

let biciLight = negozioBici[0];

for (let i = 1; i < negozioBici.length; i++){

    if (negozioBici[i].peso < biciLight.peso){

        biciLight = negozioBici[i];
            
    }
};

const {nome,peso} = biciLight;
console.log(nome,peso);

document.getElementById("es_1").innerHTML= 
'la bici più leggera è ${nome}
';




// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.