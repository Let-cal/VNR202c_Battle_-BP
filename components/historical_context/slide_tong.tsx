"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import SlidePage1 from "./slide1";
import SlidePage2 from "./slide2";
import SlidePage3 from "./slide3";
import SlidePage4 from "./slide4";
import SlidePage5 from "./slide5";
import SlidePage6 from "./slide6";
import SlidePage7 from "./slide7";

const slides = [
    { id: 0, component: SlidePage1 },
    { id: 1, component: SlidePage2 },
    { id: 2, component: SlidePage3 },
    { id: 3, component: SlidePage4 },
    { id: 4, component: SlidePage5 },
    { id: 5, component: SlidePage6 },
    { id: 6, component: SlidePage7 },
];

export default function Context() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleScroll = useCallback(
        (e: WheelEvent) => {
            e.preventDefault();

            if (e.deltaY > 0) {
                if (currentSlide < slides.length - 1) {
                    setCurrentSlide((prev) => prev + 1);
                    setDirection(1);
                }
            } else {
                if (currentSlide > 0) {
                    setCurrentSlide((prev) => prev - 1);
                    setDirection(-1);
                }
            }
        },
        [currentSlide]
    );

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [handleScroll]);

    const pageVariants = {
        initial: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            transition: { duration: 0.6 },
        }),
        in: {
            x: 0, // Center on the screen horizontally
            transition: {
                duration: 0.6,
                ease: [0.4, 0.0, 0.2, 1],
            },
        },
        out: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%", // Move horizontally
            transition: {
                duration: 0.6,
                ease: [0.4, 0.0, 0.2, 1],
            },
        }),
    };

    return (
        <div className="relative w-[200vw] h-screen overflow-hidden">
            <div className="sticky top-0 w-full h-full">
                <AnimatePresence initial={false} custom={direction}>
                    {slides.map(
                        (slide, index) =>
                            currentSlide === index && (
                                <motion.div
                                    key={slide.id}
                                    custom={direction}
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    className="absolute top-0 left-0 w-screen h-full"
                                >
                                    {slide.component && <slide.component />}
                                </motion.div>
                            )
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
