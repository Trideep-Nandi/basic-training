// Question 1
function testNum(value) {
    const promise = new Promise((resolve, reject) => {
        if (value < 10)
            resolve("Value is lesser than 10")
        else
            reject("Value is higher than 10")
    });

    return promise;
}

testNum(1).then((result) => {
    console.log(result);
});

// Question 2
function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every((element) => { return typeof (element) === 'string' })) {
            arr.forEach((element, index) => {
                arr[index] = element.toUpperCase();
            });
            resolve(arr);
        }
        else
            reject("Error: Contains elements other than string")
    });
}

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every((element) => { return typeof (element) === 'string' })) {
            sortedArray = arr.sort();
            resolve(sortedArray);
        }
        else
            reject("Error: Contains elements other than string");
    });
}

const arr = ["hello", "andy", "nandi"]

makeAllCaps(arr).then((capitalized) => {
    console.log(capitalized);
    return sortWords(capitalized);
}).then((sorted) => {
    console.log(sorted);
}).catch(error => console.error(error));

// Question 3
function sleep (x, callback){
    return new Promise((resolve, reject)=>{
        setTimeout(
            resolve(callback())
        )
    , x});
}

function callBack (){
    console.log("Hello")
}

sleep(5, callBack).then((data)=>console.log(data))

// Question 4
const promise = Sequential();
promise.then((i) => console.log(i));

const printNumber = function (i, time) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(i);
            resolve(i);
        }, time);
    });
};
let queue = Promise.resolve();
for (let i = 0; i <= 10; i++) {
    queue = queue.then(function () {
        return printNumber(i, Math.floor(Math.random() * 6000));
    });
}

//Question 5
var somelist = readVeryLongList();

var nextItem = function() {

   var item = somelist.pop();

   if (item) {

       // process the list item...

       setTimeout(nextItem(), 0);

   }

};

/*
Here is a code snippet:

for(var i = 0; i < 10; i++) {

   setTimeout(function() {

     console.log(i); 

   }, 10);

}

Give the reasons for the output the above snippet gives. Also, modify the snippet to print values from 0 to 9.
*/
// Output: Prints 10 for 10 times.
/* The reason: i is a global variable created here. 
After the loop the value of i will be 10.
So when the callback function that is passed to the setTimeout they will access the value of i = 10
*/
// To fix
for(let i = 0; i < 10; i++) {

    setTimeout(function() {
 
      console.log(i); 
 
    }, 10);
 
}
/* By using the let keyword, it declares a new variable in each loop iteration*/