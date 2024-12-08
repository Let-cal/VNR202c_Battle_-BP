"use client";

import React, { useState, useEffect, useRef } from "react";
import "./victory.css";

import Background from "@/assets/victory/Background from GitHub.png";
import LeftMan from "@/assets/victory/left.png";
import MidMan from "@/assets/victory/mid.png";
import RightMan from "@/assets/victory/Right Man.png";
import Front from "@/assets/victory/front.png";
import Light from "@/assets/victory/light.png";

export const Victory: React.FC = () => {
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [rotateDegree, setRotateDegree] = useState(0);
    const parallaxRefs = useRef<(HTMLImageElement | HTMLDivElement | null)[]>(
        []
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX - window.innerWidth / 2;
            const y = e.clientY - window.innerHeight / 2;

            setXValue(x);
            setYValue(y);

            const newRotateDegree = (x / (window.innerWidth / 2)) * 20;
            setRotateDegree(newRotateDegree);

            parallaxRefs.current.forEach((el) => {
                if (!el) return;

                const speedX = parseFloat(el.dataset.speedx || "0");
                const speedY = parseFloat(el.dataset.speedy || "0");
                const speedZ = parseFloat(el.dataset.speedz || "0");
                const rotation = parseFloat(el.dataset.rotation || "1");

                const isInLeft =
                    parseFloat(getComputedStyle(el).left || "0") <
                    window.innerWidth / 2
                        ? 1
                        : -1;
                const zValue =
                    (e.clientX - parseFloat(getComputedStyle(el).left || "0")) *
                    isInLeft *
                    0.1;

                el.style.transform = `
                    rotateY(${newRotateDegree * rotation}deg)
                    translateX(calc(-50% + ${-x * speedX}px))
                    translateY(calc(-50% + ${y * speedY}px))
                    perspective(2300px) translateZ(${zValue * speedZ}px)
                `;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [xValue, yValue, rotateDegree]);

    useEffect(() => {
        const handleResize = () => {
            const main = document.querySelector("main") as HTMLElement | null;
            if (main) {
                main.style.maxHeight = `${window.innerWidth * 0.5}px`;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="victory-main">
            <img
                ref={(el) => (parallaxRefs.current[0] = el)}
                src={Background.src}
                alt=""
                data-speedx="0"
                data-speedy="0.03"
                data-speedz="0.01"
                data-rotation="0.01"
                className="parallax bg-img w-screen h-screen"
            />
            <img
                ref={(el) => (parallaxRefs.current[1] = el)}
                src={LeftMan.src}
                alt=""
                data-speedx="0.15"
                data-speedy="0.08"
                data-speedz="0.1"
                data-rotation="1"
                className="parallax left-man"
            />
            <div
                className="text parallax"
                ref={(el) => (parallaxRefs.current[6] = el)}
            >
                <h2>7/5/1954</h2>
                <h1>Chiến Thắng Điện Biên Phủ</h1>
            </div>
            <img
                ref={(el) => (parallaxRefs.current[2] = el)}
                src={MidMan.src}
                alt=""
                data-speedx="0.1"
                data-speedy="0.05"
                data-speedz="0.2"
                data-rotation="1"
                className="parallax mid-man"
            />
            <img
                ref={(el) => (parallaxRefs.current[3] = el)}
                src={RightMan.src}
                alt=""
                data-speedx="0.05"
                data-speedy="0.03"
                data-speedz="0.1"
                data-rotation="1"
                className="parallax right-man"
            />
            <img
                ref={(el) => (parallaxRefs.current[4] = el)}
                src={Front.src}
                alt=""
                data-speedx="0.0"
                data-speedy="0.02"
                data-speedz="0.01"
                data-rotation="0.01"
                className="parallax front"
            />
            <img
                ref={(el) => (parallaxRefs.current[5] = el)}
                src={Light.src}
                alt=""
                className="light w-screen h-screen"
            />
        </section>
    );
};
