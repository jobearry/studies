import { useEffect, useRef, useState } from "react";
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
}

export const Body = ({ initTheme }: BodyProps) => {
  const [data, setData] = useState<Country[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const originalDataRef = useRef<Country[]>([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const result = await fetchAll<Country[]>("data.json");
        originalDataRef.current = result;
        setData(result);

        // Pre-calc regions once
        const regionList = [...new Set(result.map(x => x.region))];
        setRegions(regionList);
      } catch (err) {
        console.error(err);
      }
    };

    getAllData();
  }, []);

  const handleSearch = (query: string) => {
    const q = query.trim().toLowerCase();

    if (!q) {
      setData(originalDataRef.current);
      return;
    }

    const filtered = originalDataRef.current.filter(country =>
      country.name.common.toLowerCase().includes(q)
    );

    setData(filtered);
  };

  const handleFilter = (filter: string) => {
    if (!filter) {
      setData(originalDataRef.current);
      return;
    }

    const filtered = originalDataRef.current.filter(
      item => item.region.toLowerCase() === filter.toLowerCase()
    );

    setData(filtered);
  };

  return (
    <section
      className="h-auto bg-[#fafafa] dark:bg-[#1f2d36]"
    >
      <Navbar initTheme={initTheme} />
      
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <div className="flex flex-col sm:flex-row sm:justify-between md:mx-10">
                <SearchBar onSearch={handleSearch} />
                <Filter 
                  onFilter={handleFilter}
                  regions={regions}
                />
              </div>

              <div className="grid p-[4rem] grid-cols-full 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30"
              >
                {data.map(country => (
                  <Link 
                    to={`/${country.name.common}`} 
                    key={country.cca3} 
                    state={country}
                  >
                    <Card
                      Flag={country.flags.png}
                      CountryName={country.name.common}
                      Population={country.population}
                      Region={country.region}
                      Capital={country.capital?.[0] ?? "N/A"}
                    />
                  </Link>
                ))}
              </div>
            </>
          }
        />

        <Route 
          path="/:countryName" 
          element={<CountryDetails />} 
        />
      </Routes>
    </section>
  );
};
