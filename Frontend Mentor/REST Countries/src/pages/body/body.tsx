import { useEffect, useState } from "react";
import { Filter } from "../../components/filter/filter";
import { Navbar } from "../../components/navbar/navbar";
import { SearchBar } from "../../components/searchbar/searchbar";
import { fetchAll } from "../../services/countries.service";
import { Country } from "../../models/country-model";
import { Card } from "../../components/card/card";
import { Link, Route, Routes } from "react-router-dom";
import { CountryDetails } from "../country-details/country.details";

interface BodyProps {
  initTheme: (theme: string) => void;
  route?: string; // Optional prop for viewing country details
}

export const Body = ({ initTheme }: BodyProps) => {
  const [data, setData] = useState<Country[] | null>(null);
  const [originalData, setOriginalData] = useState<Country[] | null>(null);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const result = await fetchAll<Country[]>("all");
        console.log("🚀 ~ getAllData ~ result:", result)
        setData(result);
        setOriginalData(result)
      } catch (err) {
        console.log(err)
      } 
    };

    getAllData();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setData(originalData); // Reset to original data if input is empty
    } else {
      const filtered = [...originalData!].filter((item) =>{
        console.log(item.name)
        return item.name.common.toLowerCase().includes(query.toLowerCase())
      });

      if(filtered.length > 0){
        setData(filtered);
      }
    }
  };

  const handleFilter = (filter: string) => {
    const filtered = [...originalData!].filter((item: Country) => {
      return item.region.toLowerCase().includes(filter.toLowerCase())
    })
    setData(filtered)
  }
  return (
    <section
      className="h-auto bg-[#fafafa]
      dark:bg-[#1f2d36]"
    >
      <Navbar initTheme={initTheme} />
      
      <Routes>
        {/* refactor the root page into a component */}
        <Route path={`/`} element={
          <>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between md:mx-10">
                <SearchBar onSearch={handleSearch}/>
                <Filter onFilter={handleFilter} regions={[...new Set(originalData?.map(x => x.region)!)]}/>
              </div>
            </div>
            <div className="grid p-[4rem]
              grid-cols-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
              gap-30">
              {data?.map((country) => (
                  <Link to={`/${country.name.common}`} key={country.cca3} state={country}>
                    <Card // Use a unique key for each item

                      Flag={country.flags.png}
                      CountryName={country.name.common} // Access the 'common' property of the name object
                      Population={country.population}
                      Region={country.region}
                      Capital={country.capital} // Handle cases where capital might be undefined or an array
                    />
                  </Link>
              ))}
            </div>
          </>}>
        </Route>

        <Route path={`/:countryName`} element={<CountryDetails />}></Route>
      </Routes>
    </section>
  );
};