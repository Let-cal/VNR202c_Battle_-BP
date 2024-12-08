import VNGIMAGE from "@/assets/hero/VNG.png";

export const VNG = () => {
    return (
        <div
            style={{
                zIndex: 1000,
            }}
            className="  h-full"
        >
            <div className="px-24 py-20">
                <div className="text-[70px] text-white">Đại tướng</div>

                <div className="text-[80px] text-yellow-500 font-bold mb-4 text-yellowText">
                    VÕ NGUYÊN GIÁP
                </div>
                <div className="text-[23px] text-white italic mb-4">
                    (25/08/1911 - 04/10/2013)
                </div>
                <div className="text-[20px] w-2/3 text-white ">
                    <p className="leading-relaxed">
                        Đại tướng Võ Nguyên Giáp là người trực tiếp chỉ huy
                        chiến dịch Điện Biên Phủ, một trong những trận đánh
                        quyết định của cuộc kháng chiến chống Pháp. Ông nổi bật
                        với khả năng điều chỉnh chiến lược linh hoạt, từ kế
                        hoạch &quot;đánh nhanh, thắng nhanh&quot; ban đầu sang
                        &quot;đánh chắc, tiến chắc,&quot; quyết định này đã đóng
                        góp quan trọng vào chiến thắng của quân đội Việt Nam. Võ
                        Nguyên Giáp không chỉ là một nhà chỉ huy tài ba trên
                        chiến trường, mà còn được quốc tế công nhận là một trong
                        những chiến lược gia quân sự xuất sắc nhất thế kỷ 20.
                        Tài năng và sự nhạy bén của ông trong việc ứng biến
                        chiến lược đã đưa quân đội Việt Nam từ thế yếu thành thế
                        mạnh, tạo nên chiến thắng Điện Biên Phủ lẫy lừng, buộc
                        Pháp phải ký kết Hiệp định Genève và chấm dứt sự cai trị
                        thực dân tại Đông Dương.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 h-full">
                <img
                    src={VNGIMAGE.src}
                    alt="VONGUYENGIAP"
                    className="h-full object-contain"
                />
            </div>
        </div>
    );
};
