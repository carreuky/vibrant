import React from "react";

export default function UserCardEvent({ myevents }) {
  const yell = { color: "#FDFF00", fontWeight: "bold" };
  console.log(myevents);
  return <div>{myevents?.map((one) => {
    return(
      <div key={one.id} className="card m-5 rounded ">
        <h5 className="card-header pl-2 ">{one.eventname}</h5>
        <div className="card-body" style={{ backgroundColor: "#0D7CAC" }}>
          <div className="row  pb-2">
            <div className="">
              <h6 className="card-text text-white">
                {one.details}
              </h6>
              <div>
                <button
                  type="button"
                  style={{ backgroundColor: "white" }}
                  className="btn btn-btn-light "
                >
                  Edit
                </button>
                <button type="button" className="btn btn-danger mx-2">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div
            style={yell}
            className="d-flex justify-content-between col-md-8 col-xs-12 "
          >
            <p>Location: {one.location}</p>
            <p>Date: {one.date}</p>
            <p>Ksh {one.fee}/=</p>
            <p>Slots -- {one.slots}</p>
          </div>
        </div>
      </div>
    )
  })}</div>;
}
