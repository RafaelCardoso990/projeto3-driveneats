
   
let pickDish
let amountDish
let pickDrink
let amountDrink
let pickDessert
let amountDessert

function chooseDish(dish) {
    let selected = document.querySelector(".box-option-dish .selected")
    if (selected !== null) {
        selected.classList.toggle("selected")
    }
    dish.classList.add("selected")
    
    let amount = document.querySelector(".box-option-dish .selected .price")
    amountDish = (amount.innerHTML)
    
    pickDish = "yes"
    activateButton()
}
function chooseDrink(drink) {
    let selected = document.querySelector(".box-option-drink .selected")
    if (selected !== null) {
        selected.classList.toggle("selected")
    }
    drink.classList.add("selected")
    
    let amount = document.querySelector(".box-option-drink .selected .price")
    amountDrink = (amount.innerHTML)
    
    pickDrink = "yes"
    activateButton()
}
function chooseDessert(dessert) {
    let selected = document.querySelector(".box-option-dessert .selected")
    if (selected !== null) {
        selected.classList.toggle("selected")
    }
    dessert.classList.add("selected")
    
    let amount = document.querySelector(".box-option-dessert .selected .price")
    amountDessert = (amount.innerHTML)
    
    pickDessert = "yes"
    activateButton()
}

function activateButton() {
    let finish = document.querySelector(".button")
    if (pickDish == "yes" && pickDrink == "yes" && pickDessert == "yes") {
        finish.classList.add("active")
        finish.innerHTML = "Finalizar pedido"
    }  

}

function finishOrder() {
    let chosenDish = document.querySelector(".box-option-dish .selected")
    let chosenDrink = document.querySelector(".box-option-drink .selected")
    let chosenDessert = document.querySelector(".box-option-dessert .selected")
    
    let name
    let address
    if (pickDish == "yes" && pickDrink == "yes" && pickDessert == "yes") {
        name = prompt("Qual o seu nome?")
        address = prompt("Qual o seu endereço?")
    }
    
    let amount = (parseFloat(amountDish) + parseFloat(amountDrink) + parseFloat(amountDessert)).toFixed(2)

    let message =`Olá, gostaria de fazer o pedido:\n   - Prato: ${chosenDish.innerHTML}\n   - Bebida: ${chosenDrink.innerHTML}\n   - Sobremesa: ${chosenDessert.innerHTML}\n   Total: R$ ${amount}\n
    Nome: ${name}\n    Endereço: ${address}`
    window.open("https://wa.me/+5531975594540?text=" + `${message}`)
       
}     


 
       
       




 
     
        
       

