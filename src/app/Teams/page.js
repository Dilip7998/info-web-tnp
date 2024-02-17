'use client'
import Link from 'next/link';

import 'animate.css';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Teams = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
             offset:200
           })
     }, [])
    const memebers=[{
      id:1,
        img:"hotstar.jpg",
        name:"dilip kumar",
        project:"sjkbvhjv",
        scholar:"Google Scholar",
        contact:"+91878974545"    },
        {
          id:2,
            img:"microsoft.png",
            name:"dilip kumar",
            project:"sjkbvhjv",
            scholar:"Google Scholar",
            contact:"+91878974241"    },
            {
              id:3,
                img:"download.png",
                name:"dilip kumar",
                project:"sjkbvhjv",
                scholar:"Google Scholar",
                contact:"+918789766475"    },
                {
                  id:4,
                    img:"facebook.png",
                    name:"dilip kumar",
                    project:"sjkbvhjv",
                    scholar:"Google Scholar",
                    contact:"+9187545742475"    },
                {
                  id:5,
                    img:"facebook.png",
                    name:"dilip kumar",
                    project:"sjkbvhjv",
                    scholar:"Google Scholar",
                    contact:"+918764742475"    },
                {id:6,
                    img:"facebook.png",
                    name:"dilip kumar",
                    project:"sjkbvhjv",
                    scholar:"Google Scholar",
                    contact:"+9187813242475"    },
    
            {
              id:7,
                img:"download.png",
                name:"dilip kumar",
                project:"sjkbvhjv",
                scholar:"Google Scholar",
                contact:"+9181359742475"    },
                {id:8,
                    img:"facebook.png",
                    name:"dilip kumar",
                    project:"sjkbvhjv",
                    scholar:"Google Scholar",
                    contact:"+91831239742475"    },
                {id:9,
                    img:"facebook.png",
                    name:"dilip kumar",
                    project:"sjkbvhjv",
                    scholar:"Google Scholar",
                    contact:"+9181339742475"    },
                {id:10,
                    img:"facebook.png",
                    name:"dilip kumar",
                    project:"sjkbvhjv",
                    scholar:"Google Scholar",
                    contact:"+918781342475"    },
    ];
   
  return (
    <>
   
   
    <div className=" p-5 bg-slate-100">
    <h1 className="sm:text-$xl text-3xl text-center font-medium title-font mb-2 text-gray-900 " data-aos="fade-up">Teams</h1>
        <hr className="h-1 w-40 bg-indigo-500 rounded text-center mx-auto"></hr>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 px-3  text-gray-900">Team Leaders</h1>
        <div className="h-1 w-20 mx-3 bg-indigo-500 rounded"></div>
        <div className='flex flex-col justify-center items-center lg:justify-around lg:flex-row'>
            

<div  data-aos="fade-right" className=" cursor-pointer flex box-content m-2 flex-col w-4/5 items-center bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-contain w-full h-32  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="facebook.png" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal w-4/5 sm:min-w-96 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dilip Kumar</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-1xl font-semibold'>Project:</span>mettalurgy</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Google Scholar</p>
        <span className='flex cursor-pointer'>
        <a className="text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-black" href='https://google.com'>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
        </span>
      
    </div>
    
</div>

<div data-aos="fade-left"  className="flex m-2 w-4/5  flex-col items-center bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-contain w-full h-32  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="facebook.png" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal w-4/5 sm:min-w-96">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dilip Kumar</h5>
       
       
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-1xl font-semibold'>Project:</span>mettalurgy</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Google Scholar</p>
        <span className='flex cursor-pointer'>
        <a className="text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-black" href='https://google.com'>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
        </span>
      
    </div>
    
</div>
  </div>

  <div>
   
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-5">
      <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">Our Members</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
       </div>
    <div className="flex flex-wrap -m-4  justify-evenly">
          {memebers?memebers.map(({id,img,name,scholar,project,contact})=>
   
    
      
      <div key={id} data-aos="fade-up" className="xl:w-1/5 w-4/5 md:w-1/2 p-4 m-2  bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
        <div className=" p-6 rounded-lg">
          <Link href={{
            pathname:"/Detail",
            query:{
                name,project,scholar,img,contact
            }
          }}>
          <img className="h-40 rounded w-full object-contain object-center mb-6" src={img} alt="image"/>
          </Link>
          <h2 className="tracking-widest text-indigo-500 text-xl font-medium title-font mb-2">{name}</h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Project:<span className='text-gray-700 font-normal'>{project}</span></h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{scholar}</h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Contact: <span className='text-gray-700 font-normal'>{contact}</span></h2>
          <span className='flex'>
        <a className="text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-black" href='https://google.com'>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
        </span>
             </div>
      </div>
      ):(<p>No Members joined yet</p>)}
      </div>
    
  </div>
</section>
  </div>
   
    </div>
    </>
  )
} 

export default Teams;
