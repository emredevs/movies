import React from "react";
import Sidebar from "../sidebar";
import styles from "./styles.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import HelpIcon from "@mui/icons-material/Help";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Sidebar />
      <div>
        <img
          style={{ borderRadius: "50%", width: "15%" }}
          src={"/logo.jpeg"}
          alt=""
        />
      </div>
      <div className={styles.iconMenu}>
        <input type="range" />

        <StarIcon sx={{ color: "white" }} fontSize="large" />

        <HelpIcon sx={{ color: "white" }} fontSize="large" />

        <SettingsIcon sx={{ color: "white" }} fontSize="large" />
      </div>
    </div>
  );
}
