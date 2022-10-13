import React, { useEffect, useState, Fragment } from "react";
import EditForm from "./EditForm";

export default function UserCardEvent({setEventEdit,eventEdit }) {
  const [mine, setMine] = useState([]);
  const [edit, setEdit] = useState(false);
  

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
    <div className="m-5">
        {" "}
        {edit ? <EditForm eventEdit={eventEdit} setEventEdit={setEventEdit} setEdit={setEdit} edit={edit} /> : ""}
        {mine?.map((one) => {
          setEventEdit(one);
          return (
            <div key={one.id} className="card mt-4 ml-1 rounded ">
              <h5 className="card-header pl-2 ">{one.eventname}</h5>
              <div className="card-body" style={{ backgroundColor: "#0D7CAC" }}>
                <div className="row  pb-2">
                  <div className="">
                    <h6 className="card-text text-white">{one.details}</h6>
                    <div>
                      <button
                        onClick={() => setEdit(!edit)}
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
    </div>
  );
}
