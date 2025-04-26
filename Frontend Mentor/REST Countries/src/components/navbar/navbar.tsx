import React, { useState } from "react"

interface NavProps {
  initTheme: (theme:string) => void
}

export const Navbar: React.FC<NavProps> = ({initTheme}) => {
  const [currentTheme, setTheme] = useState<string>("dark");
  const [iconType, setIconType] = useState<string>("solid")
  const changeTheme = (value: string): void => {
    if(value === ""){
      initTheme("dark")
      setTheme("dark")
      setIconType("solid")
    }else{
      initTheme("")
      setTheme("")
      setIconType("regular")
    }
  }
  return (
    <section className="flex justify-between place-items-center h-[4rem] shadow shadow-gray-300
    bg-white 
      md:justify-between 
      dark:bg-[#2b3742] dark:shadow-[#1d2832]
      ">
      <div className="font-extrabold md:m-16 m-6">Where in the world?</div>
      <div className=" w-28
        md:m-16 m-6
        ">
        <button className="flex justify-evenly place-items-baseline w-full cursor-pointer"
          onClick={() => changeTheme(currentTheme)}>
          <i className={`fa-${iconType} fa-moon`}></i>
          <p>Dark Mode</p>
        </button>
      </div>
    </section>
  )
}