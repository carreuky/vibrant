import React from "react";

export default function EventCard({eachEvent}) {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{eachEvent.eventname}</h5>
            <h6>{eachEvent.date}</h6>
          </div>
          <p className="card-text text-truncate">
            {eachEvent.details}
          </p>
          <h6>Location: {eachEvent.location}</h6>

          <div className="d-flex justify-content-between ">
            <button
              href=""
              className="btn btn-primary"
              style={{
                backgroundColor: "#0D7CAC",
              }}
            >
              Book{" "}
            </button>
            <p className="">Ksh {eachEvent.fee}</p>
            <p>Slots--{eachEvent.slots}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
