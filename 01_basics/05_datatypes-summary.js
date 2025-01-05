// Primitive Datatype

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 35677627746647778n



// Reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

    myObj = {
        name: "akshar",
        age: 17,
    }

    const myFunction = function(){
        console.log("hello world");
        
    }
    console.log(typeof myFunction);


    //********************************************* 

    // Stack memory use =>(primitive), Heap memory use =>(Non-primitive)

    let myYoutubename = "aksharcodingcom"

    let anotherName = myYoutubename
    anothername = "chai aur coffee"
    console.log(myYoutubename);
    
    console.log(anothername);

    let userOne = {
        email: "abc@gmail.com",
        upi: "userybl"
    }

    let userTwo = userOne

    userTwo.email = "tyr@gmail.com"
    console.log(userOne.email);
    console.log(userTwo.email);
    
    