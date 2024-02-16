"use client"

import About from '@/components/Detail/About'
import Experience from '@/components/Detail/Experience'
import Sidebar from '@/components/Detail/Sidebar'
import Skills from '@/components/Detail/Skills'
import React from 'react'

const Detail = ({searchParams}) => {
    console.log(searchParams.name)
  return (
   <>
   
   
     


<aside  className="sm:absolute top-20 left-0 z-0 h-screen w-full sm:w-64  " >
   <div className="h-full px-3 py-4 overflow-y-hidden bg-gray-50 dark:bg-gray-800">
     <Sidebar props={searchParams}/>
   </div>
</aside>

<div className="p-4   h-full sm:h-screen sm:overflow-y-scroll sm:ml-64 ">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <h1 className='text-3xl text-indigo-500 '>About</h1>
    <div className="h-1 w-20 bg-black rounded"></div>
    <About/> 
    
    <h1 className='text-3xl text-indigo-500 mt-10 '>Skills</h1>
    <div className="h-1 w-20 bg-black rounded"></div>
    <Skills/>

    <h1 className='text-3xl text-indigo-500 mt-10 '>Experience</h1>
    <div className="h-1 w-20 bg-black rounded"></div>
    <Experience/>




      
   </div>
</div>

   

 
   </>
  )
}

export default Detail;
