import React from "react";
import Image from "next/image";
import Link from "next/link";
import Commonbtn from "@/components/Commonbtn";
export const metadata = {
  title: "About",
  description: "Generated by create next app",
};
const Page = () => {
  const data = [
    {
      img: "/images/behind-1.png",
      para1: "Naman",
      para2: "Radial code",
    },
    {
      img: "/images/behind-1.png",
      para1: "Naman",
      para2: "Radial code",
    },
    {
      img: "/images/behind-1.png",
      para1: "Naman",
      para2: "Radial code",
    },
  ];
  return (
    <div>
      <div className="flex flex-col  min-h-screen justify-center items-center">
        <Link
          href="/ "
          className="text-[30px]  rounded-[30px] bg-transparent border-[4px] border-solid border-black p-5 mb-5 uppercase font-bold"
        >
          Go to home -
        </Link>
        <div className="flex gap-4 ">
          {data.map((obj, i) => (
            <div key={i} className="bg-black rounded-lg p-4">
              <Image src={obj.img} width={400} height={400} alt="hello" />
              <div className="fs-xl flex flex-col items-center ">
                <p className="text-white text-xxl mt-3 fw-bold">{obj.para1}</p>
                <p className="text-white text-xxl fw-bold">{obj.para2}</p>
              </div>
            </div>
          ))}
        </div>
        <Commonbtn text="show" />
      </div>
    </div>
  );
};

export default Page;
