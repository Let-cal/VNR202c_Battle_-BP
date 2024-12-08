import BackgroundImage from "@/assets/panaroma/panaroma2.jpg";

export const SecondSummary = () => {
    return (
        <div
            className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${
                    BackgroundImage.src || BackgroundImage
                })`,
            }}
        >
            <div className="absolute max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-[#BC6A34]/70 flex flex-col gap-5 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-bold text-center">
                        Đập tan kế hoạch Nava của Pháp
                    </div>
                </div>
                <div className="text-xl text-center font-medium italic">
                    Chấm dứt hoàn toàn ách xâm lược của thực dân Pháp trên đất
                    nước ta
                </div>
            </div>
        </div>
    );
};
