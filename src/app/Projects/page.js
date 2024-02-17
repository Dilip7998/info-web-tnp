'use client'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {

    // useEffect(() => {
    //     AOS.init({
    //          duration: 800,
    //          once: false,
    //          offset:200
    //        })
    //  }, [])
    const projects=[
        {
            name:"Project1",
            sponser:"microsoft.png",
            status:false
        },
        {
            name:"Project2",
            sponser:"facebook.png",
            status:true
        },
        {
            name:"Project3",
            sponser:"tata.jpg",
            status:true
        }, 
        {
            name:"Project4",
            sponser:"microsoft.png",
            status:true
        },
            {
            name:"Project5",
            sponser:"facebook.png",
            status:false
        },
        {
            name:"Project6 sdvbshdlvshdv dsavhjcdgfvn  vfj ejk qw ewwcvadjcvcyauvcqyfveypfvpewfv shdv h",
            sponser:"microsoft.png",
            status:false
        },
        {
            name:"Project7",
            sponser:"facebookt.png",
            status:true
        }, 
        {
            name:"Project8",
            sponser:"download.png",
            status:true
        }

] 


  return (
    <>
    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" >
    <div data-aos="fade-up" className='flex flex-wrap text-1xl justify-around sm:text-3xl text-indigo-800 list-none'>
        <li className='sm:w-1/2'>
        <h1 className="sm:text-$xl text-3xl font-medium title-font mb-2 text-gray-900 " >Projects</h1>
        <hr className="h-1 w-28 bg-indigo-500 rounded "></hr>
        </li>
        
        <div className='flex justify-evenly sm:w-1/3 '>
        <li className=' mr-2 sm:w-1/2'>
        <h1 className="sm:text-$xl text-3xl font-medium title-font mb-2 text-gray-900 " >Status</h1>
        <hr className="h-1 w-28 bg-indigo-500 rounded "></hr>
       
        </li>
        <li>
        <h1 className="sm:text-$xl text-3xl font-medium title-font mb-2 text-gray-900 " >Sponser</h1>
        <hr className="h-1 w-28 bg-indigo-500 rounded "></hr>
       
        </li>
        </div>
    </div>
        </div>

    

    {projects?projects.map(({name,status,sponser})=>
     <div key={name} data-aos="fade-right" className="p-4 py-6 mx-3 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" >
        <div className='flex flex-wrap text-1xl justify-around sm:text-xl text-black list-none'>
        <li className='sm:w-1/2'>{name}</li>
        
        <div className='flex justify-evenly sm:w-1/3 '>
        <li className=' m-2 sm:w-1/2'>{status?(<p className="text-yellow-400">Ongoing</p>):(<p className="text-blue-700" >Completed</p>)}</li>
        <li>
            <img src={sponser} width={70} height={70} alt="" className="object-contain" />
        </li>
        </div>
    </div>
     
   </div>
    
    ):(<div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </div>)}
 
    </>
  )
}

export default page
