import React from "react";
import image from "../image/home-image.svg";
import { Link } from "react-router-dom";
export default function Home() {
  const txt = {
    color: "#0D7CAC",
    fontWeight: "bold",
  };
  const colorTxt = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <div className="container-fluid my-3  p-5 ">
        <div className="row">
          <div className="col-12 col-lg-6 pt-3">
            <div className="mb-3">
              <h3 style={txt} className="">
                EXPERIENCE MORE
              </h3>
            </div>
            <div className="font-weight-normal ">
              <h1 className="display-5 pt-3" style={{ fontWeight: "bold" }}>
                Lets Connect You To Events In Your{" "}
                <span style={txt}>Location</span>. Find Intrested Event to{" "}
                <span style={txt}>Join</span>
              </h1>
            </div>
            <div className="">
              <h6 className="py-3">
                Zero hidden service fees, price match guarantee, group discounts
                and more. Because they make it easy.
              </h6>
            </div>
            <div className="my-4">
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
                <Link style={colorTxt}>Explore Events</Link>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-sm-5 pt-xs-4">
            <img src={image} className="img-fluid" alt="meet -up" />
          </div>
        </div>
      </div>
    </div>
  );
}