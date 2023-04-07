
import { MongoClient } from "mongodb";
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoUser = process.env.MONGO_USER;
const mongoCluster = process.env.MONGO_CLUSTER;
const mongoDatabase = process.env.MONGO_DATABASE;

const handler = async (req, res) => {

  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    console.log('Starting POST request');
    const client = await MongoClient.connect(
      `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}.ruawe0b.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`
    );
    console.log('Connected to MongoDB');

    const db = client.db();


    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ // or simple insert entire 'data' object
      title: title,
      image: image,
      address: address,
      description: description,
    });
    console.log(result);
    client.close()

    res.status(201).json({ message: "Meetup inserted!" });
  }
};
export default handler;
