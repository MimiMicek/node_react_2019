// define a classic function that console logs something
// call this function with node.js

// hoisting
// myFunction("Anders");

function myFunction(name) {
    console.log("Hi ", name);
}

const giveName = function() {
    return "Anders";
}

// functions are first-class citizens in Javascript
// myFunction(giveName());

// arrow functions
const yourName = () => {
    return "Charlene";
}


