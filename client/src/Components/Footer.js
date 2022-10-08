import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-4 pb-2" style={{ backgroundColor: '#0D7CAC' }}>
      <div className="container-fluid text-center ">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            Copyright © 2022. All rights reserved.
          </div>
          <div className="col-md-4 col-xs-12 text-white">Designed by Carreucky</div>
          <div className="col-md-4 col-xs-12">
            <p className="flex justify-center items-center">
              <a href="facebook" className="mx-3" style={{ color: 'black' }}>
                <FaFacebook />
              </a>

              <a href="facebook" className="mx-3" style={{ color: 'black' }}>
                <FaTwitter />
              </a>
              <a href="facebook" className="mx-3" style={{ color: 'black' }}>
                <FaGithub />
              </a>
              <a href="facebook" className="mx-3" style={{ color: 'black' }}>
                <FaLinkedinIn />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
