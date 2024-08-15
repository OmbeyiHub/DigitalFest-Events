import React, { useState, useEffect } from 'react';
import EventFilter from './EventFilter';
import EventItem from './EventItem';


const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:8002/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredEvents(events.filter((event) => event.category === selectedCategory));
    } else {
      setFilteredEvents(events);
    }
  }, [selectedCategory, events]);
  

  return (
    <div>
      <EventFilter
        categories={['Sporting Activities', 'Music Concerts', 'Team Building', 'Developers Spot', 'Food and Drink Event','Charity Event','Outdoor Cinema']}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ul>
        {filteredEvents.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
