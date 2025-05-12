import { Link, useLocation } from "react-router-dom";
import { Country } from "../../models/country-model";

export const CountryDetails = () => {  
  // const { countryName } = useParams<{ countryName: string }>();
  const location = useLocation() 
  let data: Country = location.state as Country
  console.log(data)

  return (
    <section className="h-[calc(100vh-4rem)] border flex flex-col justify-start items-start">
      <div className="m-12 grid gap-10">
        <div className="h-[2.5rem] w-[10rem] grid place-items-center shadow shadow-gray-300 bg-white
        dark:bg-[#2b3742] dark:shadow-[#1d2832]">
          <div className="w-[50%] flex items-center justify-around">
            <i className={`fa-solid fa-arrow-left`}></i>
            <Link to={"/"}>
              <button>Back</button>
            </Link>
          </div>
        </div>

        <div className="border flex w-full">
          <div className="border">
            <img src={data.flags.png} alt={data.flags.alt} 
              className={`aspect-[3/2]`}  />
          </div>
          <div>
              <div></div>
              <div>
                Border Countries:
                {/* {data.borders.map(x => 
                  <p>{x}</p>
                )} */}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}