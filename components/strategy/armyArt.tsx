"use client";

import BackgroundImage from "@/assets/battles/artStra.jpg";
type STATERGY = {
  name: string;
  content: string;
};

const strategies: STATERGY[] = [
  {
    name: "Đường lối chiến tranh nhân dân",
    content:
      "Đảng ta huy động được 260.000 dân công phục vụ (tương đương với 14 triệu ngày công), tức 26 vạn người phục vụ cho hơn 5 vạn bộ đội.",
  },
  {
    name: "Thay đổi phương châm tác chiến",
    content:
      "Chuyển sang phương châm 'đánh chắc, tiến chắc', bố trí lại lực lượng, quân ta chiếm lĩnh những vị trí trên cao xung quanh lòng chảo Điện Biên. Xây dựng giao thông hào, gặm nhấm, cô lập dần 'con nhím thép'.",
  },
  {
    name: "Sáng tạo trong các lối đánh",
    content:
      "Các chiến sĩ đã có sáng kiến cuốn rơm thành những con cúi lớn để ngụy trang khi đào giao thông hào và tránh những đường đạn bắn thẳng của địch.",
  },
];

export const ArmyArt = () => {
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
              Nghệ thuật quân sự sáng tạo trong chiến dịch Điện Biên Phủ
            </h2>
          </div>
        </div>
        <div className="w-[50%] space-y-8 m-6 p-6 rounded-lg bg-white/80 backdrop-blur-sm">
          {strategies.map((startergy, index) => (
            <div className="gap-4" key={index}>
              <h1 className="font-bold text-2xl">{startergy.name}</h1>
              <ul
                style={{ listStyleType: "disc" }}
                className="pl-5 italic text-2xl"
              >
                <li>{startergy.content}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
