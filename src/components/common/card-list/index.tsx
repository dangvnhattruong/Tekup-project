"use client";
import { useState, useEffect } from "react";
import Card from "../card";
import { wrapGrid } from "animate-css-grid";
import useResponsive from "@/hooks/useResponsive";

import styles from "@/styles/common/card-list/index.module.scss";

type ImageType = { url: string; desc: string };
type ImageListType = ImageType[];
type PropsType = {
  data: ImageListType;
  showTitle: boolean;
};

const CardList = ({ data, showTitle }: PropsType) => {
  const [isClient, setIsClient] = useState(false);
  const { width } = useResponsive();

  useEffect(() => {
    if (isClient) {
      const grid = document.getElementById("grid") as any;
      wrapGrid(grid, {
        duration: 1000,
        easing: "backInOut",
      });
    }
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, [width]);

  return (
    <div className={styles.container}>
      {isClient && (
        <div
          id="grid"
          className={`${styles.grid} ${
            width && width < 1700 ? styles.gridColumnTablet : ""
          } ${width && width < 730 ? styles.gridColumnMobile : ""}`}
        >
          {data.map((image: ImageType, idx: number) => {
            return (
              <Card
                key={idx}
                url={image.url}
                desc={image.desc}
                style={{ "--index": idx }}
                showTitle={showTitle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardList;
