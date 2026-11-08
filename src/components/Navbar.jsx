import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Home", path: "/" },
  { label: "About & Coursework", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills & Resume", path: "/skills" },
  { label: "Multimedia & Interests", path: "/multimedia" },
  { label: "Reflection & Contact", path: "/reflection" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" end>
        Hiloni's Portfolio
      </NavLink>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;