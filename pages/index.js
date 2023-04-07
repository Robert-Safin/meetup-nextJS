import MeetUpList from "../components/meetups/MeetUpList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://images.wallpaperscraft.com/image/single/bananas_fruits_yellow_122540_2560x1024.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://images.wallpaperscraft.com/image/single/bananas_fruits_yellow_122540_2560x1024.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return <MeetUpList meetups={props.meetups}></MeetUpList>;
};

// export const getStaticProps = async () => {
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 10
//   }
// }

export const getServerSideProps = async (context) => {
   // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    }
  };
};

export default HomePage;
