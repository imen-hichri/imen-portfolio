import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { BsFillPersonLinesFill} from "react-icons/bs";

const Linkssocial = () => {
    const links = [
        { 
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={30} />
                </>
                  ),
             
                href: 'https://www.linkedin.com/in/imen-hichri1995/',
              
            },
        
            { 
              id: 2,
              child: (
                  <>
                  Github <FaGithub size={30}/>
                  </>
                    ),
               
                  href: 'https://github.com/imen-hichri',
              
              },
               
                   
                    { 
                        id: 3,
                        child: (
                            <>
                            Resume <BsFillPersonLinesFill size={30}/>
                            </>
                              ),
                         
                            href: '/Imen_Hichri.pdf',
                            download: true,
                        },
                       
       
    ]
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
     <ul>
      {
        links.map(({ id, child, href,  download }) => (
<li 
key={id}
eslint disable next line 
className= "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md  bg-gray-500 "  
      
    >
            <a
             href={href} 
            className="flex justify-between items-center w-full text-white"
             Download={download}
             target="-blank"
             rel ="noreferrer noopener"
             >
            {child}   
        </a>
        </li>
        ))}
        
     </ul>
    </div>
  )
}

export default Linkssocial