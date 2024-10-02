"use client";

import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaBars, FaPlusCircle } from "react-icons/fa";
import Link from "next/link"; // Link ni import qilamiz

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full bg-gray-200 shadow">
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
        <h2 className="text-2xl font-semibold mb-4 shadow flex items-center">
          Menu
        </h2>
        <ul className="space-y-4">
          <li>
            <Link href="#home" className="text-lg flex items-center hover:text-gray-300">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-lg flex items-center hover:text-gray-300">
              <FaInfoCircle className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-lg flex items-center hover:text-gray-300">
              <FaServicestack className="mr-2" /> Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg flex items-center hover:text-gray-300">
              <FaPhone className="mr-2" /> Contact
            </Link>
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
      <div className="hidden md:flex w-full bg-gray-700 shadow p-6 text-white justify-between items-center">
        <h2 className="text-2xl font-semibold flex items-center">
          Menu
        </h2>
        <ul className="flex space-x-8 mr-0">
          <li>
            <Link href="#home" className="text-lg flex items-center hover:text-gray-300">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/
            " className="text-lg flex items-center hover:text-gray-300">
              <FaInfoCircle className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-lg flex items-center hover:text-gray-300">
              <FaServicestack className="mr-2" /> Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg flex items-center hover:text-gray-300">
              <FaPhone className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
        {/* Mahsulot qo'shish button for larger screens */}
        <Link href="./index


        
        ">
          <button className="bg-green-500 py-2 px-4 text-lg font-semibold rounded flex items-center hover:bg-green-600">
            <FaPlusCircle className="mr-2" /> Add Product
          </button>
        </Link>
      </div>

      {/* Main Content */}
      {/* FaBars button and Add Product for mobile view */}
      <div className="md:hidden flex justify-between items-center w-full p-4">
        <button onClick={toggleSidebar}>
          <FaBars style={{ fontSize: "25px" }} />
        </button>
        <Link href="./index

        
        ">
          <button className="bg-green-500 py-2 px-4 text-lg text-white font-semibold flex rounded items-center hover:bg-green-600">
            <FaPlusCircle className="mr-2" /> Add Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
