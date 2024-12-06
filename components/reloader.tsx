"use client";

function Reloading() {
    return (
        <div
            className={`fixed top-0 w-full h-full z-[1000] animation-turn-off`}
        >
            <div className="flex h-full justify-center items-center bg-[#8B0302]  animate-fade-down-large">
                <div className="content flex justify-center items-center w-full animate-scale">
                    <h2 className="text-[80px]  text-white  font-extrabold relative text-transparent">
                        CHIẾN DỊCH ĐIỆN BIÊN PHỦ - 1954
                    </h2>
                    <h2 className="text-[80px]  text-white font-extrabold absolute">
                        CHIẾN DỊCH ĐIỆN BIÊN PHỦ - 1954
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Reloading;
