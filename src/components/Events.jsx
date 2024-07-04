import React, { useState, useEffect } from 'react';
import './Events.css';

const events = [
  
  {
    title: 'Music Fest',
    description: 'A weekend filled with music from top bands and artists.',
    image: process.env.PUBLIC_URL + '/music-fest.jpg'
  },
  {
    title: 'Art Exhibition',
    description: 'A display of the finest art from upcoming artists.',
    image: process.env.PUBLIC_URL + '/art-exhibition.jpg'
  },
 
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(events[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * events.length);
      setCurrentEvent(events[randomIndex]);
    }, 5000); // Switch event every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="event-card">
        <img src={currentEvent.image} alt={currentEvent.title} className="event-image" />
        <h2>{currentEvent.title}</h2>
        <p>{currentEvent.description}</p>
      </div>
    </div>
  );
};

export default Events;
