import HoChiMinh from "@/assets/hero/Ho Chi Minh.png";

export const HCM = () => {
    return (
        <div
            style={{
                zIndex: 1000,
            }}
            className="  h-full"
        >
            <div className="px-24 py-20">
                <div className="text-[70px] text-white">Chủ tịch</div>

                <div className="text-[80px] text-yellow-500 font-bold mb-4 text-yellowText">
                    HỒ CHÍ MINH
                </div>
                <div className="text-[23px] text-white italic mb-4">
                    (19/05/1890 - 02/09/1969)
                </div>
                <div className="text-[20px] w-2/3 text-white ">
                    <p className="leading-relaxed">
                        Chủ tịch Hồ Chí Minh đóng vai trò quan trọng trong việc
                        định hướng và lãnh đạo toàn bộ cuộc kháng chiến chống
                        Pháp, đặc biệt là trong chiến dịch Điện Biên Phủ. Người
                        đưa ra tầm nhìn chiến lược với phương châm “đánh ăn
                        chắc, tiến ăn chắc,” đảm bảo mỗi bước tiến của quân đội
                        đều được chuẩn bị kỹ lưỡng để giành thắng lợi. Hồ Chí
                        Minh không chỉ tập trung vào chiến lược quân sự, mà còn
                        khéo léo tận dụng các mối quan hệ quốc tế, đặc biệt là
                        sự ủng hộ từ Liên Xô và Trung Quốc, nhằm tạo ra ưu thế
                        trên bàn đàm phán và trong chiến trường. Tầm nhìn của
                        Người đã tạo nền tảng cho các quyết định quân sự cụ thể
                        và đóng góp quan trọng vào thành công lịch sử của chiến
                        dịch Điện Biên Phủ.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 h-full">
                <img
                    src={HoChiMinh.src}
                    alt="HoChiMinh"
                    className="h-full object-contain"
                />
            </div>
        </div>
    );
};
