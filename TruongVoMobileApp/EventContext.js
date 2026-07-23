import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const [events, setEvents] = useState([
    {
      id: '001',
      name: 'Community Walk',
      info: 'Morning walking group',
      date: '2026-07-13',
    },
    {
      id: '002',
      name: 'Yoga Session',
      info: 'Community yoga class',
      date: '2026-07-14',
    },
  ]);


  const addEvent = (newEvent) => { 
    setEvents(previousEvents => [...previousEvents, newEvent,]);
  };


  return (
    <EventContext.Provider value={{events, addEvent,}}>{children}</EventContext.Provider>
  );
};