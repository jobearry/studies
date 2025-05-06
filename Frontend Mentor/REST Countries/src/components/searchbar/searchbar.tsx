import { useState } from "react";

export const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <div className="h-[3rem] flex justify-center place-items-center
    mx-6 my-8 shadow shadow-gray-300 bg-white
    dark:bg-[#2b3742] dark:shadow-[#1d2832] sm:min-w-[40%]
    ">
      <div className="w-20 h-full flex justify-center place-items-center">
        <i className="fa-solid fa-magnifying-glass "></i>
      </div>
      <div className="flex m-2  w-full">
        <input 
          className="w-full outline-0"
          type="text" id="" 
          value={text} 
          placeholder="Search for a country..."
          onChange={(e) => setText(e.target.value)}
          onClick={() => setText("")}/>
      </div>
    </div>
  )
}