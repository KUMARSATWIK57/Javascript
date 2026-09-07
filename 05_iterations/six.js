// const coding = [ "js", "ruby", "java","python","cpp"]

//  const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
    

// })
// console.log(values);


const myNums = [1,2,3,4,5,6,,7,8,9,10]

//  const newNums = myNums.filter( (num) => {
//       return num > 4

//  })
//  console.log(newNums);






// const newNums = []
// myNums.forEach( (num)=> {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
//  console.log(newNums);


const books =[
    { title: 'Book One',genre: 'Fiction',publish : 1981,
        edition : 2004
    },
    { title: 'Book tne',genre: 'History',publish : 1981,
        edition : 2004
    },
    { title: 'Book hne',genre: 'History',publish : 1982,
        edition : 2004
    },
    { title: 'Book fne',genre: 'History',publish : 1981,
        edition : 2004
    },
    { title: 'Book kne',genre: 'Fiction',publish : 1981,
        edition : 2004
    },{ title: 'Book nne',genre: 'Fiction',publish : 1982,
        edition : 2004
    },{ title: 'Book dne',genre: 'Non-Fiction',publish : 1982,
        edition : 2004
    },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter( (bk) => {
     return bk.publish >= 1982 && bk.genre ==="History"
    })
console.log(userBooks);



 
