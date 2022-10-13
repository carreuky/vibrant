import React, { useState } from "react";
import UserCardEvent from "./UserCardEvent";
import NewEvent from "./NewEvent";

export default function Userpage({ user }) {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [eventForm, setEventForm] = useState({
    eventname: "",
    fee: "",
    location: "",
    date: "",
    slots: "",
    details: "",
    user_id: user.id,
  });
  const [editText, setEditText] = useState(false);

  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "30px",
    fontWeight: "300",
  };
  return (
    <div>
      <h4 style={colorTxt} className=" px-5">
        Welcome {user.username}
      </h4>
      <div className="mx-5 mt-4 d-flex justify-content-between ">
        <div>
          <li
            onClick={() => setToggleCreate(!toggleCreate)}
            type="button"
            className="btn btn-lg"
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#0D7CAC",
              fontSize: "15px",
              fontWeight: "300",
            }}
          >
            {toggleCreate ? "View Your New Events" : "Create Event"}
          </li>
        </div>
        <div className="">
          <input type="search" id="form1" className="form-control" />
          <label className="" for="form1">
            Search
          </label>
        </div>
      </div>
      {/* {edit ? <EditForm setEventForm={setEventForm} eventForm={eventForm} setEdit={setEdit} edit={edit} /> : ""} */}
      {toggleCreate ? (
        <NewEvent
          setEventForm={setEventForm}
          eventForm={eventForm}
          editText={editText}
          setToggleCreate={setToggleCreate}
          toggleCreate={toggleCreate}
        />
      ) : (
        <UserCardEvent
          setEditText={setEditText}
          editText={editText}
          setEventForm={setEventForm}
          setToggleCreate={setToggleCreate}
          toggleCreate={toggleCreate}
        />
      )}
    </div>
  );
}
