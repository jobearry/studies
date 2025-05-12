import { useState } from "react"

interface FilterProps {
  regions: string[]
  onFilter: (query: string) => void;
}

export const Filter = ({regions, onFilter}: FilterProps) => {
  const [toggleDropdown, setDropdown] = useState<boolean>(false);
  let dropdown = toggleDropdown? 'block':'hidden'
  const handleFilter = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onFilter(e.currentTarget.innerText)
  };
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
        dark:bg-[#2b3742] dark:shadow-[#1d2832] absolute top-[3rem] flex flex-col justify-between`}> 
        {regions.map(region => 
          <button className="px-5 h-full text-start hover:bg-[#4c6c80] cursor-pointer" 
            onClick={handleFilter}  
            key={region} >
              {region}
          </button>
        )}
      </div>
    </div>
  )
}