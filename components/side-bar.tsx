"use client";

import { cn } from "@/lib/utils";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const tabs = [
    {
        name: "home",
        value: "Trang chủ",
    },
    {
        name: "context",
        value: "Bối cảnh lịch sử",
    },
    {
        name: "attacks",
        value: "Các đợt tấn công",
    },
    {
        name: "method",
        value: "Phương châm tác chiến",
    },
    {
        name: "hero",
        value: "Lãnh đạo",
    },
    {
        name: "summary",
        value: "Tổng kết",
    },
    {
        name: "question",
        value: "Hỏi đáp",
    },
];

export const SideBar = () => {
    const [activeTab, setActiveTab] = useState("home"); // Default to "home" tab

    useEffect(() => {
        const updateActiveTab = () => {
            const currentHash = window.location.hash.replace("#", "") || "home"; // Default to "home" if no hash

            // Check if the section with the currentHash exists on the page
            const targetElement = document.getElementById(currentHash);

            if (targetElement) {
                setActiveTab(currentHash);
                // Smooth scroll to the section
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                // If no element found, keep the active tab as "home"
                setActiveTab("home");
            }
        };

        // Initialize active tab based on the current URL hash
        updateActiveTab();

        // Listen to hash changes and update the active tab accordingly
        window.addEventListener("hashchange", updateActiveTab);

        return () => {
            window.removeEventListener("hashchange", updateActiveTab);
        };
    }, []);

    return (
        <div
            style={{
                zIndex: 1000,
            }}
            className="h-[95%] fixed left-5 w-14 bg-zinc-800 transform -translate-y-1/2 top-1/2 rounded-lg py-10 flex flex-col justify-between items-center"
        >
            {/* Home Icon */}
            <Link href="#home" className="flex-1">
                <IconHome
                    size={30}
                    className="text-white cursor-pointer hover:opacity-80"
                />
            </Link>

            {/* List of tabs */}
            <div className="flex flex-col gap-y-5">
                {tabs.slice(1, 6).map((tab) => (
                    <div
                        key={tab.name}
                        className={cn(
                            "[writing-mode:vertical-lr] rotate-180 whitespace-nowrap text-sm font-bold text-white border-l-2 hover:border-l-[#BC6A34] border-l-zinc-800 cursor-pointer transition-all duration-150 ease-in-out",
                            activeTab === tab.name && "border-l-[#BC6A34]" // Highlight active tab
                        )}
                        onClick={() => {
                            // Update the hash to scroll to the respective section
                            window.location.hash = tab.name;
                        }}
                    >
                        {tab.value}
                    </div>
                ))}
            </div>
        </div>
    );
};
