import React from 'react';
import C1 from '../assest/Portfolio/C1.png';
import C2 from '../assest/Portfolio/C2.png';
import c4 from '../assest/Portfolio/c4.png';
import CC3 from '../assest/Portfolio/CC3.png';

const Portfolio = () => {
    const portfolios = [
        {
            id : 1,
            src: CC3
        },
        {
            id : 2,
            src: C2
        },
        {
            id : 3,
            src: C1
        },
       
        {
            id : 4,
            src: c4
        },
    ]
  return (
    <div name="portfolio"  className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
        <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p  className="text-2xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Regardez un peu mon travail ici </p>
            </div>
            <div  className="grid sm:grid-cols-1 md:grid-cols-4 gap-12 px-12 sm:px-0"
                        >

            {
            portfolios.map(({id, src}) => (
                
                    <div key={id}
                       
                         className="shadow-md shadow-gray-600 rounded-lg"
                        >

                            <img src={src} alt=""
                                className="rounded-md duration-200 hover:scale-150 " />
                            
                        </div>
                   
            
            ))}
             </div>
        </div>
    </div>
  );
}

export default Portfolio;