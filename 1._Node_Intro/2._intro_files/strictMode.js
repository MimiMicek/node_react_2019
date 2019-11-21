"use strict";

const someInfo = {key: "value"};

//console.log(this);

// not allowed in strict mode because it's a reserved keyword
let public = 123; 

(function something() {
    // undefined in strict mode
    console.log(this);
})();
