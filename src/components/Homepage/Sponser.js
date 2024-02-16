import React from 'react'

const Sponser = () => {
    const sponser=[{
        name:"download.png",
      },{
        name:"facebook.png",
      },
      {name:"hotstar.jpg"
    
      },
     { name:"microsoft.png"},
     {
      name:"next.svg"
     },
     {
      name:"download.png",
    },{
      name:"facebook.png",
    },
    {name:"hotstar.jpg"
    
    },
    { name:"microsoft.png"},
    {
    name:"next.svg"
    }
    ]
  return (
    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
>
    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
   {sponser?sponser.map(({name})=>
    <li>
      <img src={name} alt="name" height={100} width={100} />
    </li>
   ):(<p></p>)}
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
    {sponser?sponser.map(({name})=>
    <li>
      <img src={name} alt="name" height={100} width={100} />
    </li>
   ):(<p></p>)}
    </ul>             
</div>
  )
}

export default Sponser
