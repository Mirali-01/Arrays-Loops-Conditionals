// Part II: JavaScript Reps
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
// 🔴 The commit message should read:
// "Easy Going answered"

// const easy = () => {
//   for (let i = 1; i < 21; i++) {
//     console.log(i)
//   }
// }

// easy()

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.
// 🔴 The commit message should read:
// "Get Even answered"

// const getEven = () => {
//   for (let i = 0; i < 201; i += 2) {
//     console.log(i)
//   }
// }

// getEven()

// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.

// If a number is divisible by 3 log "Fizz" instead of the number.

// If a number is divisible by 5 log "Buzz" instead of the number.

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// 🔴 The commit message should read:
// "Fizz Buzz answered"
// const fizzBuzz = () => {
//   for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 === 0 && i !== 0) {
//       console.log("Fizz")
//     } else if (i % 5 === 0 && i !== 0) {
//       console.log("Buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }
// fizzBuzz()

// const fizzBuzz = () => {
//   for (let i = 0; i < 101; i++) {
//     i % 3 === 0 && i % 5 === 0 && i !== 0 ? console.log("FizzBuzz")
//       : i % 3 === 0 && i !== 0 ? console.log("Fizz")
//         : i % 5 === 0 && i !== 0 ? console.log("Buzz")
//           : console.log(i)
//   }
// }
// fizzBuzz()

// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"

// Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// console.log(dart)
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

// wolfy[0] = "Gameboy"
// console.log(wolfy)
// 🔴 The commit message should read:
// "Wild Wild Life answered"


// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.

// const ninjas = () => {
//   for (member of ninjaTurtles) {
//     console.log(member.toUpperCase())
//   }
// }

// ninjas()

// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!
// 🔴 The commit message should read:
// "Yell at the Ninja Turtles answered"


// Methods, Revisited
// Here is a list of favMovies:

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// // // Console log: the index of Titanic
// console.log(favMovies.indexOf("Titanic"))
// // // Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// // // Note: if you have to add to the array, feel free to add any movie you'd like
// // // use the .sort method Thought question: what did this do to the array? Did it permanently alter it? The .sort method modified the array to alphabetical order, permanently altering it 
// console.log(favMovies.sort()) 
// // // Use the method pop
// console.log(favMovies.pop()) 
// // // push"Guardians of the Galaxy"
// console.log(favMovies.push("Guardians of the Galaxy")) 
// // // Reverse the array
// console.log(favMovies.reverse()) 
// // // Use the shift method
// console.log(favMovies.shift()) 
// // // unshift- what does it return? 
// console.log(favMovies.unshift()) 
// // splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array? .splice modifies the array by replacing the elements inside
// console.log(favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar"))

// // slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array? .slice did not alter the array but instead made a copy of the array elements between the inputted range

// // store the value of your slice in a variable, console.log it - Thought question: what is going on here? storing the second half of the favMovies array in a variable
// let secondHalf = favMovies.slice(favMovies.length / 2)
// console.log(secondHalf)
// // console.log(favMovies)
// // console.log your final results
// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array? it is still in the array since it was only sliced
// console.log(favMovies.indexOf('Fast and Furious'))
// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let? const allows for protection against reassigning the variable which the array is stored in

// 🔴 The commit message should read:
// "Methods Revisited answered"

// Where is Waldo
// With the following multi-dimensional array
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// ["Lucinda", "Jacc", "Neff", "Snoop"],
// ["Petunia", ["Baked Goods", "Waldo"]]];
// // Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.indexOf("Eggbert")
// whereIsWaldo.splice(1, 1)
// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One"
// // Access and console.log "Waldo"
// console.log(whereIsWaldo)
// 🔴 The commit message should read:
// "Where is Waldo answered"

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times. *no this is a weird question*
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Make an array of the kitten's talking points

// Hint 2
// Use bracket notation to access each talking point kittyTalk[1];

// Hint 3
// Rather than hard-coding the array position number set a variable
//   let meow = 0;
//   kittyTalk[meow]
// Hint 4
// You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)

// Hint 5
// Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the Math.random() number so that the range is between 0 and the length of the array

// Hint 6
// Then round the number by using another Math method like Math.floor()or Math.ceil()or Math.round()
// 🔴 The commit message should read:
// "Excited Kittens answered"


// Find the Median
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// const median = () => {
//   let sortedArr = nums.sort()
//   medianValue = sortedArr[Math.floor(nums.length / 2)]
//   console.log(medianValue)
// }

// median()

// Expected output:
// => 15
// 🔴 The commit message should read:
// "Find the Median answered"