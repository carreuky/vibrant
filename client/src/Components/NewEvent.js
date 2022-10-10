import React, { useState } from "react";

export default function NewEvent() {
  const [eventname, setEventName] = useState("");
  const [fee, setFee] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState("");
  const [details, setDetails] = useState("");

  const eventToDB = { eventname, fee, location, date, slots, details };

  // console.log(eventToDB)
  function handleSubmitEvent() {
    console.log(eventToDB);
    setEventName('')
    setFee('')
    setLocation('')
    setDate('')
    setSlots('')
    setDetails('')
  }

  return (
    <div>
      <div className="d-flex justify-content-center ">
        <div
          className="col-lg-4 col-sm-6 col-xs-8 m-2 p-3 py-4 rounded"
          style={{ backgroundColor: "#0D7CAC" }}
        >
          <form className="">
            <div className="form-outline mb-3  ">
              <input
                onChange={(e) => setEventName(e.target.value)}
                type="text"
                id="form3Example3"
                value={eventname}
                className="form-control form-control-lg "
                placeholder="event name"
              />
            </div>
            <div className="form-outline mb-3  ">
              <input
                onChange={(e) => setFee(e.target.value)}
                type="number"
                id="form3Example3"
                value={fee}
                className="form-control form-control-lg "
                placeholder="entry fee"
              />
            </div>
            <div className="form-outline mb-3  ">
              <input
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                id="form3Example3"
                value={location}
                className="form-control form-control-lg "
                placeholder="location"
              />
            </div>

            <div className="form-outline mb-3 ">
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                value={date}
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="event date"
              />
            </div>

            <div className="form-outline mb-3 ">
              <input
                type="number"
                id="form3Example4"
                value={slots}
                onChange={(e) => setSlots(e.target.value)}
                className="form-control form-control-lg"
                placeholder="slots available"
              />
            </div>

            <div className="form-outline mb-3 ">
              <textarea
                onChange={(e) => setDetails(e.target.value)}
                className="form-control"
                value={details}
                type="text"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="details"
              ></textarea>
            </div>
            <div className="text-center text-lg-start mb-3 text-black">
              <button
                type="button"
                onClick={handleSubmitEvent}
                className="btn btn-lg text-white"
                style={{
                  border: "none",
                  paddingRight: "2.5rem",
                  backgroundColor: "orange",

                  fontSize: "18px",
                  padding: "5px 40px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
