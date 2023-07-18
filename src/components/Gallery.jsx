import { ambience,food,service } from "../assets"

const Gallery = () => {
  return (
    <div id="Gallery" className="bg-[#F5F5F5]">
        <div className="max-w-[1360px] p-10 mx-auto grid md:grid-cols-3 md:gap-x-[5%] gap-9">   
            <div className="rounded-lg shadow-md hover:scale-105 duration-500 ">
                <img src={ambience} alt="ambience" className="rounded-t-lg"/>
                <div className="flex flex-col gap-[5%] sm:mt-4 sm:pt-5 items-center px-4">
                    <h1 className="text-black text-4xl font-bold">Ambience</h1>
                    <p className="p-2 text-black text-center sm:text-xl text-lg">Immerse yourself in our enchanting ambiance, where warm lighting, stylish decor, and captivating music converge, creating a dining experience that transports you to a realm of culinary delight and unforgettable moments.</p>
                </div>
            </div>
            <div className="rounded-lg shadow-md hover:scale-105 duration-500">
                <img src={service} alt="service" className="rounded-t-lg w-full object-contain"/>
                <div className="flex flex-col gap-[5%] sm:mt-4 sm:pt-5 items-center px-4">
                    <h1 className="text-black text-4xl font-bold">Service</h1>
                    <p className="p-2 text-black text-center sm:text-xl text-lg">Our dedicated team of attentive and knowledgeable staff is committed to providing exceptional service, ensuring your dining experience is nothing short of extraordinary. With genuine warmth, attention to detail, and a passion for hospitality, we strive to create cherished memories with every guest we serve.</p>
                </div>
            </div>
            <div className="rounded-lg shadow-md hover:scale-105 duration-500">
                <img src={food} alt="ambience" className="rounded-t-lg"/>
                <div className="flex flex-col gap-[5%] sm:mt-4 sm:pt-5 items-center px-4">
                    <h1 className="text-black text-4xl font-bold">Food</h1>
                    <p className="p-2 text-black text-center sm:text-xl text-lg">Savor the exquisite flavors and artfully crafted dishes that define our culinary creations. From farm-fresh ingredients to culinary mastery, our passionate chefs take pride in delivering exceptional gastronomic experiences that tantalize your taste buds and leave you craving for more.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Gallery