function calcRemainder(num1, num2){
    return num1 % num2;
}
console.log(calcRemainder(4,2))

function isOdd(num){
    return num % 2 === 1
}
console.log(isOdd(1))

function isEven(num){
    return num % 2 === 0 ? 1 : -1
}
console.log(isEven(1))

function isLoggedInAndSubScribed(str1, str2){
    return str1 === "LOGGED_IN" && str2 == "SUBSCRIBED"
}
console.log(isLoggedInAndSubScribed("LOGGED_IN", "SUBSCRIBED"))

function isLoggedInOrSubScribed(str1, str2){
    return str1 === "LOGGED_IN" || str2 == "SUBSCRIBED"
}
console.log(isLoggedInOrSubScribed("LOGGED_IN", "UNSUBSCRIBED"))

function filterOutFalsy(val1, val2){
    return val1 == false ? val1 : val2
}
console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 500))
console.log(filterOutFalsy(true, 'Dog'))

function arrLength(arr){
    return arr.length
}
console.log(arrLength([1,2,3]))

function arrSum(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(arrSum([1,2,3]))

function progressiveSum(num){
    let sum = 0
    for (let i = 1; i <=num; i++){
        sum += i
    }
    return sum
}
console.log(progressiveSum(600))

function calcTime(num){
    let mins = Math.floor(num/60)
    let seconds = num % 60
    if (mins >= 10){
        if (seconds >= 10){
            return mins + ":" + seconds
        }
        else{
            return mins + ":0" + seconds
        }
    }
    else{
        if (seconds >= 10){
            return "0" + mins + ":" + seconds
        }
        else{
            return "0" + mins + ":0" + seconds
        }
    }
}
console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300));

function getMax(arr){
    return Math.max.apply(null, arr)
}
console.log(getMax([1,2,3]))

function reverseString(str){

    // LONG WAY
    // let newStr = ""
    // let i = str.length - 1
    // while (i >= 0){
    //     newStr += str[i]
    //     i--
    // }
    // return newStr

    // SHORT HAND with built in functions
    return str.split("").reverse().join("")
}
console.log(reverseString("abc"))

function convertoToZeros(arr){
    return arr.map(element => 0)
}
console.log(convertoToZeros([1,2,3,4,5]))

function filterApples(arr){
    return arr.filter(element => element !== "Apple")
}
console.log(filterApples(["B", "Apple", "O", "Apple"]))

function removeFalsy(arr){
    return arr.filter(element => !element == false)
}
console.log(removeFalsy(["", [], 0, null, undefined, "0"]))

function convertToBoolean(arr){
    return arr.map(element => !element == false ? true : false)
}
console.log(convertToBoolean(["", [], 0, null, undefined, "0"]))
console.log(convertToBoolean([500, 0, "david", "", []]))

function showRating(num){
    let stars = ""
    for (let i = 0; i < Math.floor(num); i++){
        if (i != Math.floor(num) - 1){
            stars += "* "
        }
        else{
            stars += "*"
        }
    }
    let period = ""
    if (num > 0.5){
        period = num % Math.floor(num) > 0.5 ? "." : ""
    }
    else if (num == 0.5){
        period = "."
    }
    return stars + period
}
console.log(showRating(0.5))

function sortLowToHigh(arr){
    // for (let i = 0; i < arr.length; i++){
    //     for (let j = 0; j < arr.length; j++){
    //         if (arr[j] > arr[j + 1]){
    //             let holder = arr[j]
    //             arr[j] = arr[j + 1]
    //             arr[j + 1] = holder
    //         }
    //     }
    // }
    return arr.sort((a,b) => a-b)
}
console.log(sortLowToHigh([10,15,4,2,7,9,1,3]))

function sortHighToLow(arr){
    return arr.sort((a,b) => b.price - a.price);
}
console.log(sortHighToLow([{id: 1, price: 50}, {id: 2, price: 30}, {id: 3, price: 60}, {id: 4, price: 10}]))

async function postsByUser(userId){
    const API_JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(API_JSONPLACEHOLDER)
    const data = await response.json()
    let newData = data.filter(elements  => elements.userId == userId)
    return newData
}
console.log(postsByUser(4))

async function firstSixIncomplete(){
    const API_JSONPLACEHOLDER = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(API_JSONPLACEHOLDER)
    const data = await response.json()
    let newData = data.filter(elements  => elements.completed === false).slice(0, 6)
    return newData
}

console.log(firstSixIncomplete())