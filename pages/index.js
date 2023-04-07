import MeetUpList from "../components/meetups/MeetUpList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="desciption" content="description of the app goes here"></meta>
      </Head>
      <MeetUpList meetups={props.meetups}></MeetUpList>
    </>
  );
};

export const getStaticProps = async () => {
  const mongoPassword = process.env.MONGO_PASSWORD;
  const mongoUser = process.env.MONGO_USER;
  const mongoCluster = process.env.MONGO_CLUSTER;
  const mongoDatabase = process.env.MONGO_DATABASE;

  const client = await MongoClient.connect(
    `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}.ruawe0b.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

// export const getServerSideProps = async (context) => {
//   const req = context.req
//   const res = context.res
//    // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   };
// };

export default HomePage;
