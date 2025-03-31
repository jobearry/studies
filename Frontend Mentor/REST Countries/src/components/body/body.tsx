import { Filter } from "../filter/filter"
import { Navbar } from "../navbar/navbar"
import { SearchBar } from "../searchbar/searchbar"

interface BodyProps {
  initTheme: (theme:string) => void,
  route? :string //for viewing country details
}

export const Body: React.FC<BodyProps> = ({initTheme}) => {

  return (
    <section className="h-[100vh] bg-[#fafafa]
      dark:bg-[#1f2d36]
      ">
        <Navbar initTheme={initTheme}></Navbar>
        <SearchBar></SearchBar>
        <Filter></Filter>
    </section>
  )
}