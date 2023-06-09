import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebarContainer">
      <div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            <li>
              <Link to={"/"}>Türk Sineması</Link>
            </li>
            <li>
              <Link to={"/"}>Covid-19 Hakkında</Link>
            </li>
            <li>
              <Link to={"/"}>Tümü</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Link to={"/"}>
          <HomeIcon sx={{ color: "white" }} fontSize="large" />
        </Link>
      </div>
    </div>
  );
}
