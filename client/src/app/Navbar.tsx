// src/app/components/Navbar.tsx

const Navbar: React.FC = () => {
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
  
