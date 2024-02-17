import Link from 'next/link'
import React from 'react'

const Main = () => {
    
  return (
    <>
     <div className="flex flex-col lg:flex-row  p-1 bg-slate-300 ">
    <div className="w-full  lg:w-1/2 p-4"> 

<div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vision</h5>
  
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi expedita, inventore dicta ullam itaque rem eos voluptates quasi recusandae molestiae ratione eius, omnis cum laboriosam eaque! Blanditiis aspernatur ducimus velit architecto eius magnam aut quo impedit, doloribus, suscipit alias dignissimos tempora veritatis distinctio quam doloremque dolore quasi asperiores repellat nisi consequuntur. At officiis voluptatum pariatur magnam perspiciatis quae, assumenda corrupti aliquid illo sunt asperiores ipsum delectus? Rerum facilis delectus dolorum. Tempora temporibus veritatis perspiciatis ex voluptatem tempore esse autem, possimus reiciendis necessitatibus. Possimus 
    dignissimos quia laudantium numquam, vero facilis, explicabo ducimus culpa corporis libero iusto officia excepturi tempore dicta placeat voluptatem nostrum maiores labore dolore, enim sapiente vel quibusdam recusandae. Nemo excepturi adipisci sunt consectetur porro asperiores accusantium consequatur pariatur cumque tenetur, et ipsum impedit expedita in explicabo eos vitae nobis, unde dolor rerum officia eaque harum! Ducimus esse saepe veniam itaque error qui, et earum tempore, dolor laudantium fugit voluptas assumenda? Repudiandae voluptatem tempora adipisci saepe maiores temporibus expedita est quam beatae praesentium dicta ullam labore corrupti odio dolores ipsam fugiat animi, accusamus magni voluptate quis quisquam nesciunt iusto! Earum placeat dolorum a? Pariatur, sint ullam eius voluptate, temporibus ab quisquam quas eveniet, ut blanditiis quidem quos commodi dolorem. of 2021 so far, in reverse chronological order.</p>
    <Link href="Pages/About" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more 
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>k
</div>
 </div>
    <div className="w-full lg:w-1/2  p-4">
      <h1 className="text-3xl font-bold  text-black"> Projects</h1>
     
      </div>
      </div>
   
    </>
      
  )
}

export default Main
