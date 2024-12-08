import Image from "next/image";
import background from "../../assets/images/background.png"; // Image for the left side of the slide
import LeftImage from "../../assets/images/history_context/071953.jpg"; // Image for the left side of the slide
import RightImage from "../../assets/images/history_context/12-quan-phap-nhay-du.jpg"; // Image for the left side of the slide

export default function SlidePage3() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image on the Left */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      {/* Main Title */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 w-full">
        <div className="flex items-center justify-center w-full">
          <div className="text-5xl font-bold  text-yellow-500 text-right relative w-[50%] pr-2 font-sans">
            BỐI CẢNH
            <span
              className="block mt-1 h-1 bg-black absolute right-0"
              style={{ width: "20%" }}
            ></span>
          </div>

          <div className="text-5xl font-bold  text-left  text-black relative w-[50%] pl-2 font-sans">
            LỊCH SỬ
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
          <Image
            src={LeftImage} // Path relative to the public folder
            alt="Background"
            layout="fill"
            objectFit="cover" // Ensure the image covers the area
            quality={100}
            priority
          />

          {/* Overlay Div at the bottom of the image */}
          <div className="absolute bottom-0 right-0 w-[90%] p-6 bg-gradient-to-t  via-transparent to-transparent">
            <div className="text-white text-lg font-light bg-[#BC6A34]/80 bg-opacity-70 p-6 rounded-md mt-4 ">
              <div className="font-bold text-3xl text-[#F7BB03]">
                {" "}
                20/11/1953
              </div>
              <ul className=" space-y-2 text-white text-2xl">
                <li>
                  BỘ CHỈ HUY QUÂN VIỄN CHINH PHÁP ĐÃ CHO QUÂN NHẢY DÙ CHIẾM ĐIỆN
                  BIÊN PHỦ
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 space-y-8 bg-gradient-to-t from-black via-transparent to-transparent p-8">
          {/* Contexts with bullet points */}
          <div className="  relative top-0  w-full  z-10 shadow-xl rounded-2xl overflow-hidden ">
            <Image
              src={RightImage}
              alt="Small Slide 1"
              layout="responsive"
              width={100}
              height={100}
              className="object-cover w-[20%] transition-transform rounded-md duration-300 group-hover:scale-105"
            />
          </div>

          <div className="text-[#F7BB03] text-lg font-light bg-[#BC6A34]/60 bg-opacity-70 p-6 rounded-md space-y-4">
            <div className="font-bold text-xl">
              CỤC DIỆN CHIẾN SỰ CÓ MỘT SỰ BIẾN CHUYỂN MỚI
            </div>
            <ul className=" space-y-2 text-white">
              <li>
                Vào thời điểm các cuộc tiến công Đông - Xuân của ta chuẩn bị bắt
                đầu và liên tiếp giành thắng lợi
              </li>
            </ul>
          </div>

          <div className="text-[#F7BB03] text-lg font-light bg-[#BC6A34]/60 bg-opacity-70 p-6 rounded-md  space-y-4">
            <div className="font-bold text-xl">
              ĐỊCH PHÁT HIỆN SỰ DI CHUYỂN CỦA MỘT BỘ PHẬN CHỦ LỰC TA LÊN HƯỚNG
              TÂY BẮC
            </div>
            <ul className="space-y-2 text-white">
              <li>
                Địch quyết định dùng một bộ phận lực lượng cơ động, nhảy dù đánh
                chiếm Điện Biên Phủ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
