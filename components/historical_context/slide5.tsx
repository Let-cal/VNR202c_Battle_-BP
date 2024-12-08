import Image from "next/image";
import background from "../../assets/images/history_context/bgSlide5 (1).jpg"; // Image for the left side of the slide

export default function SlidePage5() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image on the Left */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="Background"
          fill
          sizes="(max-width: 1920px) 100vw"
          quality={90}
          priority
          className="object-cover"
        />
      </div>

      {/* Main Title */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 w-full">
        <div className="flex items-center justify-center w-full">
          <div className="text-5xl font-bold text-yellow-500 text-right relative w-[50%] pr-2 font-sans">
            CÁC ĐỢT
            <span
              className="block mt-1 h-1 bg-black absolute right-0"
              style={{ width: "20%" }}
            ></span>
          </div>

          <div className="text-5xl font-bold text-left text-black relative w-[50%] pl-2 font-sans">
            TẤN CÔNG
            <span
              className="block mt-1 h-1 bg-yellow-500 absolute left-0"
              style={{ width: "20%" }}
            ></span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-full">
        {/* Left side: Background image */}
        <div className="w-1/2 h-full relative">
          <div className="absolute top-32 ml-[76px] bg-[#BC6A34]/80 pr-40 pl-14 py-5 w-[80%] rounded-md">
            <h1 className="text-2xl font-bold">ĐỢT TẤN CÔNG ĐẦU TIÊN</h1>
            <h1 className="text-1xl">13/03/1954 - 17/03/1954</h1>
          </div>

          <div className="absolute top-80 ml-[76px] bg-[#F6F1EE]/80 pr-20 pl-14 py-5 w-[80%] rounded-md">
            <h1 className="text-2xl font-bold">KẾT QUẢ</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>Triệt hạ cứ điểm Him Lam, Bản Kéo, đồi Độc Lập</li>
                <li>
                  Phá vỡ cửa ngõ phía Bắc của{" "}
                  <strong className="font-bold">
                    TẬP ĐOÀN CỨ ĐIỂM ĐIỆN BIÊN PHỦ
                  </strong>
                  .
                </li>
                <li>
                  Tiêu diệt và bắt sống trên 2.000 tên địch, phá hủy 25 máy bay,
                  xóa sổ 1 trung đoàn, uy hiếp sân bay Mường Thanh.
                </li>
                <li>
                  <strong className="font-bold">CHARLES PIROTH</strong> bất lực
                  trước pháo binh của ta đã dùng lựu đạn tự sát.
                </li>
              </ul>
            </h1>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 space-y-8 bg-gradient-to-t via-transparent to-transparent p-8">
          <div className="absolute top-32 bg-[#F6F1EE]/80 pr-20 pl-14 py-5 w-[50%] h-[60%] rounded-md">
            <h1 className="text-2xl font-bold">13/03/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  Đúng 8 giờ sáng,{" "}
                  <strong className="font-bold">BỘ ĐỘI TA</strong> bắn cháy hai
                  chiếc máy bay Dakota của quân Pháp tại sân bay Mường Thanh
                </li>
                <li>
                  17 giờ 5 phút, quân ta đồng loạt tấn công các cứ điểm Him Lam
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">14/03/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>7 giờ 30 phút, quân Pháp phản công ở Him Lam bất thành</li>
                <li>16 giờ 45 phút, quân ta nổ súng đánh đồi Độc Lập</li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">15/03/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  6 giờ 30 phút, lá cờ{" "}
                  <strong className="font-bold">QUYẾT CHIẾN QUYẾT THẮNG</strong>{" "}
                  được cắm trên đồi Độc Lập
                </li>

                <li>
                  12 giờ 45 phút, trung tá{" "}
                  <strong className="font-bold">CHARLES PIROTH</strong> (Jean
                  Charles Clément Piroth) tự sát
                </li>
                <li>
                  Quân Pháp tổ chức phản công tái chiếm đồi Độc Lập nhưng đều bị
                  đánh lui
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">17/03/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>Quân Pháp ở Bản Kéo sợ hãi bỏ chạy</li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
