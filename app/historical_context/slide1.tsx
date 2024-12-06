/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import biengioi from "../../assets/images/history_context/BacHochiaochiendichBiengioi.jpg";
import bgImage from "../../assets/images/history_context/bg.jpg";
import thuDongImage from "../../assets/images/history_context/thu_dong.jpg";

export default function SlidePage() {
  return (
    <div className="flex h-screen bg-gray-100 gap-8 p-8">
      {/* Ảnh lớn bên trái */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative w-full max-w-2xl">
          <Image
            src={bgImage}
            alt="Large Slide"
            layout="responsive"
            width={1000}
            height={600}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <h2 className="text-white text-4xl font-extrabold">Ảnh Lớn</h2>
          </div>
        </div>
      </div>

      {/* 2 ảnh nhỏ bên phải */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        {/* Ảnh nhỏ 1 */}
        <div className="relative w-full max-w-lg">
          <Image
            src={thuDongImage}
            alt="Small Slide 1"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <h2 className="text-white text-2xl font-semibold">Ảnh Nhỏ 1</h2>
          </div>
        </div>

        {/* Ảnh nhỏ 2 */}
        <div className="relative w-full max-w-lg mt-6">
          <Image
            src={biengioi}
            alt="Small Slide 2"
            layout="responsive"
            width={500}
            height={300}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <h2 className="text-white text-2xl font-semibold">Ảnh Nhỏ 2</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
