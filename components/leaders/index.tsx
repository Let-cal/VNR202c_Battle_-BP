"use client";

import BackgroundImage from "@/assets/hero/background.png";
import { useEffect, useRef, useState } from "react";
import { HCM } from "./hcm";
import { VNG } from "./vng";

export const Leaders = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const slides = [<HCM key={"first"} />, <VNG key={"second"} />];

    const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        if (isScrolling) return;
        setIsScrolling(true);

        if (event.deltaY > 0) {
            setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
        } else {
            setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }

        if (currentSlide === slides.length - 1) {
            setTimeout(() => {
                setIsScrolling(false);
                document.body.style.overflowY = "auto";
            }, 500);
        } else {
            setTimeout(() => setIsScrolling(false), 500);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel, {
                passive: false,
            });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isScrolling, currentSlide]);
    return (
        <section
            ref={containerRef}
            id="leaders"
            className="w-screen h-screen relative "
        >
            <div className="h-[80px] w-full absolute z-20 top-0 left-0 flex justify-center items-center text-2xl font-bold text-center bg-yellow-400 text-red-800">
                CÁC VỊ LÃNH ĐẠO VÀ CHỈ HUY
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${
                        BackgroundImage.src || BackgroundImage
                    })`,
                }}
            ></div>

            <div
                className="flex w-full h-full  transition-transform duration-300  "
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-screen overflow-hidden relative h-full flex-shrink-0"
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </section>
    );
};
