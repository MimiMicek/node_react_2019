const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbname = "dogs";
const collectionName = "breeds";


MongoClient.connect(url, (error, client) => {

    const db = client.db(dbname);

    const breedsCollection = db.collection(collectionName);

    breedsCollection.find().toArray((error, breeds) => {
        console.log(breeds);
    });

    client.close();
})