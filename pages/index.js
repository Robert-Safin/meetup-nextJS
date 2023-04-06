import MeetUpList from '../components/meetups/MeetUpList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
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
