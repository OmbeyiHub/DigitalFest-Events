import React, { useState, useEffect } from 'react';
import EventList from '../Components/EventList';
import './AvailableEvents.css'

function AvailableEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8002/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className='available-events'>
      <h1 className='available-events-title'>Available Events </h1>
      <EventList events={events} />
    </div>
  );
}

export default AvailableEvents;