import { useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void;
}
export const SearchBar = ({onSearch}: SearchBarProps) => {
  const [input, setInput] = useState<string>("")

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // Call parent function with current input
  };
  return (
    <div className="h-[3rem] flex justify-center place-items-center
    mx-6 my-8 shadow shadow-gray-300 bg-white rounded-md
    dark:bg-[#2b3742] dark:shadow-[#1d2832] sm:min-w-[40%]
    ">
      <div className="w-20 h-full flex justify-center place-items-center">
        <i className="fa-solid fa-magnifying-glass "></i>
      </div>
      <div className="flex m-2  w-full">
        <input 
          className="w-full outline-0"
          type="text" id="" 
          value={input} 
          placeholder="Search for a country..."
          onChange={handleChange}/>
      </div>
    </div>
  )
}