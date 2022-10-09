import React from "react";

export default function UserCardEvent() {
    const yell = { color: "#FDFF00", fontWeight: "bold" };

  return (
    <div>
      <div className="card m-5 rounded">
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