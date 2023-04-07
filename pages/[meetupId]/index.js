import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.wallpaperscraft.com/image/single/bananas_fruits_yellow_122540_2560x1024.jpg"
      title="First meetup."
      address="some address"
      description="some description"
    />
  );
};


export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths:[
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }

}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      MeetupData: {
        image: "https://images.wallpaperscraft.com/image/single/bananas_fruits_yellow_122540_2560x1024.jpg",
        id: meetupId,
        title: "First meetup.",
        address: "some address",
        description: "some description",
      }
    }
  }
}


export default MeetupDetails;
