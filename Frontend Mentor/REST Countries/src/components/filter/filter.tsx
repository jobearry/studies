import { useState } from "react"


export const Filter = ({regions}: {regions: string[]}) => {
  const [toggleDropdown, setDropdown] = useState(false)
  console.log("🚀 ~ Filter ~ toggleDropdown:", toggleDropdown)
  let dropdown = toggleDropdown? 'block':'hidden'
  return (
    <div className="flex flex-col place-items-start relative
      mx-6 my-8 ">
      <div className="h-[3rem] flex justify-between place-items-center w-3xs shadow shadow-gray-300 bg-white
      dark:bg-[#2b3742] dark:shadow-[#1d2832]
      ">
        <button className="w-full cursor-pointer" onClick={() => setDropdown(!toggleDropdown)}>
          <span className="flex justify-between mx-6">
            Filter by Region
            <i className="mt-1 fa-solid fa-angle-down"></i>  
          </span>
        </button>
      </div>

      <div className={`${dropdown} h-[15rem] w-3xs shadow shadow-gray-300 bg-white mt-2
        dark:bg-[#2b3742] dark:shadow-[#1d2832] absolute top-[3rem]`}> 
        {regions.map(x => 
          <p className="mx-7 my-3">{x}</p>
        )}
      </div>
    </div>
  )
}