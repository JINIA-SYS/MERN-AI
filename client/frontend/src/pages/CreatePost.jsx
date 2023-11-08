
"use client"
//Import Section
import React from 'react'
import { useState, useCallback, useContext, useEffect } from 'react';
import { Loader, Form, Cards } from "../Components";
import { useNavigate } from 'react-router-dom';
import { preview } from "../assets"
import { Prompts } from "../utils"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




//Code Section 
const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompts: "", Images: '', })

  const [CreateImage, setCreateImage] = useState(false)
  const [loading, setLoading] = useState(false)
  const Generate_Image = async () => {
    if (form.prompts) {
      try {
        setCreateImage(true)
        const options = { headers: { 'Content-Type': 'application/json' }, prompts: form.prompts }
        const response = await axios.post("http://localhost:8800/api/v1/dalle", options)
        const data = await response
        console.log(data)
        setForm({ ...form, Images: `data:image/jpeg;base64,${data.data.Images[0].b64_json}` })
      }
      catch (error) { toast(error); }
      finally { setCreateImage(false) }
    }
    else { toast('Please provide the Prompt') }
  }

  // const notify = () => toast("Image has been submitted");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompts && form.Images) {
      setLoading(true)
      try {
        const options = { headers: { 'Content-Type': 'application/json' }, name: form.name, prompts: form.prompts, Images: form.Images, }
        const response = await axios.post("http://localhost:8800/api/v1/cloudinary", options)
        const data = await response
        console.log(data.URL)
        toast("Image has been Submitted")
        navigate("/")
      }
      catch (error) { toast(error.message) }
      finally { setLoading(false) }
    }
    else { alert('Please provide both Prompts and Images') }


  }



  const handleChange = (e) => { console.log(e.target.name); return setForm({ ...form, [e.target.name]: e.target.value }) }
  const handleSurpriseMe = () => { const randomPrompts = Prompts(form.prompts); setForm({ ...form, prompts: randomPrompts }) }

  return (
    <>
      <section className='max-w-7xl mx-auto'>
        <div>
          <h1 className='font-extrabold text-[#222328] text-[32px]'>CREATE IMAGES </h1>
          <p className='mt-2 text-[#222328] text-[20px]  max-w-[800px]'>Create the Random Prompts based Images using DALLE OPENAI API and share it with the community</p>
        </div>

        <form className='mt-16 max-w-3xl ' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5 '>
            <Form labelname="NAME" type="text" name="name" placeholder="Enter the Name" value={form.name} handleChange={handleChange} />
            <Form labelname="PROMPTS" type="text" name="prompts" placeholder="Two futuristic towers with a skybridge covered in lush foliage, digital art" value={form.prompts} handleChange={handleChange} isSurpriseMe handleSurpriseMe={handleSurpriseMe} />
            <div className='relative bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
              {form.Images ?
                (<img src={form.Images} alt={form.prompts} className='w-full h-full object-contain ' />) :
                (<img src={preview} alt="preview" className='w-3/4 h-3/4 object-contain opacity-40' />)}
              {CreateImage && (<div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] '><Loader /></div>)}

            </div>
          </div>
          <div className='mt-5 flex gap-5'>
            <button type='button' onClick={Generate_Image} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
              {CreateImage ? 'Creating...' : 'Create'}
            </button>
          </div>
          <div className='mt-10'>
            <p className='mt-2  text-[#666e75] text-[14px]'>Once the Image is Created, it is now available to share on the Portal</p>
            <button type='submit' className='text-white bg-purple-800 font-medium rounded-xl text-md w-full sm:w-auto px-4 py-3 text-center'>{loading ? 'Sharing....' : 'Share with the Community'}</button>
           
          </div>
        </form>
      </section>

    </>
  )
}




//Export Section
export default CreatePost