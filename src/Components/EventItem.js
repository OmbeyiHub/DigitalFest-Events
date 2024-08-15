import React, { useState } from 'react';
import Rating from './Rating';

function EventItem({ event,userId }) {

  const [rating,setRating] = useState(0)
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.Price}</p>
      <Rating rating={rating} setRating={setRating}eventId={event.id} userId={userId}/>
      <img src={event.Poster} alt={event.name}/>
    </div>
  );
}

export default EventItem;
