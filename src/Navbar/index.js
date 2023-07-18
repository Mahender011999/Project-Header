import React from "react";
import "./index.css";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="container1">
      <div className="container1">
        <FaGraduationCap className="graduation-cap" />{" "}
        <h1 className="heading">
          QEDU<label className="heading1">CATO</label>
        </h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
            <ul className="vertical">
              <li a href="#">
                Home Page 1
              </li>
              <li a href="#">
                Home Page 2
              </li>
              <li a href="#">
                Home Page 3
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Courses</a>
            <ul className="vertical">
              <li a href="#">
                Our Course
              </li>
              <li a href="#">
                Course Details
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>

            <ul className="vertical">
              <li a href="#">
                Event
              </li>
              <li a href="#">
                Gallery
              </li>
              <li a href="#">
                Pricing
              </li>
              <li a href="#">
                Faq
              </li>
              <li a href="#">
                Teacher
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <AiOutlineSearch  className="search-icon"/>
      <div className="admission-open">
      <h3 className="heading3">ADMISSION OPEN</h3>
      </div>

    </div>
  );
};

export default Navbar;
