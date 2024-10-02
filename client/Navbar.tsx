"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Funksiya: mahsulot qo'shish
  const addProduct = () => {
    alert("Mahsulot kiritish jarayoni boshlanmoqda!"); // Bu yerda mahsulot qo'shish logikasi bo'lishi kerak
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-blue-800">
          <h1 className="text-lg font-bold">Sidebar</h1>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="mt-8 space-y-4 px-4">
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
              Logout
            </a>
          </li>
        </ul>

        {/* Mahsulot qo'shish tugmasi */}
        <div className="mt-10 px-4">
          <button
            onClick={addProduct}
            className="flex items-center justify-center w-full py-2 px-4 bg-green-600 rounded hover:bg-green-700 focus:outline-none"
          >
            <FaPlus className="mr-2" size={16} /> Mahsulot Qo'shish
          </button>
        </div>
      </div>

      {/* Header bar with buttons */}
      <div className="p-4 w-full flex justify-between items-center bg-gray-100">
        {/* Chap tomonda FaBars */}
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* O'ng tomonda FaPlus */}
        <button onClick={addProduct} className="focus:outline-none">
          <FaPlus size={24} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
