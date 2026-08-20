const name = "Satwik"
const Repo = 5

// console.log(name + Repo + " Value");

console.log(`Hello my name is ${name} and my Repo count is ${Repo}`);

const gameName = new String('Satwik-hc-game')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString =gameName.slice(-8, 4)
console.log(anotherString);

const newstringOne ="         Satwik         "
console.log(newstringOne);
console.log(newstringOne.trim());


const url = "https://Satwik.com/Satwik%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));








