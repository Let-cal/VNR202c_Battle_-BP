/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import background from "../../assets/images/background.png";
import biengioi from "../../assets/images/history_context/BacHochiaochiendichBiengioi.jpg";
import bgImage from "../../assets/images/history_context/bg.jpg";
import thuDongImage from "../../assets/images/history_context/thu_dong.jpg";

export default function SlidePage1() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
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

      {/* phần 1 */}
      <div className="relative z-10 flex h-full px-28 pt-16 pb-16">
        <div className="flex-1  flex items-center justify-center relative pr-8">
          <div className="relative w-full max-w-2xl shadow-2xl rounded-2xl overflow-hidden group">
            <Image
              src={bgImage}
              alt="Large Slide"
              layout="responsive"
              width={900}
              height={600}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#BC6A34]/60 py-6 px-8 backdrop-blur-sm">
              <h2 className="text-white text-3xl font-bold mb-2">1946-1953</h2>
              <p className="text-white text-xl font-light">
                Quân và dân ta đã lần lượt đánh bại các chiến lược quân sự của
                Pháp
              </p>
            </div>
          </div>
        </div>
        {/* phần 2 */}
        <div className="flex-1 relative flex flex-col justify-center">
          <div className="absolute top-3 right-0 w-[80%] z-10 shadow-xl rounded-2xl overflow-hidden group">
            <Image
              src={thuDongImage}
              alt="Small Slide 1"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#BC6A34]/60 py-3 px-8 backdrop-blur-sm">
              <h2 className="text-white text-2xl font-bold mb-2">
                Chiến Dịch Việt Bắc
              </h2>
              <p className="text-white text-lg font-light">
                Thu - Đông năm 1947 là đòn quyết định làm thất bại hoàn toàn
                chiến lược đánh nhanh, thắng nhanh của địch, bảo vệ an toàn căn
                cứ địa cách mạng và đầu não kháng chiến
              </p>
            </div>
          </div>

          <div className="absolute top-[55%] right-0 w-[85%] z-0 shadow-xl rounded-2xl overflow-hidden group">
            <Image
              src={biengioi}
              alt="Small Slide 2"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#BC6A34]/60 py-6 px-8 backdrop-blur-sm">
              <h2 className="text-white text-2xl font-bold mb-2">
                Chiến Thắng Biên Giới
              </h2>
              <p className="text-white text-lg font-light">
                Năm 1950 - Một bước chuyển cơ bản cho cuộc kháng chiến bước vào
                giai đoạn mới, giai đoạn ta nắm quyền chủ động chiến lược
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
