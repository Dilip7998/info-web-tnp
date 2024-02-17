import React from 'react'

const Sidebar = ({props}) => {
  return (
   <>
   <div className='rounded-lg'>
   <img src={props.img} alt="image"  className='rounded-full object-cover mx-auto w-56 h-56 sm:h-56' />
   </div>
   {/* <div className='flex flex-col w-full  mx auto border-2 border-black'> */}
   <ul className="space-y-2 mt-5 font-medium flex-col align-middle items-center justify-center mx-auto w-56 sm:w-full sm:ml-1 overflow-hidden">
         <li >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src="username.svg" height={38} width={38} alt="" />
               <span className="ms-3  text-2xl font-semibold">{props.name}</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img src="scholar.svg" height={38} width={38} alt="" />
         
               <span className="flex-1 text-xl ms-3 whitespace-nowrap">{props.scholar}</span>
                   </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img src="project.svg" height={38} width={38} alt="" />
         
               <span className="flex-1 text-xl ms-3 whitespace-nowrap no-scrollbar overflow-x-scroll">Working on:{props.project}</span>
                   </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img src="contact.svg" height={38} width={38} alt="" />
         
               <span className="flex-1 text-xl ms-3 whitespace-nowrap">{props.contact}</span>
                   </a>
         </li>
         <li>
            <a href="#" className="flex items-center justify-around p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img src="twitter.svg" height={38} width={38} alt="" />
            <img src="github.svg" height={38} width={38} alt="" />
            <img src="linkedin.svg" height={38} width={38} alt="" />
            <img src="email.svg" height={38} width={38} alt="" />
         
                    </a>
         </li>
         <li className='flex1  '>
         <button type="button" className="text-white  mx-auto bg-gray-700  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Download CV</button>

         
         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Hire Me</button>

         </li>
         </ul>
   {/* </div> */}
   </>
  )
}

export default Sidebar
