import React from "react";
import image from "../image/home-image.svg";

export default function Home() {
  return (
    <div>
      <div className="container-fluid my-5 p-5 ">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="font-weight-normal">
              <p className="display-7">EXPERIENCE MORE</p>
            </div>
            <div className="font-weight-normal ">
              <h1 className="" style={{fontWeight:'bold', fontSize:'45px'}}>
                Lets Connect You To Events In Your Location. Find Intrested
                Event to Join
              </h1>
            </div>
            <div className="">
              <h6 className="py-3" >
                Zero hidden service fees, price match guarantee, group discounts
                and more. Because they make it easy.
              </h6>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "#0D7CAC",
                  fontSize: "18px",
                  fontWeight: "900",
                }}
              >
                EXPLORE EVENTS
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <img src={image} className="img-fluid" alt="meet -up" />
          </div>
        </div>
      </div>
    </div>
  );
}
