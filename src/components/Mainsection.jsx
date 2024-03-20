import Image from "next/image";
import Link from "next/link";
import React from "react";
import Commonbtn from "./Commonbtn";
export const metadata = {
  title: "Home page",
  description: "Generated by create next app",
};
const Mainsection = () => {
  const data = [
    {
      img: "/images/behind-8.png",
      id: 1,
      name: "Designer",
      city: "Delhi",
    },
    {
      img: "/images/behind-8.png",
      id: 2,
      name: "Developer",
      city: "Hisar",
    },
    {
      img: "/images/behind-8.png",
      id: 3,
      name: "Designer",
      city: "Delhi",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-5">
        <Link href="/About" className="text-[30px] font-bold uppercase">
          show about
        </Link>

        <div className="flex">
          {data.map((obj, i) => (
            <div
              key={i}
              className=" p-5 rounded-lg bg-black border-[2px] max-w-[300px] mt-5"
            >
              <Image src={obj.img} width={400} height={400} alt="hello" />
              <div className=" flex items-center justify-center gap-3">
                <p className=" text-white">{obj.id}</p>
                <p className=" text-white">{obj.name}</p>
              </div>
              <p className=" text-white text-center">{obj.city}</p>
            </div>
          ))}
        </div>
        <Commonbtn text="view" />
      </div>
    </div>
  );
};

export default Mainsection;