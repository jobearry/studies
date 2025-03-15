// import viteLogo from '/favicon-32x32.png'
import './App.css'
import Body from './body/Body'
import Footer from './footer/Footer'

function App() {
  return (
    <>
      <div className='flex flex-col justify-between place-items-center'>
        <Body></Body>
        <Footer></Footer>
      </div>  
    </>
  )
}

export default App
