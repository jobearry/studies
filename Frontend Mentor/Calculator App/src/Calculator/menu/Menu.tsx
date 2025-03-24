import { useState } from "react";

interface MenuProps{
  initTheme:(theme: string) => void;
}
export const Menu: React.FC<MenuProps> = ({initTheme}) => {
  const [selectedValue, setSelectedValue] = useState<string>('purple');
  const changeTheme = (value:string): void => {
    initTheme(value)
    setSelectedValue(value)
  }
  return (
    <section className="
    contrast:text-[#ffe53d]
    light:text-[hsl(60, 10%, 19%)]
    purple:text-white mx-10 my-8 h-full flex justify-between">
      <h1 className="text-[2rem] font-bold place-self-center">
        calc
      </h1>
      <div className="grid grid-cols-2 gap-5 place-items-end text-sm">
        <p className="text-xs font-semibold tracking-widest">THEME</p>
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-3 my-2 text-center font-semibold gap-2 place-items-center">
            <p className="text-xs">1</p>
            <p className="text-xs">2</p>
            <p className="text-xs">3</p>
          </div>
          <div className="
          contrast:bg-contrast-secondary
            light:bg-light-toggle
          purple:bg-purple-toggle grid grid-cols-3 gap-1 rounded-full py-0.5 px-1">
            <label className="flex items-center cursor-pointer">
              <input className="hidden peer" checked={selectedValue === "purple"} name="theme" type="radio" onChange={() => changeTheme("purple")} />
              <span className="
              purple:peer-checked:border-red-key purple:peer-checked:bg-red-key purple:hover:bg-[#FA4C05]
                rounded-full w-[1rem] h-[1rem] m-[2px]">
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input className="hidden peer" checked={selectedValue === "light"} name="theme" type="radio" onChange={() => changeTheme("light")} />
              <span className="
              light:peer-checked:border-orange-key light:peer-checked:bg-orange-key light:hover:bg-[#FC8114]
                rounded-full w-[1rem] h-[1rem] m-[2px]">
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input className="hidden peer" checked={selectedValue === "contrast"} name="theme" type="radio" onChange={() => changeTheme("contrast")} />
              <span className="
              contrast:peer-checked:border-cyan-key contrast:peer-checked:bg-cyan-key contrast:hover:bg-cyan-300
                rounded-full w-[1rem] h-[1rem] m-[2px]">
              </span>
            </label>
          </div>
          {/* <div className="grid place-items-center">
          </div> */}
        </div>
      </div>
    </section>
  )
}