import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Layout from '../../components/layout/Layout';

const NewMeetupPage = () => {

  const addMeetupHandler = (formData) => {
    console.log(formData);
  }

  return (
    <Layout>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Layout>
  )
}

export default NewMeetupPage
