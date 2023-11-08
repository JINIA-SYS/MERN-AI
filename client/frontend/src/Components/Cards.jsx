"use client"
//Import Section
import React from 'react'
import { download } from "../assets"
import { filedownloader } from "../utils"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Code Section
const Cards = ({ _id, name, Images, prompts }) => {
  const download_click = (_id, Images) => { return filedownloader(_id, Images) }
  const notify = () => { return toast("Image is Downloading....") }
  return (
    <>

      <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
        <img className='w-full h-auto object-cover rounded-xl' src={Images} alt={prompts} />
        <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md '>
          <p className='text-white  text-sm overflow-y-autoprompt'>{prompts}</p>
          <div className='mt-5 flex justify-between items-center gap-2 '>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full object-cover bg-sky-600 flex justify-center items-center text-white text-xs text-bold '>
                {name[0]}
              </div>
              <p className='text-xs text-bold text-white text-center'>{name}</p>
            </div>
            <div>

              <button type='button' onClick={() => { return [download_click(_id, Images)] }} className='w-12 h-12 rounded-full border-green-600  bg-green-600 ' >
                <img src={download} alt="download"  className='object-contain'/> </button>
              {/* <ToastContainer /> */}

            </div>

          </div>
        </div>


      </div>
    </>
  )
}








//Export Section
export default Cards