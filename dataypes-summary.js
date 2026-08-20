// Primitive 

// 7 types : String , Number , Boolean, null, undeined, Symbol, BigInt 

const score =100
const scorevalue =100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);


// const bigNumber = 761827469237093734n


// Reference (Non-Primitive )

// array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name : "hitesh",
    age : 20,
}

const myfunction = function(){
    console.log('HElloWorld');
    
}
console.log(typeof myfunction);


// +++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Satwikdotcom"
let anothername = myYoutubename
anothername ="chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi : "user@ybl"

}

let userTwo = userOne 

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


