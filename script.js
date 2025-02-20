// Assignment question 1: Create a function to calculate the factorial of a number using closure
function factorial (x)
{
    let res = 1;
    function calCulateFact (){
        for (let i = x; i >= 1; i--)
        {
            res = res * i;
        }
    }
    calCulateFact();
    return res;
}

console.log(factorial(5));

// Assignment question 2: Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase
function letterUppercase (str){

    if (!(str[0] >= 'A' && str[0] <= 'Z'))
        str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

console.log(letterUppercase('hello'));

/*
Assignment question 3
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.

sum() returns the sum of these properties.

mul() returns the multiplication product of these properties.
*/
function Calculator ()
{
    this.read = function () {
        this.x = parseInt(prompt("Enter first number"));
        this.y = parseInt(prompt("Enter Second number"));
    }

    this.sum = function() {
        return this.x + this.y;
    };

    this.mul = function() {
        return this.x * this.y;
    };    
}

let calc = new Calculator();
calc.read();

console.log(calc.sum());
console.log(calc.mul());

/*
Assignment question 4
Deep clone Javascript Object (without using any internal methods of cloning). 
All properties along with functions, prototypes should get cloned to target objects.
*/
function deepCopy (obj){
    if (typeof obj !== 'object')
        return obj;

    let res = {};

    function temp (){
        res.prototype = obj.__proto__;
        res = new temp();
    }

    for (let key in obj){
        if (obj.hasOwnProperty(key))
            res[key] = deepCopy(obj[key]);
    }

    return res;
}

const myObject = {
    name: 'Trideep',
    address: {
        city: 'Indore',
        state: 'MP'
    },

    greet() {
      console.log(`Greetings from ${this.name}`);
    },
};

const newObj = deepCopy(myObject);
console.log(myObject);
myObject.address.city = 'D';
console.log(myObject);
console.log(newObj);
