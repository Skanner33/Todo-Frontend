import React from "react";
// import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      // style="background-color: rgb(8, 57, 102);"
    >
      <div class="container px-4">
        <a class="navbar-brand" href="/">
          {/* <span style="color:#ffffff; font-size:26px; font-weight:bold; letter-spacing: 1px;">
            Logo
          </span> */}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/code">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pricing">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/faq">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;