import BackgroundImage from "@/assets/panaroma/panaroma3.jpg";

export const ThirdSummary = () => {
    return (
        <div
            className="w-screen h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${
                    BackgroundImage.src || BackgroundImage
                })`,
            }}
        >
            <div className="absolute max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-[#BC6A34]/70 flex flex-col gap-5 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-bold text-center">
                        21/7/1954
                    </div>
                    <div className="text-2xl font-bold text-center">
                        Cú chốt hạ buộc Pháp phải ngồi vào bàn nghị sự, ký Hiệp
                        định Geneva
                    </div>
                </div>
                <div className="text-xl text-center font-medium italic">
                    Chiến thắng đã đánh dấu chấm hết cho sự ngoan cố, hiếu chiến
                    của thực dân Pháp và đế quốc Mỹ. Buộc Chính phủ Pháp cùng
                    các bên tham chiến phải ngồi vào bàn nghị sự, ký Hiệp định
                    Geneva.
                </div>
            </div>
        </div>
    );
};
