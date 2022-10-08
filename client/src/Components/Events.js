import React from "react";

export default function Events() {
  return (
    <div>
      <div className="text-center">
        <h1 className="display-6">LETS CONNECT, LEARN AND SHARE IDEAS.</h1>
        <h5>Don’t be left out reserve a ticket by booking an event</h5>
      </div>

      <div className="container">
        <div className="row m-4">
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">Special title treatment</h5>
                  <h6>Date</h6>
                </div>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div className="d-flex justify-content-between ">
                <a href="#" className="btn btn-primary"  style={{
                      backgroundColor: "#0D7CAC",
                    }}>
                  Book{" "}
                </a>
                <p className ="">KSH 250</p>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Book{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
