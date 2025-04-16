import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuFacebook,
  LuInstagram,
} from "react-icons/lu";
import { BsWhatsapp, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById("faq");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "faq" } });
    }
  };
  return (
    <>
      <footer className="bg-cyan-950">
        <div className="container">
          <div className="w-full px-2 py-4 md:px-4 md:py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="flex justify-center sm:justify-start text-cyan-500">
                  <Link to="/" className="flex items-center">
                    <img
                      src={"/logo-white.png"}
                      alt="Spin Drive Logo"
                      className="w-36 drop-shadow-logo"
                    />
                  </Link>
                </div>

                <p className="max-w-md mx-auto mt-2 leading-relaxed text-center text-white sm:max-w-xs sm:mx-0 sm:text-left">
                  Spin Drive is a self-drive car rental platform that gives you
                  the freedom to travel on your terms. Pick your car, plan your
                  trip, and hit the road — no drivers, no hassle.
                </p>

                <ul className="flex justify-center gap-4 mt-8 md:gap-6 sm:justify-start">
                  <li>
                    <Link
                      to=""
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-cyan-500"
                    >
                      <span className="sr-only">Facebook</span>
                      <LuFacebook className="text-xl" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to=""
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-cyan-500"
                    >
                      <span className="sr-only">Instagram</span>
                      <LuInstagram className="text-xl" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to=""
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-cyan-500"
                    >
                      <span className="sr-only">Twitter</span>
                      <BsTwitterX className="text-xl" />
                    </Link>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/916380442901?text=Hi%20there!%20I%20need%20help."
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-cyan-500"
                    >
                      <span className="sr-only">WhatsApp</span>
                      <BsWhatsapp className="text-xl" />
                    </a>
                  </li>

                  <li>
                    <Link
                      to=""
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-cyan-500"
                    >
                      <span className="sr-only">Youtube</span>
                      <BsYoutube className="text-xl" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2  gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-cyan-500">
                    Quick Links
                  </p>

                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to="/cars"
                        >
                          Our Cars
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-cyan-500">
                    Other Links
                  </p>

                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to="/#faq"
                          onClick={handleClick}
                        >
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to=""
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white transition hover:text-cyan-400"
                          to=""
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-cyan-500">Reach Us</p>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li>
                      <a
                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                        href="mailto: spindrivecars@gmail.com"
                      >
                        <LuMail className="text-white text-lg transition group-hover:text-cyan-400" />

                        <span className="text-white transition group-hover:text-cyan-400">
                          spindrivecars@gmail.com
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                        href="tel:+916380442901"
                      >
                        <LuPhone className="text-white text-lg transition group-hover:text-cyan-400" />

                        <span className="text-white transition group-hover:text-cyan-400">
                          +91 6380442901
                        </span>
                      </a>
                    </li>

                    <li className="flex items-center justify-center sm:justify-start gap-1.5 group cursor-pointer">
                      <LuMapPin className="text-white text-lg transition group-hover:text-cyan-400" />

                      <span className="text-white transition group-hover:text-cyan-400">
                        Chennai
                      </span>

                      {/* <address className="-mt-0.5 not-italic text-white group-hover:text-cyan-400">
                        21/38, 7th Street, B.V. Nagar, Nanganallur, Chennai -
                        600114 Tamil Nadu, India.
                      </address> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-12 border-t border-cyan-500/50">
              <div className="text-center sm:flex sm:justify-between sm:text-left">
                <p className="flex gap-2 text-sm">
                  <span className="block sm:inline text-cyan-500">
                    Design & Developed by Madadz
                  </span>
                </p>

                <p className="mt-4 text-sm text-zinc-100 sm:order-first sm:mt-0">
                  Copyright © 2025 - Spindrive. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
