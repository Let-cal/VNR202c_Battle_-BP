import BackgroundImage from "@/assets/panaroma/panaroma4.jpg";

export const FourthSummary = () => {
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
                        Mở ra một giai đoạn mới cho Việt Nam nói riêng, và Đông
                        Dương nói chung
                    </div>
                </div>
                <div className="text-xl text-center font-medium italic">
                    Chấm dứt hoàn toàn sự đô hộ của chủ nghĩa thực dân Pháp tại
                    ​Đông Dương, khích lệ nhân dân thế giới đứng lên đấu tranh
                    ​chống chủ nghĩa thực dân.
                    <br />
                    Miền Bắc tiến lên Chủ nghĩa xã hội, xây dựng hậu phương vững
                    ​chắc cho cuộc đấu tranh giải phóng miền Nam, thống nhất đất
                    ​nước, khẳng định đường lối kháng chiến đúng đắn của Đảng và
                    ​sự trưởng thành vượt bậc của Quân đội Nhân dân Việt Nam.
                </div>
            </div>
        </div>
    );
};
