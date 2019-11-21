const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbname = "dogs";
const collectionName = "breeds";

MongoClient.connect(url, (error, client) => {

    const db = client.db(dbname);

    const breedsCollection = db.collection(collectionName);

    const dogBreedToUpdate = {
        "breedType": "Husky"
    };

    const dogBreedToUpdateTo = {
        "breedType": "Pinch"
    };

    breedsCollection.updateOne(dogBreedToUpdate, {$set: dogBreedToUpdateTo}, (error, result) => {
        console.log(result);
    });

    client.close();
})