console.log("Hello World"[10])

let cash = 10
let price = 40
let isStoreOpen = true
if ((price >= cash) && (isStoreOpen === true)){
    console.log("hi")
}

let str = cash >= price && isStoreOpen ? console.log("give receipt") : console.log("don't give receipt")

// DRY = Don't repeat yourself:

// WHILE LOOP
let count = 0
while (count <= 100){
    console.log(count)
    count++
}

// FOR LOOP
for (let i = 0; i <= 100; i++) {
    console.log(i)
}

// PRACTICE PROBLEMS
for (let i = 1; i < 21; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Frontend Simplified")
    }
    else if (i % 3 == 0){
        console.log("Frontend")
    }
    else if (i % 5 == 0){
        console.log("Simplified")
    }
    else{
        console.log(i)
    }
}

str = "Frontend Simplified"
let x = 0
while (x < str.length){
    console.log(str[x])
    x++
}

// FUNCTIONS

// Function Definition:
function welcomePersonToFES(name){
    console.log("Welcome to FES, " + name)
}

// Function Calls:
welcomePersonToFES("Brandon");
welcomePersonToFES("Le");
welcomePersonToFES("Libertore");

// PRACTICE PROBLEMS
function fahToCel(celsuis){
    return celsuis * 1.8 + 32
}

console.log(fahToCel(0))
console.log(fahToCel(10))
console.log(fahToCel(30))

// Arrow Function:
const fahToCel2 = (celsuis) => {
    return celsuis * 1.8 + 32
}

console.log(fahToCel2(0))
console.log(fahToCel2(10))
console.log(fahToCel2(30))

// ARRAYS
let items = [10, 20, 30, 40, 50]
console.log(items)

for (let i = 0; i < items.length; i++){
    console.log(items[i]);
}

items.push(200)

// Syntax for a callback function:
// .filter returns a new array only if the callback function returns true.
let newItems = items.filter((element) => {
    if (element < 50){
        return true
    }
})
console.log(newItems)

// ONE LINER METHOD
let oneLiner = items.filter(element => {return element < 50 ? true : false})
console.log(oneLiner)

// The above can be rewritten to:
oneLiner = items.filter(element => element < 50)
console.log(oneLiner)

// PRACTICE PROBLEMS
let example1 = ["A+", "A", "FAIL"]
let example2 = ["FAIL", "FAIL", "B"]
let example3 = ["FAIL"]

let returnNoFails = example1.filter(element => element !== "FAIL")
console.log(returnNoFails)

returnNoFails = example2.filter(element => element !== "FAIL")
console.log(returnNoFails)

returnNoFails = example3.filter(element => element !== "FAIL")
console.log(returnNoFails)

for (let i = 0; i < example1.length; i++){
    if (example1[i] === "FAIL"){
        example1.pop(i)
    }
}

console.log(example1)

// Array .map method allows for you to change elements within an array
// Can also be written to one liner, not done here but is do able
let arr = [1, 4, 9, 16]

let newArr = arr.map((element) => {
    return element** 2
})

console.log(newArr)

// PRACTICE PROBLEMS
let dollars = [1, 5, 10, 3]

let centsLong = dollars.map((element) => {
    return element * 100
})

console.log(centsLong)

let centsShort = dollars.map(elements => elements * 100)

console.log(centsShort)

let forMethod = []
for (let i = 0; i < dollars.length; i++){
    forMethod.push(dollars[i] * 100)
}

console.log(forMethod)

// OBJECTS
let userFirstName = "Brandon"
let userLastName = "Libertore"
let userDiscordId = "Brandoi"
let userSubStatus = "VIP"

// This is the definition of an object:
let user = {
    username: "Brandon", 
    email: "bliberto@uci.edu",
    subStat: "VIP",
    discordId: "Brandoi",
    lessonCompleted: [0, 1]
}
console.log(user.username)
console.log(user.lessonCompleted.map(element => element * 2))

// PRACTICE PROBLEM
let users = []

function register(username, email, password, subStat, discordId, lessonsCompleted){
    user = {
        username: username,
        email: email,
        password: password,
        subStat: subStat,
        discordId: discordId,
        lessonsCompleted: lessonsCompleted
    }
    users.push(user)
}

register("Brandon", "bliberto@uci.edu", "brandon123", "VIP", "Brandoi", [0, 1])
console.log(users[0])

// DOM - Document Object model
// Method 1: (used for IDs or classes and even elements themself)
console.log(document.querySelector('#title'))

// Method 2: (used for accessing ID)
console.log(document.getElementById("title"))

// Allows you to target any element or id or class and change the html directly.
document.querySelector("#title").innerHTML = "Frontend Simplified"

// Allow you to target any element or id or class and change the CSS directly.
document.querySelector("#title").style.fontSize = "12px"

function changeTitleToRed(){
    document.querySelector("#title").style.fontSize = "100px"
    document.querySelector("#title").style.color = "red"
}

function toggleDarkMode(){
    document.querySelector("body").classList.toggle("dark-theme")
}

// PROMISES
console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email");
console.log(emailRef)

// 2 Approaches to access the data from a promise:

// Method 1: Then method
// Call the .then method on the fetch API call which needs a callback function
// From there convert the response to a frontend readable object JSON
// Finally we take the elements of those within the JSON so that we have the proper objects
fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    response.json().then((data) => {console.log(data)
    emailRef.innerHTML = data.email;
    });
})

// To make the approach above easier to read and understand follow the below method:
fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
    return response.json()
})
.then(data => {
    console.log(data)
    emailRef.innerHTML = data.email
})


// Method 2: Async/Await method (Better Practice and Cleaner)
// In order to use await, we need an Async function
// Call await on original backend to fetch a response
// Once response is retrieved we call await again on the response
// inorder to convert it to a readable JSON object for the frontend
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    emailRef.innerHTML = data.email
}

main()

// CREATING A PROMISE
// If the Promise is successful we want to resolve it
// Else we want to reject it
function getSubscriptionStatus(){
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}

// We do not need to call .json() here because this object is already known
// and created in the frontend so no conversion is needed.
// Method 1:
getSubscriptionStatus().then(response => console.log(response))

// Method 2:
const statusRef = document.querySelector(".status");

async function main2(){
    const response = await getSubscriptionStatus();
    statusRef.innerHTML = response
}

main2()

// PRACTICE PROBLEM
// Create new promise that follows the below response
// If an error occurs, catch the error and display it to the frontend.
const videoRef = document.querySelector(".video")

function getVideo(subscriptionStatus){
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP"){
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE"){
            resolve("show trailer")
        }
        else{
            reject("no video")
        }
    })
}

// We use try-catch blocks to catch thrown errors. In somecases we will use
// these errors to be displayed on the frontend display.
async function main3(){
    try{
        const video = await getVideo("VIP");
        const trailer = await getVideo("FREE");
        const noVideo = await getVideo("BRUH");
    }
    catch (e){
        videoRef.innerHTML = e
    }
}

main3()