
function sayMyname(){
    console.log("s");
    console.log("a");
    console.log("t");
    console.log("w");
    console.log("i");
    console.log("k");

}
// sayMyname()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
    
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
    
}

const result = addTwoNumbers(3,5)
// console.log("Result: ",result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    
    }
    return `${username} just logged in`

}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartprice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartprice(200, 300, 400, 2000));

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username : "satwik",
    price : 876897
})

const myNewArray =[200, 400, 300, 600]

function returnSecondvalue(getArray){
    return getArray[2]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400,300, 600]));




