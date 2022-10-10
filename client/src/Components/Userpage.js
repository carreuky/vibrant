import React, { useState, useEffect } from "react";
import UserCardEvent from "./UserCardEvent";
import NewEvent from "./NewEvent";

export default function Userpage({user}) {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [mine, setMine] = useState();

  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "30px",
    fontWeight: "300",
  };
  // console.log(mine.events)
   useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((mine) => setMine(mine));
      }
    });
  }, []);
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
        {toggleCreate ? (
          ""
        ) : (
          <div className="">
            <input type="search" id="form1" className="form-control" />
            <label className="" for="form1">
              Search
            </label>
          </div>
        )}
      </div>
      {toggleCreate ? <NewEvent /> : <UserCardEvent myevents={user.events} />}
    </div>
  );
}
