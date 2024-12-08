"use client";

import BackgroundImage from "@/assets/battles/whyfightcare.jpg";

export const WhyFightCareFully = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col p-10 space-y-2 justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage.src || BackgroundImage})`,
      }}
    >
      {/* <h2 className="scroll-m-20 text-center text-3xl font-bold tracking-tight first:mt-0 text-[#F7BB03]">
    ĐỢT TIẾN CÔNG THỨ NHẤT
  </h2> */}
      <div className="w-full flex flex-row">
        <div className="w-[50%] ">
          <div className="m-6 p-6 gap-4 items-center">
            <h2 className=" scroll-m-20 text-start font-bold tracking-tight first:mt-0 text-7xl bg-gradient-to-r from-[#FFD700] to-[#FF4500] bg-clip-text text-transparent">
              Tại sao lại chọn đánh chắc, tiến chắc?
            </h2>
          </div>
        </div>
        <div className="w-[50%] space-y-8 m-6 p-6 rounded-lg bg-white/80 backdrop-blur-sm">
          <ul
            style={{ listStyleType: "disc" }}
            className="pl-5 italic text-2xl"
          >
            <li>
              Lực lượng quân ta không quen đánh địa hình bằng phẳng, có lợi thế
              đánh vào ban đêm và dễ ẩn nấp. Nếu đánh nhanh thắng nhanh thì phải
              đánh cả ngày lẫn đêm liên tục, không phát huy được hết sức mạnh
              của quân ta
            </li>
            <li>
              Tình hình đã thay đổi, Pháp không còn trạng thái &quot;lâm thời
              phòng ngự&quot; mà đã được xây dựng thành tập đoàn cứ điểm vững
              chắc với sự yểm trợ của pháo binh và không quân mạnh mẽ
            </li>
            <li>
              Địa hình Điện Biên Phủ dễ thủ khó công nên chọn cách đánh chắc,
              tiến chắc, bao vây và cắt tiếp tế của địch để dồn địch vào tình
              thế khó khăn rồi tấn công sẽ dễ hơn
            </li>
            <li>
              Bác Hồ đã dặn: &quot;Trận này chỉ được thắng không được thua vì
              thua là hết vốn&quot;
            </li>
            <li>
              Đánh nhanh thắng nhanh mang tính chủ quan và có phần mạo hiểm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
