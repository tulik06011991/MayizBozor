// src/app/components/Navbar.tsx
"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
    const[se, set] = useState(false)
    return (
      <nav>
        <ul className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {/* Boshqa havolalar */}
        </ul>
        
       
      </nav>
    );
  };
  
  export default Navbar;
  
