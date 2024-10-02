"use client"; // Agar siz 'app' papkasidan foydalansangiz
import React, { useState } from "react";
import { FaBars, FaTimes, FaPlus } from "react-icons/fa";
import Link from 'next/link';

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-500 shadow">
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
            <Link href="/" className="block py-2 px-4 rounded hover:bg-blue-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className="block py-2 px-4 rounded hover:bg-blue-700">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block py-2 px-4 rounded hover:bg-blue-700">
              Settings
            </Link>
          </li>
          <li>
            <Link href="/logout" className="block py-2 px-4 rounded hover:bg-blue-700">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Header bar with buttons */}
      <div className="p-4 w-full flex justify-between items-center bg-gray-500 ml-64">
        {/* Chap tomonda FaBars */}
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* O'ng tomonda Mahsulot qo'shish tugmasi */}
        <Link href="/register" className="border-blue-500 bg-blue-800 text-white rounded">
            <button className="flex items-center bg-transparent py-2 px-4 rounded hover:bg-blue-600 hover:text-white focus:outline-none active:bg-blue-800">
                <FaPlus className="mr-2" size={24} />
                Mahsulot qo'shish
            </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
