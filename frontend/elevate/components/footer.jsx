import React from "react";
import { InstagramLogo, FacebookLogo, XLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gray-800 w-screen" id="footer">
      <div className="flex flex-col gap-20 font-inter text-white">
        <div className="flex justify-center pt-12">
          <div>
            <h3 className="text-2xl pb-4">Contact us</h3>
            <ul className="flex flex-col gap-4">
              <p>Address: 123 Main Street, Cityville, State, ZIP</p>
              <p>Phone: 555-123-4567</p>
              <p>Email: info@example.com</p>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl pb-4">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <a href="#hero">
                <p>Home</p>
              </a>
              <Link
                to={"/cataloge"}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <p>Shop</p>
              </Link>
              <Link
                to={"/aboutUs"}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <p>About us</p>
              </Link>
              <p>Contact us</p>
              <p>FAQ</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </ul>
          </div>
          <div className="w-1/4">
            <h3 className="text-2xl pb-4">Shipping Information</h3>
            <ul className="flex flex-col gap-4">
              <p>We offer domestic and international shipping options.</p>
              <p>Estimated delivery times vary by destination.</p>
              <p>Shipping rates calculated at checkout.</p>
              <p>Tracking provided for all orders.</p>
              <p>Standard domestic shipping: 3-5 business days.</p>
              <p>Expedited options available.</p>
              <p>International shipping times vary.</p>
              <p>
                Shipping may be affected by holidays and weather conditions.
              </p>
              <p>For more details, please refer to our shipping policies.</p>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center text-4xl">Elevate Elegance</h2>
          <div className="flex self-end pr-5">
            <Link to={"http://instagram.com"}>
              <InstagramLogo size={32} />
            </Link>
            <Link to={"http://facebook.com"}>
              <FacebookLogo size={32} />
            </Link>
            <Link to={"http://x.com"}>
              <XLogo size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
