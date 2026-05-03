import Button from "../components/home/Button"
import Navbar from "../layouts/Navbar"

const Home = () => {
  return (
    <>
    <Navbar/>
    <article className="relative flex flex-col justify-center items-center min-h-screen w-full bg-[url('/home_background.png')] bg-cover ">
        <section className='flex flex-col gap-20 md:gap-5 lg:gap-30 justify-center items-center px-10 md:px-20 lg:px-50'>
            <div className='flex flex-col justify-center items-center gap-6 md:mt-10 lg:mt-0'>
                <p className='text-blue-950 text-[20px] lg:text-4xl text-center md:px-10'>
                    The Emerson Agency: Personalized Financial Consultancy and Client Management System
                </p>
                <p className='uppercase text-[13px] md:text-1xl  text-center text-gray-800/70'>
                    Consulting - Financial assistance - Insurance
                </p>
            </div>
            <Button/>
        </section>
    </article>
    </>
    
  )
}

export default Home
