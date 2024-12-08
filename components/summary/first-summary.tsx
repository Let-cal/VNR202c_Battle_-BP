import BackgroundImage from "@/assets/panaroma/panaroma1.jpg";

export const FirstSummary = () => {
    return (
        <div
            className="w-screen h-screen bg-cover relative "
            style={{
                backgroundImage: `url(${
                    BackgroundImage.src || BackgroundImage
                })`,
            }}
        >
            <div className="absolute max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-[#BC6A34]/70 flex flex-col gap-5 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-bold text-center">
                        7/5/1954
                    </div>
                    <div className="text-2xl font-bold text-center">
                        Việt Nam Giành Chiến Thắng Điện Biên Phủ &quot;Lừng Lẫy
                        Năm Châu, Chấn Động Địa Cầu&quot;
                    </div>
                </div>
                <div className="text-xl text-center font-medium italic">
                    &quot;Chín năm làm một Điện Biên
                    <br /> Nên vành hoa đỏ, nên thiên sử vàng&quot;
                </div>
                <div className="text-lg text-right">Tố Hữu (1920-2002)</div>
            </div>
        </div>
    );
};
