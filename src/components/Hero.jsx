import { hero } from "../assets"

const Hero = () => {
  return (
    <div id="home" className="">
        <img className="w-full h-[91.8vh] z-[0]" src={hero} alt=""/>
        <div className="w-full h-[91.8vh] z-[1] bg-black/50 absolute top-[80px] flex flex-col justify-center items-center">
        <h1 className="text-white lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold m-4">Welcome to the Best Restro-Bar in Town.</h1>
        <p className="text-white lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]  mx-4">Savor. Sip. Socialize. Elevate Your Nights with Our Exquisite Flavors.</p>
        <button className="text-white border-4 border-white mt-5 px-6 rounded-xl text-3xl hover:bg-gradient-to-br hover:from-green-800 hover:to-green-400 hover:scale-110 duration-500">Book a Table Now</button>
        </div>
    </div>
  )
}
export default Hero