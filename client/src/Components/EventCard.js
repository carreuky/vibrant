import React, { Fragment } from "react";

export default function EventCard({ eachEvent, onBookingRequest }) {
  return (
    <Fragment>
      <div className="col-sm-6 col-lg-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{eachEvent.eventname}</h5>
              <h6>{eachEvent.date}</h6>
            </div>
            <p className="card-text text-truncate">{eachEvent.details}</p>
            <h6>Location: {eachEvent.location}</h6>

            <div className="d-flex justify-content-between ">
              <button
                onClick={() => onBookingRequest(eachEvent.id)}
                type="button"
                style={{ backgroundColor: "#0D7CAC" }}
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Book
              </button>
              <p className="">Ksh {eachEvent.fee}</p>
              <p>Slots--{eachEvent.slots}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
