import React, { useState } from 'react';
import Rating from './Rating';
import "./EventItem.css"
import BookButton from './BookButton';


function EventItem({ event,userId }) {

  const [rating,setRating] = useState(0)
  return (
    <div className='event-card '>
      <div className='event-card-content '>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.Price}</p>
      <Rating rating={rating} setRating={setRating}eventId={event.id} userId={userId}/>
      <img src={event.Poster} alt={event.name} className='event-card-image'/>
      <BookButton eventId={event.id} />
      </div>
    </div>
  );
}

export default EventItem;