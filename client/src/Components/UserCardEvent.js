import React, { useEffect, useState, Fragment } from "react";

export default function UserCardEvent({
  setToggleCreate,
  toggleCreate,
  setEventEdit,
}) {
  const [mine, setMine] = useState([]);
  const yell = { color: "#FDFF00", fontWeight: "bold" };

  function deleteEvent(id) {
    const updatedEvents = mine?.filter((one) => one.id !== id);
    setMine(updatedEvents);
  }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setMine(user.events));
      }
    });
  }, []);

  function handleDeleteClick(one) {
    let id = one.id;
    console.log(id);
    fetch(`/events/${id}`, {
      method: "DELETE",
    });
    deleteEvent(id);
  }

  return (
    <Fragment>
      {mine?.map((one) => {
        setEventEdit(one);
        return (
          <div key={one.id} className="card m-5 rounded ">
            <h5 className="card-header pl-2 ">{one.eventname}</h5>
            <div className="card-body" style={{ backgroundColor: "#0D7CAC" }}>
              <div className="row  pb-2">
                <div className="">
                  <h6 className="card-text text-white">{one.details}</h6>
                  <div>
                    <button
                      type="button"
                      style={{ backgroundColor: "white" }}
                      className="btn btn-btn-light "
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={() => handleDeleteClick(one)}
                    >
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
        );
      })}
    </Fragment>
  );
}
