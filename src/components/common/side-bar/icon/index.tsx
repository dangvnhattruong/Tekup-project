"use client";
import React, { useState } from "react";
import styles from "@/styles/common/side-bar/icon/index.module.scss";

const SideBarIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      //   className={`sidebarIcon ${isOpen ? "open" : ""}`}
      className={`${styles.sidebarIcon} ${isOpen ? styles.open : ""}`}
      onClick={handleClick}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default SideBarIcon;
