

"use client"
//Import Section
import React from 'react'
import { useState, useCallback, useContext, useEffect } from 'react';
import { Loader, Cards, Form } from "../Components"

import axios, { all } from 'axios';

//Code Section

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) { return data.map((image) => { return <Cards key={image._id}{...image} /> }) }
    return (<h2 className='mt-5 font-bold text-[#6449ff] text-2xl uppercase'>{title} </h2>)

}

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [searchedResults, setSearchedResults] = useState(null)
    const [searchTimeout, setSearchTimeout] = useState(null)

    const handleChange = (e) => {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value);
        setSearchTimeout(setTimeout(() => {
            const searchResults = allPosts.filter((item) => {
                return item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompts.toLowerCase().includes(searchText.toLowerCase())
            })
            setSearchedResults(searchResults)
        }, 500))

    }



    useEffect(() => {
        setSearchText("")
        const fetchPosts = async () => {
            setLoading(true);
            try {
                // const options={headers:{'Content-Type':"application/json"},name:name, prompts:prompts, Images:Images}
                const response = await axios.get("http://localhost:8800/api/v1/cloudinary")

                const data = await response.data.data.reverse()
                console.log(data)
                setAllPosts(data);

            } catch (error) {
                alert(error.message)

            } finally { setLoading(false) }
        }
        fetchPosts();
    }, [])


    return (
        <>
            <section className='max-w-7xl mx-auto'>
                <div>
                    <h1 className='font-extrabold text-[#222328] text-[32px]'>IMAGE COLLECTION </h1>
                    <p className='mt-2 text-[#222328] text-[20px]  max-w-[800px]'>Browse through the collection of AI generated Images using DALLE OPENAI API</p>
                </div>
                <div className='mt-16'> <Form labelname="SEARCH AI-POSTS" type="text" name="text" placeholder="Enter the AI-Image Name" value={searchText} handleChange={handleChange} /></div>
                <div className='mt-16'>
                    {loading ?
                        (<div className='flex justify-center'><Loader /></div>)
                        : (
                            <>
                                {searchText && (<h2 className='font-medium text-[#666e75] text-xl mb-3 '>Showing Results for <span className='text-[#222328]'>{searchText}</span></h2>)}
                                <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 '>
                                    {searchText ? (<RenderCards data={searchedResults} title="No Search Found" />) : (<RenderCards data={allPosts} title="No Posts Found" />)}
                                </div>
                            </>)}
                </div>


            </section>
        </>
    )
}
//Export Section
export default Home