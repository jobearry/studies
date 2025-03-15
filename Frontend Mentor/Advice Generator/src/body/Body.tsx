import divider_m from '../assets/pattern-divider-mobile.svg'
import dice from '../assets/icon-dice.svg'
import './Body.css'
import { useState } from 'react'

/* eslint-disable */
interface Advice {
  slip: {
    advice: string
    id: number
  }
}
const Body = () => {

  const [data, setData] = useState<Advice>()

  let random: number = Math.floor(Math.random() * 224)
  const generateAdvice = () => {
    fetch(`https://api.adviceslip.com/advice/${random}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))

    // return data?.slip
  }
  
  return (
    <section className="rounded-lg flex card-bg
      flex-col justify-between place-items-center 
      md:w-3/6 w-5/6">
        <p className="font-manrope text-xs font-semibold tracking-widest
         text-green-300 my-5">
          ADVICE #{data !== undefined? data?.slip.id: "00"}
        </p>
        <p className="font-bold text-2xl mx-8 m-5">
          {data !== undefined? data?.slip.advice: "Click the dice to generate advice"}
        </p>
        
        <img className='my-5 mb-0' src={divider_m} alt="" />
        <button onClick={() => {
          // Generate random number between 0 and 224
          generateAdvice()
        }}
          className='bg-green-300 btn-generate relative -bottom-8 
          btn-dice border-none focus:outline-none'>
          <img src={dice} alt="dice" />
        </button>
    </section>
  )
}

export default Body