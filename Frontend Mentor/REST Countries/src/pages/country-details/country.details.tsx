import { Link, useLocation } from "react-router-dom";
import { Country } from "../../models/country-model";

export const CountryDetails = () => {
  const location = useLocation() 
  console.log("🚀 ~ CountryDetails ~ location:", location)
  let data: Country = location.state as Country
  console.log(data)

  return (
    <section className="h-full flex flex-col justify-start">
      <div className="m-12 grid gap-10">
        <Link to={"/"}>
          <div className="h-[2.5rem] w-[10rem] grid place-items-center shadow shadow-gray-300 bg-white
          dark:bg-[#2b3742] dark:shadow-[#1d2832] cursor-pointer">
              <div className="w-[50%] flex items-center justify-around">
                <i className={`fa-solid fa-arrow-left`}></i>
                <button className="cursor-pointer">Back</button>
              </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-12 w-full md:grid-cols-2">
          <div className="">
            <img src={data.flags.png} alt={data.flags.alt} 
              className={`object-fit h-full w-full`}  />
          </div>
          <div className="h-fit">
              <div className="h-fit">
                <h3 className="text-xl font-bold">{data.name.common}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-start my-4">
                  <div className="h-full grid grid-cols-1 items-start gap-2">
                    <p><strong>Native Name: </strong>{data.name.nativeName.eng.official}</p>
                    <p><strong>Population: </strong>{data.population.toLocaleString()}</p>
                    <p><strong>Region: </strong>{data.region}</p>
                    <p><strong>Sub Region: </strong>{data.subregion}</p>
                    <p><strong>Capital: </strong>{data.capital}</p>
                  </div>

                  <div className="h-full grid grid-cols-1 gap-2 my-5 md:my-0">
                    <p><strong>Top Level Domain: </strong>{data.topLevelDomain}</p>
                    <p><strong>Currencies: </strong></p>
                    <p className="flex gap-2"><strong>Languages: </strong>{Object.values(data.languages).map( x => <span key={x}>{x}</span>)}</p>
                  </div>
                </div>
              </div>
              <div>
                <p><strong>Border Countries:</strong></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}