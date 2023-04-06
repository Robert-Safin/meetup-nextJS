import MeetUpList from '../components/meetups/MeetUpList'


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://images.wallpaperscraft.com/image/single/bananas_fruits_yellow_122540_2560x1024.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://images.wallpaperscraft.com/image/single/bananas_fruits_yellow_122540_2560x1024.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup'
  }
]

const HomePage = () => {
  return (

      <MeetUpList meetups={DUMMY_MEETUPS}></MeetUpList>

  )
}

export default HomePage
