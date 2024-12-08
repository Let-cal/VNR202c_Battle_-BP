"use client";
import BackgroundImage from "@/assets/battles/12ly7.jpg";

export default function FightCarefully() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col p-10 space-y-2 justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage.src || BackgroundImage})`,
      }}
    >
      <div className="space-y-4 m-6 p-6 rounded-lg bg-white/80 backdrop-blur-sm">
        <h2 className="scroll-m-20 text-center font-bold tracking-tight first:mt-0 text-5xl bg-gradient-to-r from-[#FFD700] to-[#ff0000] bg-clip-text text-transparent">
          Đánh chắc, tiến chắc
        </h2>
        <ul style={{ listStyleType: "disc" }} className="pl-5 italic text-2xl">
          <li>
            Bao vây cứ điểm của địch, dùng hệ thống hầm hào như một chiếc khiên
            bảo vệ bộ đội trước đạn pháo của kẻ thù, từng bước tiến vào lòng
            địch
          </li>
          <li>
            Tiến công từng vị trí một, vây chặt địch, cắt tiếp tế của địch, buộc
            địch rơi vào tình thế khó khăn
          </li>
          <li>
            Trong đêm ngày 25/1, Đại tướng Võ Nguyên Giáp đã đổi phương châm tác
            chiến thành “đánh chắc, tiến chắc”
          </li>
        </ul>
      </div>
    </div>
  );
}
