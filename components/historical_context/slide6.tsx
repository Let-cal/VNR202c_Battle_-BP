import Image from "next/image";
import background from "../../assets/images/history_context/bgSlide6.jpg";

export default function SlidePage6() {
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
            <h1 className="text-2xl font-bold">ĐỢT TẤN CÔNG THỨ HAI</h1>
            <h1 className="text-1xl">30/03/1954 - 30/04/1954</h1>
          </div>

          <div className="absolute top-80 ml-[76px] bg-[#F6F1EE]/80 pr-20 pl-14 py-5 w-[80%] rounded-md">
            <h1 className="text-2xl font-bold">KẾT QUẢ</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  Loại khỏi vòng <strong>CHIẾN ĐẤU</strong> khoảng 5.000 tên{" "}
                  <strong>ĐỊCH</strong>
                </li>
                <li>
                  Khống chế được phần lớn <strong>ĐIỂM CAO</strong> phía Đông
                </li>
                <li>
                  Kiểm soát <strong>SÂN BAY MƯỜNG THANH</strong>, hạn chế tiếp
                  viện của <strong>ĐỊCH</strong>
                </li>
              </ul>
            </h1>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 space-y-8 bg-gradient-to-t via-transparent to-transparent p-8">
          <div className="absolute top-32 bg-[#F6F1EE]/80 pr-20 pl-14 py-5 w-[50%] h-[60%] rounded-md">
            <h1 className="text-2xl font-bold">30/03/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  18 giờ, <strong>QUÂN TA</strong> mở màn đợt tiến công thứ hai
                </li>
                <li>
                  Tiêu diệt hoàn toàn 3 đồn số 1, 2, 4, làm chủ trên mặt đồn số
                  5
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">31/03/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  Đánh bại các cuộc phản kích của <strong>ĐỊCH</strong> lên đồn
                  số 2
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">11/04/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-2">
                <li>
                  <strong>TRUNG ĐOÀN 98</strong> tiến công{" "}
                  <strong>CỨ ĐIỂM C1</strong> lần thứ hai
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">14/04/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  <strong>QUÂN TA</strong> tấn công{" "}
                  <strong>SÂN BAY MƯỜNG THANH</strong>, tiêu diệt một đại đội
                  của
                  <strong>ĐỊCH</strong>
                </li>
              </ul>
            </h1>
            <h1 className="text-2xl font-bold pt-2">22/04/1954</h1>
            <h1 className="text-1xl">
              <ul className="list-disc pl-5 pt-4">
                <li>
                  <strong>QUÂN TA</strong> bất ngờ tấn công{" "}
                  <strong>VỊ TRÍ 206</strong> (<strong>HUGUETTE 1</strong>) và
                  tiêu diệt hoàn toàn vị trí này
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
