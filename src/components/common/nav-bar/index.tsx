"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/button/index";
import SideBarIcon from "../side-bar/icon";
import Link from "@/components/common/link/index";
import useResponsive from "@/hooks/useResponsive";

import styles from "@/styles/common/nav-bar/index.module.scss";

const NavBar = () => {
  const [isClient, setIsClient] = useState(false);
  const { width } = useResponsive();

  const handleRenderListOfLi = () => {
    if (width && width > 850) {
      return (
        <>
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/">Về chúng tôi</Link>
          </li>
          <li>
            <Link href="/">Dự án</Link>
          </li>
          <li>
            <Link href="/">Liên hệ</Link>
          </li>
          <li>
            <Link href="/">Tin tức</Link>
          </li>
          <li>
            <Link href="/">Tiếng Việt</Link>
          </li>
        </>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, [width]);

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logoWrapper}>
          <Image
            src="https://tekup.vn/wp-content/uploads/2022/08/logo-tekup-02.png"
            alt="Tekup JSC"
            width={150}
            height={40}
          />
        </div>
        <div className={styles.navBarWrapper}>
          <ul>
            {isClient && width && width > 850 && (
              <>
                <li>
                  <Link href="/">Trang chủ</Link>
                </li>
                <li>
                  <Link href="/">Về chúng tôi</Link>
                </li>
                <li>
                  <Link href="/">Dự án</Link>
                </li>
                <li>
                  <Link href="/">Liên hệ</Link>
                </li>
                <li>
                  <Link href="/">Tin tức</Link>
                </li>
                <li>
                  <Link href="/">Tiếng Việt</Link>
                </li>
              </>
            )}
            <li>
              <Button style={{ marginRight: "10px" }}>Liên hệ ngay</Button>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Dự án</h1>
    </div>
  );
};

export default NavBar;
