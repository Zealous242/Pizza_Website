function updatePrice(sizeID, priceID){

    let str2 = document.getElementById(sizeID);

    let value = str2.options[str2.selectedIndex].value;

    let numberValue = 0;

    document.getElementById(priceID).innerHTML = value;

    console.log("value"," = ",value);

    typeof(value)
}

function changePizzaImg(pizzaHalf, pizzaImage){
    let str3 = document.getElementById(pizzaHalf)
    let value = str3.options[str3.selectedIndex].value;

    let newAttribute = String(value);

    console.log(value);

    document.getElementById(pizzaImage).setAttribute("src", value);
}

function addPizza(){
    const newDiv = document.createElement("div");
    const newLabel = document.createElement("label");
    const newSelect = document.createElement("select");
    const newPizza1 = document.createTextNode("Margherita");

const products = [
    {
        name: "Small - 8 inch pizza",
        price: 6.99
    },
    {
        name: "Medium - 12 inch pizza",
        price:7.99
    },
    {
        name: "Large - 16 inch pizza",
        price:8.99
    },
    {
        name:"Pizzanormous",
        price:9.99
    }
]

function addToBasket(id){
    let pizzaSize = document.getElementById(id).value;
    console.log(pizzaSize);
}


    /*
    Margherita
    Vegetarian
    Mediterranean
    Mexican
    Pepperoni
    Farmhouse
    Chicken and Sweetcorn
    BBQ Chicken
    Meatball
    Hawaiian
    Garlic
    Seafood
    Mozzarella
    Gluten-Free Margherita
    Gluten-Free Papperoni
    Vegan Papperoni
    Mushroom Pizza

    */
}