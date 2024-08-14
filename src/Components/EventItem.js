import React from 'react';

function EventItem({ event }) {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.Price}</p>
      <img src={event.Poster} alt={event.name}/>
    </div>
  );
}

export default EventItem;
