import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main className="text-white">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url('/pexels-franco-monsalvo-252430633-16242030.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-4xl mb-[30px]">
          Car{" "}
          <span className="text-[45px] font-extrabold text-[#03624c]">
            rental
          </span>{" "}
          process has never been this easy
        </h1>
        <div className="">
          <h2 className="">Would you like to :</h2>
          <div className="flex items-center gap-[30px] mt-[30px]">
            <Link to={"/login"}>
              <button className="bg-white text-black p-[20px] w-[100px] font-extralight hover:bg-[#03624c] hover:border hover:border-white hover:text-white hover:transition-all hover:duration-[0.5s] duration-[0.4s] hover:cursor-pointer">
                Rent ?{" "}
              </button>
            </Link>
            <small>OR</small>
            <Link>
              <button className="bg-white text-black p-[20px] w-[100px] font-extralight hover:bg-[#03624c] hover:border hover:border-white hover:text-white hover:transition-all hover:duration-[0.5s] duration-[0.4s] hover:cursor-pointer">
                Enlist ?{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
