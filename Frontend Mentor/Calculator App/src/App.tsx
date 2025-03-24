import './index.css'
import './App.css'
import { Calculator } from './Calculator/Calculator'
import { useState } from 'react';

const App: React.FC = () => {
  const [appClass, setTheme] = useState("purple");
  const initTheme = (theme: string): void => {
    setTheme(theme)
  }
  return (
    <div  className={`${appClass}
      contrast:bg-contrast-main2 
      light:bg-light-main 
      purple:bg-purple-main
      flex h-screen justify-center place-items-center
      font-spartan`}>
      <Calculator initTheme={initTheme}></Calculator>
    </div>
  )
}

export default App
