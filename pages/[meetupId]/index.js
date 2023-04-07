import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const mongoPassword = process.env.MONGO_PASSWORD;
  const mongoUser = process.env.MONGO_USER;
  const mongoCluster = process.env.MONGO_CLUSTER;
  const mongoDatabase = process.env.MONGO_DATABASE;

  const client = await MongoClient.connect(
    `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}.ruawe0b.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const mongoPassword = process.env.MONGO_PASSWORD;
  const mongoUser = process.env.MONGO_USER;
  const mongoCluster = process.env.MONGO_CLUSTER;
  const mongoDatabase = process.env.MONGO_DATABASE;

  const client = await MongoClient.connect(
    `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}.ruawe0b.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      }
    },
  };
};

export default MeetupDetails;
