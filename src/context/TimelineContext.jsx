import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    const now = new Date();

    const newEntry = {
      id: Date.now(),
      type, // call | text | video
      title: `${type} with ${name}`,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      createdAt: now
    };

    setTimeline(prev => [newEntry, ...prev]); // recent first
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);