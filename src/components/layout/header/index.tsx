import React from "react";
import NavBar from "@/components/common/nav-bar";
import styles from "@/styles/layout/header/index.module.scss";
import VcRow from "@/components/common/vc-row";

const Header = () => {
  return (
    <>
      <section>
        <div className={styles.main}>
          <NavBar />
          <video src="/assets/video.mp4" autoPlay loop muted />
        </div>
      </section>
      <VcRow />
    </>
  );
};

export default Header;
