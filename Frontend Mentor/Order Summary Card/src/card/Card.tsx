import hero from '../assets/illustration-hero.svg'
import musicLogo from '../assets/icon-music.svg'
import './Card.css'
const Card = () => {
  return (
    <>
    <div
      className='
      bg-cover bg-center bg-no-repeat
      flex flex-col justify-center items-center h-screen bg-pale-blue'>
      <div className=" z-10
        container border h-mobile w-mobile m-auto bg-white
        rounded-3xl">
          <section><img className='rounded-t-3xl' src={hero}/></section>

          <section className='
            h-44 flex flex-col justify-evenly items-center'>
            <h1 className='text-2xl pt-5 font-semibold mb-2'>Order Summary</h1>
            <p className='text-desaturated-blue subtitle text-center 
              font-medium'>
              You can now listen to millions of songs, audiobooks, 
              and podcasts on any device anywhere you like!
            </p>
          </section>

          <section className='flex justify-around 
            items-center h-24 mx-6 my-4 rounded-2xl bg-very-pale-blue'>
            <div className='flex justify-evenly items-center 
               w-52'>
              <img className='h-14' src={musicLogo}/>
              <div>
                <p className='font-semibold'>Annual Plan</p>
                <p className='text-desaturated-blue'>$59.99/year</p>  
              </div>
            </div>
            
            <div className=''>
              <a href='#' className='
                text-sm font-semibold hover:text-indigo-500 text-midnight-blue'>
                  Change
              </a>
            </div>        
          </section>
          <section className='
           mx-6 h-32 flex flex-col place-content-evenly'>
            <button className='
              border border-midnight-blue hover:bg-indigo-500 hover:border-indigo-500 bg-midnight-blue text-white h-14 rounded-xl
             font-semibold btn-shadow'>
              Proceed to Payment
            </button>
            <button className='
              bg-inherit text-slate-500 h-14 rounded-xl
              font-semibold hover:text-slate-700'>
              Cancel Order
            </button>
          </section>
          
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className='underline text-blue-400' href="https://github.com/jobearry">Jobearry</a>.
      </div>
    </div>
    </>
  )
}

export default Card