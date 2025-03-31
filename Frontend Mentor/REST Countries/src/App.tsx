import { useState } from 'react'
import './App.css'
import { Body } from './components/body/body'

function App() {
  const [currentTheme, setTheme] = useState("dark")
  const initTheme = (theme:string):void => {
    setTheme(theme)
  }
  return (
    <section className={`${currentTheme} font-nunito text-black
    dark:text-white dark:bg-[#1f2d36] bg-white` }>
      <Body initTheme={initTheme}></Body>
    </section>
  )
}

export default App
