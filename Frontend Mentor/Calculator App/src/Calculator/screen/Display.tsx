import { useEffect, useRef } from "react";

interface DisplayProps {
  textValue: string;
}

export const Display = ({ textValue }: DisplayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [textValue]); // Runs every time `text` changes
  return (
    <section className="
    contrast:bg-contrast-secondary
    light:bg-light-screen
    purple:bg-purple-screen rounded-xl mx-10 mb-6 w-[302px] lg:w-[425px] h-[85px] 
      grid place-items-center ">
      <input id="display" ref={inputRef}
        className="lg:w-[380px] w-[260px] text-end h-12 font-bold text-[2.25rem] 
        contrast:text-[#ffe53d]
        purple:text-white
           focus:outline-0" 
        type="text" value={textValue} readOnly/>
    </section>
  )
}