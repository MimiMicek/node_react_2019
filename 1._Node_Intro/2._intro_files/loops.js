const fruits = ["apple", "banana", "pineapple", "tomato"];

// const newFruits = [];
// const forEachResult = fruits.forEach((element, index) => {
//     if (element !== "apple") {
//         newFruits.push(element);
//         console.log(element);
//     }
// });

const mapResult = fruits.map(element => {
    if (element !== "apple") {
        return element;
    }
});

// using filter do not save the fruits that contain the letter "n" "N"
const result = fruits.filter(fruit => !fruit.toLowerCase().includes('n'));


console.log(result);

//fruits.forEach(console.log);