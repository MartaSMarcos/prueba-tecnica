import { useRef } from 'react';
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({ onAddMeetup }) {
  const title = useRef();
  const image = useRef();
  const address = useRef();
  const description = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const inputTitle = title.current.value;
    const inputImage = image.current.value;
    const inputAddress = address.current.value;
    const inputDescription = description.current.value;

    const meetupData = {
      id: `m${Date.now()}`,
      title: inputTitle,
      image: inputImage,
      address: inputAddress,
      description: inputDescription,
    };

    console.log('NEW MEETUP FORM --> Meetup data:', meetupData);
    
    try {
      await onAddMeetup(meetupData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={title} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={image} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={address} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea 
            id="description" 
            required 
            rows="5" 
            ref={description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}