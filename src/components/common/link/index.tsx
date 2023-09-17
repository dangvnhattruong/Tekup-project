import React from "react";
import Link from "next/link";
import styles from "@/styles/common/link/index.module.scss";

type PropTypes = {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const CustomLink = ({ href, children, style }: PropTypes) => {
  return (
    <div className={styles.container}>
      <Link href={href} style={{ ...style }}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
