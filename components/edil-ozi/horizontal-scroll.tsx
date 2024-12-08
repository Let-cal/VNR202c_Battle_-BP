"use client";
import { useEffect, useState } from "react";

export default function useHorizontalScroll() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = (e: WheelEvent) => {
      // Ngăn chặn scroll liên tục
      if (isScrolling) return;

      if (e.deltaY > 0) {
        // Scroll down, go to next slide
        if (currentSlide < 1) {
          setIsScrolling(true);
          setCurrentSlide(currentSlide + 1);
        }
      } else {
        // Scroll up, go to previous slide
        if (currentSlide > 0) {
          setIsScrolling(true);
          setCurrentSlide(currentSlide - 1);
        }
      }

      // Đặt timeout để ngăn scroll liên tục
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Điều chỉnh thời gian timeout tùy ý
    };

    // Vô hiệu hóa scroll mặc định
    const preventDefault = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("wheel", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [currentSlide, isScrolling]);

  return currentSlide;
}
