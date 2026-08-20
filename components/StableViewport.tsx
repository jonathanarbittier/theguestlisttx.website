"use client";

import { useEffect } from "react";

export function StableViewport() {
  useEffect(() => {
    const setHeight = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty(
        "--stable-viewport-height",
        `${Math.round(height)}px`,
      );
    };

    const handleOrientationChange = () => window.setTimeout(setHeight, 180);

    setHeight();
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return null;
}
