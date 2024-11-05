import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import MeetupsContext from '../context/MeetupsContext';

export default function NewMeetupsPage() {
  const navigate = useNavigate();
  const meetContext = useContext(MeetupsContext);

  async function addMeetupHandler(meetupData) {
    try {
      await meetContext.addMeetup(meetupData);

      console.log('NewMeetupsPage --> Meetup added');
      navigate('/');
    } catch (error) {
      console.error('NewMeetupsPage --> Error adding meetup:', error);
    }
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}