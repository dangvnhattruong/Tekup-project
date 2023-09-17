import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@/styles/common/card/index.module.scss";

type PropTypes = {
  url: string;
  desc: string;
  style?: any;
  showTitle?: boolean;
};

const Card = ({ url, desc, style, showTitle = true }: PropTypes) => {
  return (
    <div className={styles.container}>
      <a href="" title="">
        <div
          className={`${styles.gridItem} ${showTitle ? styles.shadow : ""}`}
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            ...style,
          }}
        >
          {showTitle && (
            <div className={styles.desc}>
              <h5>{desc}</h5>
              <IoIosArrowForward />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default Card;
