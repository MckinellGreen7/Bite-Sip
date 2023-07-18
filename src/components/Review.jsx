import { BsFillPersonFill} from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const Review = () => {
  return (
    <div id="Review" className="bg-black/10 pt-7 pb-10">
        <div className="flex items-center justify-center">
        <h1 className="text-center pt-5 mb-2 text-gray-900 font-bold text-5xl">Write us a Review</h1>
        </div>
        <div className="max-w-[1360px] p-5 mx-auto grid md:grid-rows-3 md:grid-cols-2 grid-rows-4 gap-4">
          <div>
            <input type="text" placeholder="Enter Name" className='w-full m-2 h-[40px] text-xl rounded-lg p-4 shadow-md shadow-black'/>
          </div>
          <div>
            <input type="email" placeholder='Enter Email' className='w-full m-2 h-[40px] rounded-lg text-xl p-4 shadow-md shadow-black' />
          </div>
          <div className='col-span-2 row-span-2'>
            <textarea className='col-span-2 row-span-2 w-full h-full m-2 rounded-lg p-4 text-xl shadow-md shadow-black' placeholder='Enter Message'></textarea>
          </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className="border-4 border-black mt-5 px-6 rounded-xl text-3xl hover:bg-black hover:text-white hover:scale-110 duration-500">Submit</button>
        </div>
    </div>
  )
}
export default Review;