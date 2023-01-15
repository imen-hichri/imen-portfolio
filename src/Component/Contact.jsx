import React from 'react'
import { FaWhatsapp,  FaSearchLocation} from 'react-icons/fa'
import{ HiOutlineMail } from "react-icons/hi";



const Contact = () => {
    const links = [
        { 
            id: 1,
            child: (
                <>
                 <FaWhatsapp size={30} />
                </>
                  ),
             
                href: "+216-56-127-964"
        
            },
        
                { 
                    id: 3,
                    child: (
                        <>
                         <HiOutlineMail size={30}/>
                        </>
                          ),
                     
                        href: "imenhichri95@gmail.com"
                       
                    },
                    { 
                        id: 4,
                        child: (
                            <>
                             <  FaSearchLocation size={30}/>
                            </>
                              ),
                         
                            href: "Ben arouss tunisie",
                        },
                
       
    ]
  return (
    <div name="contacter"  className="w-full h-screen bg-gradient-to-b to-gray-800 from-black text-white">
        <div className= "max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-2xl font-bold inline border-b-4 border-gray-500">Contact</p>
            </div>
            {
                links.map(({ id, child, href }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded  ">
                <br/>
             {child}
             <br/>
             {href}
             </div>
              ))}
            
        </div>
    </div>
  )
}

export default Contact