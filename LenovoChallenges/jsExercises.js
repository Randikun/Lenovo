
//    1) Create a function that receives an array of positive integers and returns an array with only the input's pair numbers. 
//    For example:
//        [INPUT] array = [1,2,3,4]
//        [OUTPUT] array = [2,4]

function findPairs(array) {
    let pairNumbers = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let num = array[i];
            pairNumbers = [...pairNumbers, num];
        }
    }
    return pairNumbers;
}

//  2) Create a function that receives a String as a parameter and returns a Boolean indicating if the word is a palindrome.
// level

function reverse (string) {
    if (string === "") {
        return "";
    } else {
        return reverse(string.substr(1)) + string.charAt(0);
    }
}

function isPalindrome(string) {
    
       let back = reverse(string)
       if (string === back) return true
       else return false
}


//   3) Using any JavaScript object creation pattern, create a Car object with the following attributes and methods:
//     Attributes: make, model, turnedOn, engineDisplacement, year
//     Methods: isOn(), turnOn() , turnOff(), toString() [returns year,make,model, and engineDisplacement], 
//              getMarketingData()[returns make, model and year]

class Car {
    constructor(make, model, turnedOn, engineDisplacement, year) {
        this.make = make;
        this.model = model;
        this.turnedOn = turnedOn;
        this.engineDisplacement = engineDisplacement;
        this.year = year;
    }
    isOn() {
        if (this.turnedOn) {
            return true;
        }
        return false;
    }
    turnOn() {
        this.turnedOn = true;
    }
    turnOff() {
        this.turnedOn = false;
    }
    toString() {
        return `${this.year} ${this.make} ${this.model} ${this.engineDisplacement}`;
    }
    getMarketingData() {
        return `${this.make}, ${this.model}, ${this.year}`;
    }
}

let Peugeot = new Car("Peugeot", "403", true, "1.468cm3", "1962");

//  4) Create a Bicycle object with only the make, model, and year attributes and no methods. 
//     Instantiate it and print to the console it's internal state calling the getMarketingData() method from the Car object.

class Bicycle extends Car {
    constructor(make, model, year) {
        super(make, model, year);
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myBike = new Bicycle("venzo", "cross", "2020");
console.log(myBike.getMarketingData());