let categorias = {

   category: [
    {
        id_button:203017,
        id_stream:56,
        label:'ta tudo aqui!',
        products:[
            {id: 605252, id_button: 203017, productName: "blusa Estampada Onça Flor"},
            {id: 605253, id_button: 203017, productName: "calça  Onça Flor"},
            {id: 605254, id_button: 203017, productName: "vestidos Flor"},
            {id: 605255, id_button: 203017, productName: "short "},
        ],
    },
    {
        id_button:203018,
        id_stream:57,
        label:'vestidos',
        products:[
            {id: 605256, id_button: 203018, productName: "onça pintada "},
            {id: 605257, id_button: 203018, productName: "estampa verão"},
            {id: 605258, id_button: 203018, productName: "vestido rosado"},
            {id: 605259, id_button: 203018, productName: "vestido curto "},
        ],
    },
    {
        id_button:203019,
        id_stream:58,
        label:'aleatório',
        products:[
            {id: 605260, id_button: 203019, productName: "cordão "},
            {id: 605261, id_button: 203019, productName: "bolsa verão"}, 
            {id: 605262, id_button: 203019, productName: "calça rodada rosado"},
            {id: 605263, id_button: 203019, productName: "tenis nike "},
    ]   ,
    },
    {
        id_button:203020,
        id_stream:59,
        label:'blusas',
        products:[
            {id: 605264, id_button: 203020, productName: "estampada "}, 
            {id: 605265, id_button: 203020, productName: "colorida"},
            {id: 605266, id_button: 203020, productName: "sem estampa"},
            {id: 605267, id_button: 203020, productName: "branca "},
        ],
    },
        
    ]
}

let vestidosCategory = categorias.category.find(category => category.label === 'vestidos')
console.log(vestidosCategory)


let idButtons = categorias.category.map(category => category.id_button);
console.log(idButtons)



let categoria = categorias.category.find(category => category.id_button === 203019);
console.log(categoria)







 

//1 -  percorra o array category e retorne o objeto que possui a label "vestidos".
//2 - percorra o array category e retorne  todos os id_button.
//3 - percorre o array category e retorne a categoria  que possui a propriedade "id_button:203019"

//4 - percorre o array category e retorne todos os  os products dentro de uma única lista.
//5 - percorre o array category e retorne todos os  os products dentro de um array de objetos.
//6 - percorra o array category e retorne  somente o produto com a prop    productName: "calça rodada rosado"
//7 - percorra o array category e mude o nome de todas as propriedades  "products"  para  "produtos"


 
