import React from "react";

export default function NewEvent() {
  return (
    <div className="d-flex justify-content-center ">
      <form className="col-lg-4 col-sm-6 col-xs-8">
        <div className="form-outline mb-3  ">
          <input
            // onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="form3Example3"
            value=''
            className="form-control form-control-lg "
            placeholder="username"
          />
        </div>
        <div className="form-outline mb-3  ">
          <input
            // onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="form3Example3"
            value=''
            className="form-control form-control-lg "
            placeholder="username"
          />
        </div>
        <div className="form-outline mb-3  ">
          <input
            // onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="form3Example3"
            value=''
            className="form-control form-control-lg "
            placeholder="username"
          />
        </div>

        <div className="form-outline mb-3 ">
          <input
            // onChange={(e) => setPassword(e.target.value)}
            type="text"
            value=''
            id="form3Example4"
            className="form-control form-control-lg"
            placeholder="password"
          />
        </div>

        <div className="form-outline mb-3 ">
          <input
            type="password"
            id="form3Example4"
            value=''
            // onChange={}
            className="form-control form-control-lg"
            placeholder="confirm password"
          />
        </div>
        <div className="text-center text-lg-start mb-3">
          <button
            type="button"
            className="btn btn-lg text-white"
            style={{
              border: "none",
              paddingLeft: "2.5rem;",
              paddingRight: "2.5rem",
              backgroundColor: "#0D7CAC",
              fontSize: "18px",
              padding: "5px 40px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
