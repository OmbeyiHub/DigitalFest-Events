import React from 'react';
import './EventItem.css'; 

function EventItem({ event }) {
  return (
    <div className="event-card">
      <img src={event.Poster} alt={event.name} className="event-card-image" />
      <div className="event-card-content">
        <h2 className="event-card-title">{event.name}</h2>
        <p className="event-card-description">{event.description}</p>
        <p className="event-card-date">{event.date}</p>
        <p className="event-card-location">{event.location}</p>
        <p className="event-card-price">{event.Price}</p>
      </div>
    </div>
  );
}

export default EventItem;