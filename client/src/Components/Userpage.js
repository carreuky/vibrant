import React from "react";

export default function Userpage({ user }) {
  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "30px",
    fontWeight: "300",
  };
  const yell = { color: "#FDFF00", fontWeight: "bold" };
  return (
    <div>
      <h4 style={colorTxt} className=" px-5">
        Welcome {user.username}
      </h4>
      <div className="mx-5 mt-4 d-flex justify-content-between">
        <div>
        <button
          type="button"
          className="btn btn-lg"
          style={{
            border: "none",
            color: "white",
            backgroundColor: "#0D7CAC",
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          Create Event
        </button>
        </div>
        <div className=" float-end">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">
              Search
            </label>
          </div>
        </div>
      </div>
      <div className="card m-5">
        <h5 className="card-header pl-2 ">Mkulima</h5>
        <div className="card-body" style={{ backgroundColor: "#0D7CAC" }}>
          <div className="row  pb-2">
            <div className="">
              <h6 className="card-text text-white">
                With supporting text below as a natural lead-in to additional
                content.
              </h6>
              <div>
                <button
                  type="button"
                  style={{ backgroundColor: "white" }}
                  class="btn btn-btn-light "
                >
                  Edit
                </button>
                <button type="button" class="btn btn-danger mx-2">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div
            style={yell}
            className="d-flex justify-content-between col-md-8 col-xs-12 "
          >
            <p>Ngong Forest</p>
            <p>22/12/12</p>
            <p>Ksh 230/=</p>
          </div>
        </div>
      </div>
    </div>
  );
}
