"use client";

import React, { useEffect, useRef, useState } from "react";

export const useDetectDevice = () => {
  const checkForDevice = () => {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    return windowWidth < 769;
  };

  const [isMobile, setIsMobile] = useState(checkForDevice());
  const isMobileRef = useRef(isMobile);

  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  useEffect(() => {
    const handlePageResized = () => {
      const checkIsMobile = checkForDevice();
      if (checkIsMobile !== isMobileRef.current) {
        setIsMobile(checkIsMobile);
      }
    };
    window.addEventListener("resize", handlePageResized);
    window.addEventListener("orientationchange", handlePageResized);
    window.addEventListener("load", handlePageResized);
    window.addEventListener("reload", handlePageResized);

    return () => {
      window.removeEventListener("resize", handlePageResized);
      window.removeEventListener("orientationchange", handlePageResized);
      window.removeEventListener("load", handlePageResized);
      window.removeEventListener("reload", handlePageResized);
    };
  }, []);

  return { isMobile };
};
