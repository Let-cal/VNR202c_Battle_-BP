"use client";

import { useEffect, useState } from "react";
import Reloading from "./reloader";
import { SideBar } from "./side-bar";

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    const [isLoading, setIsloading] = useState<boolean>(true);
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsloading(false);
        }, 2000);

        const minimumLoadingTime = 1000;
        const additionalTime = minimumLoadingTime - 1000;
        if (additionalTime > 0) {
            setTimeout(() => {
                setIsloading(false);
            }, additionalTime);
        }

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);
    return (
        <>
            <div className="w-screen h-full relative">
                {isLoading ? <Reloading /> : null}
                {children}
                <SideBar />
            </div>
        </>
    );
}

export default MainLayout;
