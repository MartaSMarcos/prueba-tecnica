import React, { createContext, useState } from 'react';

const MeetupsContext = createContext({
  meetups: [],
  addMeetup: (meetup) => {},
});

export function MeetupsContextProvider(props) {
  const [meetups, setMeetups] = useState([]);

  const addMeetupHandler = async (meetupData) => {
    const response = await fetch('http://localhost:3002/meetups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetupData),
    });

    if (!response.ok) {
      throw new Error('Failed to add meetup');
    }

    const data = await response.json();

    console.log("DATA -> MEETUPSCONTEXT ----> ", data);
    
    setMeetups((prevMeetups) => [...prevMeetups, data]);
  };

  return (
    <MeetupsContext.Provider value={{ meetups, addMeetup: addMeetupHandler }}>
      {props.children}
    </MeetupsContext.Provider>
  );
}

export default MeetupsContext;
