import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const colorTxt = {
    color: "#0D7CAC",
    textDecoration: "none",
  };
  return (
    <div>
      <section className="vh-60 m-5">
        {/* <h3 style={{fontWeight:'300'}} className="text-center"></h3> */}
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-80">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 pl-0 py-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-3  me-2">
                    REGISTER{" "}
                    <span>
                      <Link style={colorTxt} to="/signup">
                        SIGN UP
                      </Link>
                    </span>
                  </p>
                </div>

                {/* <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div> */}

                <div className="form-outline mb-3 ">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg "
                    placeholder="username"
                  />
                </div>

                <div className="form-outline mb-3 ">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="password"
                  />
                </div>
                <div className="text-center text-lg-start">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{
                      border: "none",
                      paddingLeft: "2.5rem;",
                      paddingRight: "2.5rem",
                      backgroundColor: "#0D7CAC",
                      fontSize: "18px",
                      fontWeight: "600",
                      padding: "5px 40px",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}