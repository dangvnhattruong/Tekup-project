import React from "react";
import styles from "@/styles/common/button/index.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  noBG?: boolean;
};

const Button = ({
  className,
  onClick,
  children,
  width = 110,
  height = 43,
  style,
  noBG = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${noBG ? "" : styles.active}`}
      style={{ width, height, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
