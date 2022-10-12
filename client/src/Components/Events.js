import React, { Fragment, useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [success,setSuccess] = useState()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    event_id: "",
  });

  const successmessage = success?.map((error) => {
    return (
      <>
        <p className="text-danger pt-3">{error}</p>
      </>
    );
  });
  
  const view = events.map((eve) => {
    return (
      <EventCard
        eachEvent={eve}
        onBookingRequest={(event_id) => setFormData({ ...formData, event_id })}
      />
    );
  });

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  function handleChange(e) {
    console.log(formData);
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function decreaseSlots(){
    
  }

  function handleSubmit(e) {
    let name = e.target.name;
    e.preventDefault();

    let data=formData
    console.log(data)


    fetch("/attendees", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((r) => {
          if (r.ok) {
            r.json().then((event) => setSuccess(Object.values(event)));
          }
           else {
            r.json().then((error) => console.log(Object.values(error)));
          }
        });
  }

  return (
    <Fragment>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Enter Information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Enter Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="name"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Phone Number</label>
                  <input
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="telephone no"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="display-6">LETS CONNECT, LEARN AND SHARE IDEAS.</h1>
        <h5>Don’t be left out reserve a ticket by booking an event</h5>
      </div>

      <div className="container">
        <div className="row m-4 ">{view}</div>
      </div>
    </Fragment>
  );
}
