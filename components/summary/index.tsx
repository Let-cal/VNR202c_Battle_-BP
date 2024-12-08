"use client";

import { useState, useEffect, useRef } from "react";
import { FirstSummary } from "./first-summary";
import { SecondSummary } from "./second-summary";
import { ThirdSummary } from "./third-summary";
import { FourthSummary } from "./fourth-summary";

export const Summary: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const slides = [
        <FirstSummary key={"first"} />,
        <SecondSummary key={"second"} />,
        <ThirdSummary key={"third"} />,
        <FourthSummary key={"fourth"} />,
    ];

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
            id="summary"
            ref={containerRef}
            className=" w-screen h-screen overflow-hidden"
        >
            <div
                className="flex w-full h-full transition-transform duration-300  "
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-screen overflow-hidden h-full flex-shrink-0"
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </section>
    );
};
