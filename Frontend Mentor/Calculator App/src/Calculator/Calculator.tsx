import { Controls } from "./controls/Controls"
import { Menu } from "./menu/Menu"
import { Display } from "./screen/Display"

interface CalculatorProps {
  initTheme:(theme:string) => void
}

export const Calculator: React.FC<CalculatorProps> = ({initTheme}) => {
  return (
    <section className="
    contrast:bg-contrast-main2
    light:bg-light-main
    purple:bg-purple-main ">
        <Menu initTheme={initTheme}></Menu>
        <Display></Display>
        <Controls></Controls>
    </section>
  )
}