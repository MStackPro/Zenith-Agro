import React from "react";
import FooterImage from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ColorSecondary py-10">
      <div className="container footer-container grid grid-cols-3">
        <div className="footer-left-items flex flex-col items-center gap-6">
          <div className="footer-left flex items-center">
            <Link to={"/"}>
              <img src={FooterImage} alt="footer image" className="w-32" />
            </Link>

            <div className="company-name text-white w-32">
              <h1 className="text-ColorPrimary text-2xl font-bold">Zenith</h1>
              <h6 className="text-1xl font-thin tracking-wider">agro-allied</h6>
              <h3 className="text-1xl font-semibold ">Cooperative</h3>
              <span className="tracking-wider text-1xl">s o c i e t y</span>
            </div>
          </div>
          <div className="socials flex gap-5">
            <Link
              to={"#"}
              className="text-2xl hover:text-ColorPrimary transition-all duration-500 ease-in-out"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              to={"#"}
              className="text-2xl hover:text-ColorPrimary transition-all duration-500 ease-in-out"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              to={"#"}
              className="text-2xl hover:text-ColorPrimary transition-all duration-500 ease-in-out"
            >
              <FaSquareXTwitter />
            </Link>
            <Link
              to={"#"}
              className="text-2xl hover:text-ColorPrimary transition-all duration-500 ease-in-out"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="footer-links text-white w-60 flex flex-col space-y-4">
          <h3 className="quick-link w-fit border-gray-50 border-solid border-b pb-4">
            Quick Links
          </h3>
          <div className="links flex justify-between items-center">
            <div className="left-links flex flex-col gap-2">
              <Link to={"/"} className="hover:text-ColorPrimary">
                Home
              </Link>
              <Link to={"/projects"} className="hover:text-ColorPrimary">
                Projects
              </Link>
              <Link to={"/contact"} className="hover:text-ColorPrimary">
                Contact Us
              </Link>
            </div>
            <div className="right-links flex flex-col gap-2">
              <Link to={"/blog"} className="hover:text-ColorPrimary">
                Blog
              </Link>
              <Link to={"/shop"} className="hover:text-ColorPrimary">
                Shop
              </Link>
              <Link to={"/"} className="hover:text-ColorPrimary">
                Join Us
              </Link>
            </div>
          </div>
        </div>

        <div className="newsletter text-white flex flex-col space-y-4">
          <h3 className="text-white border-b border-gray-50 border-solid w-fit pb-4">
            Our Newsletter
          </h3>
          <p>Subscribe to our newsletter to get updates.</p>
          <div className="input-area flex gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="newsletter-email px-4 w-80 text-xs rounded-full"
            />
            <input
              type="button"
              value="Subscribe"
              className="newsletter-btn btn font-semibold hover:bg-white hover:text-ColorSecondary w-28 justify-center flex"
            />
          </div>
        </div>
      </div>

      <p className="text-center mt-12 text-white text-xs">
        Copyright &copy; 2024 Mstack Solutions
      </p>
    </footer>
  );
};

export default Footer;
