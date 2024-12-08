"use client";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
const prompts = [
    "Có quan điểm cho rằng giai đoạn 1954 - 1964 ở Việt Nam là giai đoạn nội chiến. Các bạn hãy phân tích các dữ kiện lịch sử và đưa ra nhận định của mình về quan điểm trên.",
    "Tại sao trong cùng bối cảnh, Việt Nam tồn tại rất nhiều đảng và tổ chức chính trị hoạt động, kể cả không theo khuynh hướng vô sản, nhưng lại khẳng định sự ra đời của Đảng Cộng sản Việt Nam là một bước ngoặt lịch sử vĩ đại của phong trào yêu nước Việt Nam?",
    "Cách mạng Tháng Tám hoàn toàn không phải là một sự ăn may, giải thích tại sao",
    "Đã có một nền hòa bình bị bỏ lỡ phải không, và đáng ra Việt Nam có thể độc lập từ 1945 mà không cần kháng chiến chống Pháp",
];

const apiKey = "AIzaSyBexzItj3oU66WPOL0DTBGJD56Wnunk7kk";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export const AIChat = () => {
    const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);
    const [resultText, setResultText] = useState("Câu trả lời sẽ hiện ở đây.");
    const [loading, setLoading] = useState(false);

    const generateContent = async () => {
        try {
            setLoading(true);
            const prompt = selectedPrompt + " - Lịch sử đảng cộng sản việt nam";
            const result = await model.generateContent(prompt);

            const generatedText = result.response.text();
            setResultText(generatedText);
            setLoading(false);
        } catch (error) {
            console.error("Error generating content:", error);
        }
    };

    return (
        <section
            id="question"
            className="h-screen w-screen relative bg-[#8B0302]/80"
        >
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
                <div className="w-full max-w-7xl flex flex-col gap-20 ">
                    <div className="w-full flex items-center justify-center">
                        <AiButton />
                    </div>

                    <div className="max-w-7xl w-full mx-auto flex flex-row gap-10">
                        <div className=" w-3/4 flex flex-col gap-5">
                            <div className="w-full flex flex-col gap-2">
                                {prompts.map((value, index) => (
                                    <div
                                        key={index}
                                        className={`px-4 py-2 rounded-xl text-white w-full cursor-pointer transition-all duration-300 ${
                                            selectedPrompt === value
                                                ? "bg-[#D32F2F]"
                                                : "bg-[#7e0000]/80"
                                        }`}
                                        onClick={() => setSelectedPrompt(value)}
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={generateContent}
                                disabled={loading || !selectedPrompt}
                                className={`px-6 py-2 rounded-xl text-white bg-[#D32F2F] ${
                                    loading || !selectedPrompt
                                        ? "opacity-50 cursor-not-allowed"
                                        : "hover:bg-[#c2185b]"
                                }`}
                            >
                                {loading ? "Đang tạo..." : "Tạo câu trả lời"}
                            </button>
                        </div>

                        <div className=" px-4 py-2 max-h-[400px] overflow-y-scroll text-center bg-white text-black rounded-xl w-full">
                            {loading ? "Đang tạo câu trả lời..." : resultText}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import { useEffect, useMemo } from "react";

import { loadFull } from "tsparticles";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { IconSparkles } from "@tabler/icons-react";

const options: ISourceOptions = {
    key: "star",
    name: "Star",
    particles: {
        number: {
            value: 20,
            density: {
                enable: false,
            },
        },
        color: {
            value: [
                "#7c3aed",
                "#bae6fd",
                "#a78bfa",
                "#93c5fd",
                "#0284c7",
                "#fafafa",
                "#38bdf8",
            ],
        },
        shape: {
            type: "star",
            options: {
                star: {
                    sides: 4,
                },
            },
        },
        opacity: {
            value: 0.8,
        },
        size: {
            value: { min: 1, max: 4 },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            enable: true,
            direction: "clockwise",
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        links: {
            enable: false,
        },
        reduceDuplicates: true,
        move: {
            enable: true,
            center: {
                x: 120,
                y: 45,
            },
        },
    },
    interactivity: {
        events: {},
    },
    smooth: true,
    fpsLimit: 120,
    background: {
        color: "transparent",
        size: "cover",
    },
    fullScreen: {
        enable: false,
    },
    detectRetina: true,
    absorbers: [
        {
            enable: true,
            opacity: 0,
            size: {
                value: 1,
                density: 1,
                limit: {
                    radius: 5,
                    mass: 5,
                },
            },
            position: {
                x: 110,
                y: 45,
            },
        },
    ],
    emitters: [
        {
            autoPlay: true,
            fill: true,
            life: {
                wait: true,
            },
            rate: {
                quantity: 5,
                delay: 0.5,
            },
            position: {
                x: 110,
                y: 45,
            },
        },
    ],
};

export default function AiButton() {
    const [particleState, setParticlesReady] = useState<"loaded" | "ready">();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setParticlesReady("loaded");
        });
    }, []);

    const modifiedOptions = useMemo(() => {
        options.autoPlay = isHovering;
        return options;
    }, [isHovering]);

    return (
        <button
            className="group relative my-8 rounded-full bg-gradient-to-r from-blue-300/30 via-blue-500/30 via-40% to-purple-500/30 p-1 text-white transition-transform hover:scale-110 active:scale-105"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 via-40% to-purple-500 px-4 py-2 text-white">
                <IconSparkles className="size-6 -translate-y-0.5 animate-sparkle fill-white" />
                <IconSparkles
                    style={{
                        animationDelay: "1s",
                    }}
                    className="absolute bottom-2.5 left-3.5 z-20 size-2 rotate-12 animate-sparkle fill-white"
                />
                <IconSparkles
                    style={{
                        animationDelay: "1.5s",
                        animationDuration: "2.5s",
                    }}
                    className="absolute left-5 top-2.5 size-1 -rotate-12 animate-sparkle fill-white"
                />
                <IconSparkles
                    style={{
                        animationDelay: "0.5s",
                        animationDuration: "2.5s",
                    }}
                    className="absolute left-3 top-3 size-1.5 animate-sparkle fill-white"
                />

                <span className="font-semibold text-2xl">Hỏi đáp cùng AI</span>
            </div>
            {!!particleState && (
                <Particles
                    id="whatever"
                    className={`pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity ${
                        particleState === "ready"
                            ? "group-hover:opacity-100"
                            : ""
                    }`}
                    particlesLoaded={async () => {
                        setParticlesReady("ready");
                    }}
                    options={modifiedOptions}
                />
            )}
        </button>
    );
}
