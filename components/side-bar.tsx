"use client";

import { cn } from "@/lib/utils";
import { IconHome } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const tabs = [
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
        name: "summary",
        value: "Tổng kết",
    },
    {
        name: "question",
        value: "Hỏi đáp",
    },
];

export const SideBar = () => {
    const [activeTab, setActiveTab] = useState("");
    useEffect(() => {
        const updateActiveTab = () => {
            const currentHash = window.location.hash.replace("#", "");
            setActiveTab(currentHash || "context");
        };

        updateActiveTab();
        window.addEventListener("hashchange", updateActiveTab);

        return () => {
            window.removeEventListener("hashchange", updateActiveTab);
        };
    }, []);

    return (
        <div className=" h-[95%] fixed left-5 w-14 bg-zinc-800 transform -translate-y-1/2 top-1/2 rounded-lg py-10 flex flex-col justify-between items-center">
            <div className="flex-1">
                <IconHome
                    size={30}
                    className="text-white cursor-pointer hover:opacity-80"
                />
            </div>
            <div className="flex flex-col gap-y-5">
                {tabs.map((tab) => (
                    <div
                        key={tab.name}
                        className={cn(
                            "[writing-mode:vertical-lr] rotate-180 whitespace-nowrap text-sm font-bold text-white border-l-2 hover:border-l-[#BC6A34] border-l-zinc-800 cursor-pointer transition-all duration-150 ease-in-out",
                            activeTab === tab.name && "border-l-[#BC6A34]"
                        )}
                        onClick={() => (window.location.hash = tab.name)}
                    >
                        {tab.value}
                    </div>
                ))}
            </div>
        </div>
    );
};
