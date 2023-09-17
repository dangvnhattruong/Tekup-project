import { useState, useEffect } from "react";

const breakpoint = {
  xs: 0,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1200,
};

const useResponsive = () => {
  const getResponsiveInfo = () => {
    const isClient = typeof window === "object";

    const width = isClient ? window.innerWidth : undefined;

    const xs = true;
    const sm = width ? width >= breakpoint.sm : undefined;
    const md = width ? width >= breakpoint.md : undefined;
    const lg = width ? width >= breakpoint.lg : undefined;
    const xl = width ? width >= breakpoint.xl : undefined;

    return {
      width,
      xs,
      sm,
      md,
      lg,
      xl,
    };
  };
  const [responsiveInfo, setResponsiveInfo] = useState(getResponsiveInfo());

  useEffect(() => {
    const onResize = () => {
      const current = getResponsiveInfo();
      setResponsiveInfo(current);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return responsiveInfo;
};

export default useResponsive;
