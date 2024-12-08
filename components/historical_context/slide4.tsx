import Image from "next/image";
import background from "../../assets/images/background.png"; // Image for the left side of the slide
import LeftImage from "../../assets/images/history_context/06-12-1953.jpg"; // Image for the left side of the slide
import img_slide4_1 from "../../assets/images/history_context/img_slide4_1.jpg";
import img_slide4_2 from "../../assets/images/history_context/img_slide4_2.jpg";
export default function SlidePage4() {
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
          <div className="flex-1 relative flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-[80%] z-10 shadow-xl rounded-2xl overflow-hidden group">
              <Image
                src={img_slide4_1}
                alt="Small Slide 1"
                layout="responsive"
                width={300}
                height={100}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#BC6A34]/80 py-6 px-8 backdrop-blur-sm">
                <h2 className="text-[#F7BB03] text-2xl font-bold mb-2">
                  BỘ CHÍNH TRỊ NHẬN ĐỊNH
                </h2>
                <p className="text-white text-lg font-light">
                  Điện Biên Phủ là tập đoàn cứ điểm mạnh nhưng chỗ yếu cơ bản
                  của địch là bị cô lập
                </p>
              </div>
            </div>

            <div className="absolute top-[50%] w-[80%] z-0 shadow-xl rounded-2xl overflow-hidden group">
              <Image
                src={img_slide4_2}
                alt="Small Slide 2"
                layout="responsive"
                width={500}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#BC6A34]/80 py-6 px-8 backdrop-blur-sm">
                <h2 className="text-[#F7BB03] text-2xl font-bold mb-2">
                  BẮT ĐẦU CHIẾN DỊCH ĐIỆN BIÊN PHỦ LỊCH SỬ
                </h2>
                <p className="text-white text-lg font-light">
                  Bộ chính trị chọn Điện Biên Phủ làm điểm quyết chiến chiến
                  lược và bắt đầu chiến dịch Điện Biên Phủ lịch sử
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
