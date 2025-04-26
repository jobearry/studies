import { useEffect, useState } from "react";
import { Filter } from "../../components/filter/filter";
import { Navbar } from "../../components/navbar/navbar";
import { SearchBar } from "../../components/searchbar/searchbar";
import { fetchAll } from "../../services/countries.service";
import { Country } from "../../models/country-model";
import { Card } from "../../components/card/card";

interface BodyProps {
  initTheme: (theme: string) => void;
  route?: string; // Optional prop for viewing country details
}



export const Body = ({ initTheme }: BodyProps) => {
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const result = await fetchAll<Country[]>("all");
        console.log("🚀 ~ getAllData ~ result:", result)
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getAllData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section
      className="h-full bg-[#fafafa]
      dark:bg-[#1f2d36]"
    >
      <Navbar initTheme={initTheme} />
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between md:mx-10">
          <SearchBar />
          <Filter regions={[...new Set(data?.map(x => x.region)!)]}/>
        </div>
      </div>
      <div>
      <div className="grid m-[4rem] 
        grid-cols-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-30">
        {data?.map((country) => (
          <Card // Use a unique key for each item
            key={country.cca3}
            Flag={country.flags.png} 
            CountryName={country.name.common} // Access the 'common' property of the name object
            Population={country.population} 
            Region={country.region} 
            Capital={country.capital} // Handle cases where capital might be undefined or an array
          />
        ))}
      </div>
      </div>
    </section>
  );
};