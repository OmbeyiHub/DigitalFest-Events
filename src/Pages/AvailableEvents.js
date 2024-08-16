import React, { useState, useEffect } from 'react';
import EventList from '../Components/EventList';
import './AvailableEvents.css'

function AvailableEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://5-delta.vercel.app/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className='available-events'>
      <EventList events={events} />
    </div>
  );
}

export default AvailableEvents;