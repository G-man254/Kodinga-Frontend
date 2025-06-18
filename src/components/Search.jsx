import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <main className="relative mt-[10px] transition-all duration-[0.5s]">
      <input
        placeholder="Enter car brand name"
        className="p-[10px] text-white font-bold lg:w-[400px] rounded-[10px] z-0 bg-[#030f0f]"
        type="text"
      />
      <div className="bg-white rounded-[10px] absolute z-10 p-[10px] right-[5px] top-1/10 -tranlate-y-1/2">
        <FiSearch />
      </div>
    </main>
  );
}
