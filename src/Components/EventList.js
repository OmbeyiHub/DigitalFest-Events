import React from 'react';
import EventItem from './EventItem';

function EventList({ events }) {
  return (
    <div className='event-list'>
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}
 
export default EventList;
