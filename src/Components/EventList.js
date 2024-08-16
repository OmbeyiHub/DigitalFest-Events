// src/EventList.js
import React, { useState, useEffect } from 'react';
import EventFilter from './EventFilter';
import EventItem from './EventItem';
import EventSearch from './EventSearch';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://5-delta.vercel.app/events')
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

  const handleSearch = ({ keyword, location, date }) => {
    let filtered = events;
    if (keyword) {
      filtered = filtered.filter((event) =>
        event.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    if (location) {
      filtered = filtered.filter((event) =>
        event.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (date) {
      filtered = filtered.filter((event) => event.date === date);
    }
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <EventSearch onSearch={handleSearch} />
      <EventFilter
        categories={['Sporting Activities', 'Music Concerts', 'Team Building', 'Developers Spot', 'Food and Drink Event', 'Charity Event', 'Outdoor Cinema']}
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
}

export default EventList;
