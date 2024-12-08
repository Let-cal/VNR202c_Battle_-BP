import Image from "next/image";
import background from "../../assets/images/history_context/bgSlide7.jpg";

export default function SlidePage7() {
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
          <div className="text-5xl font-bold  text-yellow-500 text-right relative w-[50%] pr-2 font-sans">
            CÁC ĐỢT
            <span
              className="block mt-1 h-1 bg-black absolute right-0"
              style={{ width: "20%" }}
            ></span>
          </div>

          <div className="text-5xl font-bold  text-left  text-black relative w-[50%] pl-2 font-sans">
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
          <div className="absolute top-32 ml-[76px] bg-[#BC6A34]/80  pr-40 pl-14 py-5 w-[80%] rounded-md">
            <h1 className="text-2xl font-bold">ĐỢT TẤN CÔNG THỨ BA</h1>
            <h1 className="text-1xl">01/05/1954 - 07/05/1954</h1>
          </div>

          <div className="absolute top-80 ml-[76px] bg-[#F6F1EE]/80 pr-20 pl-14 py-5 w-[80%] rounded-md">
            <h1 className="text-2xl font-bold">KẾT QUẢ </h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  Chiếm được toàn bộ khu vực <strong>ĐIỆN BIÊN PHỦ</strong>
                </li>
                <li>
                  Đập đổ kế hoạch <strong>NARVARRE</strong>
                </li>
                <li>
                  Bắt sống <strong>DE CASTRIES</strong> và toàn bộ quân Pháp
                  chạy trốn
                </li>
              </ul>
            </h1>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 space-y-8 bg-gradient-to-t  via-transparent to-transparent p-8">
          <div className="absolute top-32  bg-[#F6F1EE]/80 pr-20 pl-14 py-5 w-[50%] h-[80%] rounded-md">
            <h1 className="text-2xl font-bold">01/05/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  17 giờ chiều, <strong>QUÂN TA</strong> tấn công vào cứ điểm{" "}
                  <strong>HỒNG CÚM</strong>, làm tê liệt cụm pháo{" "}
                  <strong>ĐỊCH</strong>
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">02/05/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  2 giờ sáng, <strong>TRUNG ĐOÀN 209</strong> tiêu diệt trung
                  tâm đề kháng <strong>DOMINIQUE</strong>
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">04/05/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  Tiêu diệt <strong>311A</strong>, <strong>ĐẠI ĐOÀN 308</strong>{" "}
                  tiếp tục đánh <strong>311B (HUGUETTE 4)</strong>
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">05/05/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  <strong>TRUNG ĐOÀN 174</strong> đặt gần 1 tấn bộc phá trong
                  đường hầm đồi <strong>A1</strong>
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">06/05/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  <strong>QUÂN TA</strong> tấn công vào đồi <strong>A1</strong>,{" "}
                  <strong>C2</strong>, cứ điểm <strong>506</strong>,{" "}
                  <strong>BẮC MƯỜNG THANH</strong>, cứ điểm <strong>310</strong>
                  , <strong>TÂY MƯỜNG THANH</strong>
                </li>
                <li>
                  Tiêu diệt <strong>506 (ELIANE 10)</strong>, chiếm cứ điểm{" "}
                  <strong>311 (HUGAETTE F)</strong>
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">07/05/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  17 giờ 30 phút, bắt sống <strong>DE CASTRIES</strong> và toàn
                  bộ cơ quan tham mưu của hắn
                </li>
                <li>
                  <strong>QUÂN TA</strong> tiếp tục truy kích tới 24 giờ, bắt
                  sống được toàn bộ quân <strong>ĐỊCH</strong>
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
