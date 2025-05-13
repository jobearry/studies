type CountryCard = {
  CountryName: string
  Population: number
  Region: string
  Capital: string
  Flag: string

  //styles
  imgStyle?: string
  contentStyle?: string
}
export const Card = ({CountryName, Population, Region, Capital, Flag}: CountryCard) => {
  return (
    <div className="h-[27.5rem] shadow shadow-gray-300 bg-white
      dark:bg-[#2b3742] dark:shadow-[#1d2832] rounded-md">
      <div>
        <img src={Flag} 
          className={`w-full h-auto ${CountryName === "Nepal" ? 
            "object-contain" : "object-cover"} aspect-[3/2] rounded-md`} 
          alt={`Flag of ${CountryName}`} />
      </div>
      <div className="mx-8 mt-10 grid grid-cols-1 gap-5">
        <p className="text-xl font-bold">{CountryName}</p>
        <div className="grid grid-cols-1 gap-1">
          <p>
            <span className="font-bold">Population: </span>
            {Population}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {Region}
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            {Capital}
          </p>
        </div>
      </div>
    </div>
  )
}