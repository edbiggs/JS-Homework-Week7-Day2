//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods(object){
    for (let food of Object.entries(object)){     
        console.log(food) 
}
}    
    
favFoods(person3)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person (name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(name,age)
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.birthday = () => {
        age +=1
    }


}

ronnyHamhands = new Person('Ronny Hamhands', 34)

jacksonBulgogi= new Person('Jackson Bulgogi', 63)

ronnyHamhands.printInfo()
jacksonBulgogi.printInfo()

i = 0
while (i < 3){
    jacksonBulgogi.birthday()
    i ++
}

jacksonBulgogi.printInfo()





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterThanTen = string => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {if (string.length > 10){
            resolve(console.log('Big word'))
        }
        else if (string.length < 10){
            resolve(console.log("Small number"))
        }
        else {
            reject('Something aint right')
        }
    }, 3000)
 })
}

const promiseFunction = async () => {
    const data = await greaterThanTen('word')
    return data
}

promiseFunction()



// Codewars problems



// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol/(normPrice * (discount/100)))
  }

  

//   A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

  function main (verb, noun) {
    return verb + noun
  }








// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// ex.1
// calc(40,20)
// Output: 0 (The dad is twice as old as the son now!)

// ex.2
// calc(40,10)
// Output: 20 (The dad will be twice as old as his son in 20 years)

// ex.2 calc(50,30)
// Output: 10 (The dad was twice as old as his son 10 years ago)

// .5/(1/(f / s))

 function double_age(father,son){
    return (((father - son)/son) * son) - son
 }

 console.log(double_age(40,20))
 console.log(double_age(40,10))
 console.log(double_age(50,30))
 console.log(double_age(80,20))
 console.log(double_age(100,60))
 console.log(double_age(30,28))
 console.log(double_age(9000,642))
       
