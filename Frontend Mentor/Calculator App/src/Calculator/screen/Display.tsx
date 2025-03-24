export const Display = () => {
  return (
    <section className="
    contrast:bg-contrast-secondary
    light:bg-light-screen
    purple:bg-purple-screen rounded-xl mx-10 mb-6 w-[302px] lg:w-[425px] h-[85px] 
      grid place-items-center ">
      <input
        className="lg:w-[380px] w-[260px] h-12 text-end font-bold text-[2.25rem] 
        contrast:text-[#ffe53d]
        purple:text-white
           focus:outline-0" 
        type="text" value={"399,981"} />
    </section>
  )
}