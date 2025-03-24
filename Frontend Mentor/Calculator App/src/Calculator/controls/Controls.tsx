export const Controls = () => {
  // const nums = Object.keys(Array.from({length:18}))
  const nums = [
    "7","8","9","DEL",
    "4","5","6","+",
    "1","2","3","-",
    ".","0","/","x",
    "RESET","="
  ]
  console.log("🚀 ~ Controls ~ nums:", nums)
  return (
    <section className="
    contrast:bg-contrast-secondary
    light:bg-light-toggle
    purple:bg-purple-toggle 
      grid grid-cols-4 place-items-center mx-10 mb-7 gap-3 p-4 w-[302px] lg:w-[425px] h-[388px] 
      rounded-xl">
      {nums.map((x,index) => 
        index === 16 || index === 17? 
          index !== 17?
          <div className="
          contrast:bg-violet-key2
            light:bg-green-key2 
          purple:bg-purple-key2  cursor-pointer col-span-2 w-full text-[2rem] rounded-md h-14">
            <p className="
            contrast:bg-violet-key contrast:hover:bg-[#6B1480]
            light:bg-green-key light:hover:bg-[#7bb6be]
            purple:bg-purple-key purple:hover:bg-[#8290b6] flex justify-center place-items-center h-[calc(100%-5px)] w-full 
            text-white text-lg rounded-md font-bold">
              {x}
            </p>
          </div>:
          <div className="
          contrast:bg-cyan-key2
          light:bg-orange-key2
          purple:bg-red-key2 cursor-pointer col-span-2 w-full text-[2rem] rounded-md h-14">
            <p className="
            contrast:text-black contrast:bg-cyan-key contrast:hover:bg-cyan-200
            light:bg-orange-key light:text-white light:hover:bg-[#FC8114]
            purple:bg-red-key purple:text-white purple:hover:bg-[#FA4C05] flex justify-center place-items-center h-[calc(100%-5px)] w-full 
             text-lg rounded-md font-bold">
              {x}
            </p>
          </div>:
        x === "DEL"?
        <div className="
          contrast:bg-violet-key2
        light:bg-green-key2
        purple:bg-purple-key2 cursor-pointer flex w-full text-[2rem] rounded-md h-16">
          <p className="
          contrast:bg-violet-key contrast:hover:bg-[#6B1480]
          light:bg-green-key light:hover:bg-[#7bb6be]
          purple:bg-purple-key purple:hover:bg-[#8290b6] flex justify-center place-items-center h-[calc(100%-5px)] w-full 
           text-white text-lg rounded-md font-bold">
            {x}
          </p>
        </div> :
        <div className="
        contrast:bg-contrast-key2
        light:bg-light-key2
        purple:bg-gray-key2 cursor-pointer w-full rounded-md h-16">
          <p className="
          contrast:bg-contrast-key contrast:text-[#ffe53d] contrast:hover:bg-violet-700
          light:bg-light-key light:hover:bg-[#f1f0ed]
          purple:bg-gray-key purple:hover:bg-[#f1f0ed] flex justify-center place-items-center h-[calc(100%-5px)] w-full 
            text-[1.75rem] rounded-md font-bold">
            {x}
          </p>
        </div>

      )}
    </section>
  )
}

