"use client";
import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaBars } from "react-icons/fa"; // Import icons from react-icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full  bg-gray-200 shadow">
      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full transition-transform transform md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-800 w-64 p-6 text-white z-50`}
      >
        <button
          className="absolute top-6 right-6 md:hidden"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 shadow ">Menu</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="#home"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaInfoCircle className="mr-2" /> About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaServicestack className="mr-2" /> Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaPhone className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Navbar for larger screens */}
      <div className="hidden md:flex w-full bg-gray-700 shadow  p-6 text-white justify-between items-center">
        <h2 className="text-2xl font-semibold">Menu</h2>
        <ul className="flex space-x-8 mr-0">
          <li>
            <a
              href="#home"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaInfoCircle className="mr-2" /> About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaServicestack className="mr-2" /> Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg flex items-center hover:text-gray-300"
            >
              <FaPhone className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      
        {/* FaBars button only visible on mobile */}
        <button className="md:hidden mb-6 mt-6 ml-2" onClick={toggleSidebar}>
          <FaBars style={{ fontSize: "25px" }} />
        </button>
      
    </div>
  );
};

export default Sidebar;
