function addToCart(productName="Elma", quantity=0) {    
    console.log("Sepete eklendi : " + productName + " " + quantity + " adet")    
}

//ddToCart("Elma")
addToCart("Yumurta",10)
//addToCart(15)


let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello();



function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart("Elma", 5,10)
addToCart("Amur", 2,20)
addToCart("Limon", 3,15)

let product1 = {productName: "Elma", unitPrice: 10, quantity: 5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}


addToCart3(product1)

let product2 = {productName: "Elma", unitPrice: 10, quantity: 5}
let product3 = {productName: "Elma", unitPrice: 10, quantity: 5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 10, quantity: 5},
    {productName: "Karpuz", unitPrice: 10, quantity: 5},
]

addToCart4(products)

function add(birsey,...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
             total = total + numbers[i]  
    }    
    console.log(total)
    console.log(birsey)
}

add(20,30)
//add(20,30,40)
//add(20,30,50)

let numbers = [30,50,100,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"40M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)

console.log(icAnadolu.name)
console.log(marmara.population)

console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

