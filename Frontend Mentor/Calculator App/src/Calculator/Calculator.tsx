import { useState } from "react"
import { Controls } from "./controls/Controls"
import { Menu } from "./menu/Menu"
import { Display } from "./screen/Display"

interface CalculatorProps {
  initTheme:(theme:string) => void
}

export const Calculator: React.FC<CalculatorProps> = ({initTheme}) => {
  // eslint-disable-next-line prefer-const
  let [displayText, setDisplayText] = useState("399,981");
  const operators = ["+", "-", "x", "/"]

  const updateDisplay = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const input = (event.target as HTMLButtonElement).innerText;
    let newText = "";

    if(displayText === "399,981"){
      displayText = "0"
    }

    if(input === "DEL"){
      if(displayText.length === 1 || displayText === "0"){
        newText = "0"
      }else{
        newText = `${displayText.slice(0,-1)}`
      }
    }else if(input === "RESET"){
      newText = "0"
    }else{
      if(displayText === "0"){
        displayText = ""
      }
      newText = displayText + input;
    }
    
    if(operators.includes(input)){
      const opFound = [...newText].filter(x => operators.includes(x))
      console.log("🚀 ~ updateDisplay ~ opFound:", opFound)
      if(opFound.length > 1){
        if(opFound[0] !== opFound[1]){
          newText = `${calculate(displayText, opFound[0])}${opFound[1]}`

        }else{
          newText = `${calculate(displayText, input)}${input}`
        }
      }else{
       if(displayText === ""){
        newText = "0" + input
       }
      }
    }

    if(input === "="){
      const opFound = [...newText].filter(x => operators.includes(x))
      newText = `${calculate(displayText, opFound[0])}`
    }



    setDisplayText(newText);
  };

  const calculate = (displayValue: string, operator: string) =>{
    console.log("🚀 ~ calculate ~ displayValue:", displayValue)
    const nums: string[] = displayValue.split(operator)
    console.log("🚀 ~ calculate ~ nums:", nums)
    switch(operator){
      case '+':{
        return Number(nums[0]) + Number(nums[1])
      }
      case '-':{
        return Number(nums[0]) - Number(nums[1])
      }
      case 'x':{
        return Number(nums[0]) * Number(nums[1])
      }
      case '/':{
        return Number(nums[0]) / Number(nums[1])
      }
    }
  }
  return (
    <section className="
    contrast:bg-contrast-main2
    light:bg-light-main
    purple:bg-purple-main ">
        <Menu initTheme={initTheme}></Menu>
        <Display textValue={displayText}></Display>
        <Controls onUpdateDisplay={updateDisplay}></Controls>
    </section>
  )
}