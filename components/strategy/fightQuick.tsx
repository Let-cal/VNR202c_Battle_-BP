"use client";
import BackgroundImage from "@/assets/battles/doan1.jpg";

export default function FightQuick() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col p-10 space-y-2 justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage.src || BackgroundImage})`,
      }}
    >
      <div className="space-y-4 m-6 p-6 rounded-lg bg-white/80 backdrop-blur-sm">
        <h2 className="scroll-m-20 text-center font-bold tracking-tight first:mt-0 text-5xl bg-gradient-to-r from-[#FFD700] to-[#ff0000] bg-clip-text text-transparent">
          Đánh nhanh thắng nhanh
        </h2>
        <ul style={{ listStyleType: "disc" }} className="pl-5 italic text-2xl">
          <li>
            Khi tất cả pháo bắn đã sẵn sàng, ngay khi có lệnh, lập tức chạy
            nhanh, tiến thẳng đến cơ quan đầu não.
          </li>
          <li>
            Ngày 14/1/1954, Võ Nguyên Giáp và Bộ Chỉ huy chiến dịch đã lên
            phương án “đánh nhanh, thắng nhanh” và dự định nổ súng vào ngày 20/1
            nhằm tiêu diệt Điện Biên Phủ trong hai ngày ba đêm.
          </li>
        </ul>
      </div>
    </div>
  );
}
