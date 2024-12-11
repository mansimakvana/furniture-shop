import React from "react";
import PageHeading from "../common/PageHeading";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"About Us"} />

      <div className="w-10/12 m-auto p-18">
        <div className="my-8 text-3xl font-bold">About Us</div>
        <div className="flex p-18">
        <Link className="text-gray-800 text-xl mr-6">
          <FaFacebook />
        </Link>
        <Link className="text-gray-800 text-xl mr-6">
          <FaLinkedin />
        </Link>
        <Link className="text-gray-800 text-xl mr-6">
          <FaYoutube />
        </Link>
        <Link className="text-gray-800 text-xl mr-6">
          <FaInstagram />
        </Link>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
