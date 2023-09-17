"use client";

import React, { useState } from "react";
import CardList from "@/components/common/card-list";
import Button from "@/components/common/button";
import styles from "@/styles/layout/products/index.module.scss";

type ImageType = { url: string; desc: string };
type ImageListType = ImageType[];

const BUTTON_LIST_CONTENT = [
  "Tất cả",
  "Cung ứng nhân lực",
  "Mobile App/Websites",
  "UI/UX Design",
];

const IMAGE_LIST = [
  [
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png",
      desc: "Boxgo – Nền tảng quản lý kho chuyên nghiệp",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
      desc: "Kiva – Tham vọng chuyển đổi số ngành môi giới",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png",
      desc: "Website Thương Mại Điện Tử – Summer21",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
      desc: "E-learning – Nền tảng đào tạo nội bộ",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png",
      desc: "TOI 3D Customize E-commerce",
    },
  ],
  [
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/doitac-smart-dev.jpg",
      desc: "",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/doitac-code-complete.jpg",
      desc: "",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/doitac-mor.jpg",
      desc: "",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/doitac-tego.jpg",
      desc: "",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/doitac-mitc.jpg",
      desc: "",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/doitac-dsoft.jpg",
      desc: "",
    },
  ],
  [
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png",
      desc: "Boxgo – Nền tảng quản lý kho chuyên nghiệp",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
      desc: "Kiva – Tham vọng chuyển đổi số ngành môi giới",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png",
      desc: "Website Thương Mại Điện Tử – Summer21",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
      desc: "E-learning – Nền tảng đào tạo nội bộ",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/image-1.png",
      desc: "TOI 3D Customize E-commerce",
    },
  ],
  [
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png",
      desc: "Boxgo – Nền tảng quản lý kho chuyên nghiệp",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png",
      desc: "Kiva – Tham vọng chuyển đổi số ngành môi giới",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png",
      desc: "Website Thương Mại Điện Tử – Summer21",
    },
    {
      url: "https://tekup.vn/wp-content/uploads/2022/09/image.png",
      desc: "E-learning – Nền tảng đào tạo nội bộ",
    },
  ],
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className={styles.btnsWrapper}>
        {BUTTON_LIST_CONTENT.map((item, index) => (
          <Button
            key={index}
            noBG={index !== activeIndex}
            width={index === 1 || index === 2 ? 190 : 120}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </Button>
        ))}
      </div>
      <CardList
        data={IMAGE_LIST[activeIndex]}
        showTitle={activeIndex === 1 ? false : true}
      />
    </section>
  );
};

export default Products;
