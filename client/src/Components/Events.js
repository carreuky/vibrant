import React ,{useEffect,useState}from "react";
import EventCard from "./EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  console.log(events);

  const view = events.map((eve) => {
    return <EventCard eachEvent={eve} />;
  });

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => {
        setEvents(data);

      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="display-6">LETS CONNECT, LEARN AND SHARE IDEAS.</h1>
        <h5>Don’t be left out reserve a ticket by booking an event</h5>
      </div>

      <div className="container">
        <div className="row m-4">
       {view}
        </div>
      </div>
    </div>
  );
}
