import { northIndia,southIndia,mexican,Italian,chinese,beverages } from "../assets"
import Box from "./Box"

const Cuisines = () => {
  return (
    <div id="Cuisines" className="bg-black">
        <h1 className="text-center pt-5 mb-2 text-[#00df9a] font-bold text-5xl">Tasty Cuisines We Offer</h1>
        <div className="max-w-[1360px] py-8 px-7 mx-auto grid md:grid-cols-3 md:grid-rows-2 md:gap-x-[5%] gap-9 ">
          <Box name = "North India" image = {northIndia} />
          <Box name = "South India" image = {southIndia} />
          <Box name = "Mexican" image = {mexican} />
          <Box name = "Italian" image = {Italian} />
          <Box name = "Chinese" image = {chinese} />
          <Box name = "Beverages" image = {beverages} />
        </div>
    </div>
  )
}
export default Cuisines