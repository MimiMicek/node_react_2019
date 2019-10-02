const faker = require("faker");
const fs = require("fs");
const performance = require('perf_hooks').performance;

function createAPerson() {
    return {
        namePrefix: faker.name.prefix(),
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        // todo generate our own email from the name
        email: faker.internet.email(),
        country: faker.address.country()
    };
}

const amountOfPeopleToGenerate = 1000000;
const dataToSave = {people: []};

const timeStart = performance.now();

for (let i = 0; i < amountOfPeopleToGenerate; i++) {
    dataToSave.people.push(createAPerson());
}

fs.writeFile("./people.json", JSON.stringify(dataToSave), (error) => {
    if (error) {
        throw(error);
    }
    console.log("Saved");
});

const timeEnd = performance.now();

const timeSpanMiliSec = timeEnd - timeStart;
const timeSpanSec = timeSpanMiliSec / 1000;

console.log("Execution time: ", timeSpanSec);