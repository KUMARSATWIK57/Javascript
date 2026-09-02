const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()





// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai()




const chai = () => { 
    let username = "hitesh"
    console.log(this);
    
}

chai()

//////////////// Arrow function //////////////////
//  const addTwo = (nums1,nums2) => {
//     return nums1+nums2

//  }

//  const addTwo = (nums1,nums2) =>  nums1+nums2

//   const addTwo = (nums1,nums2) =>  (nums1+nums2)

  const addTwo = (nums1,nums2) => ({username : "hitesh"})
 console.log(addTwo(3,4));
 



