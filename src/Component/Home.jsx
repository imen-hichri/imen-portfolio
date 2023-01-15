import React from 'react'
import Imennn from '../image/imen.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="Accueil" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-4xl font-bold text-white"> Jeune diplômée en Mastère de recherche 
              en système d'information et web 
            </h2>

<p className="text-gray-500 py-4 max-w-md">Je suis passionné par le web
   et les nouvelles techniques,
    j'ai la chance de pouvoir développer mes compétences dans le cadre de mon PFE.
     Actuellement je suis à la recherche d'opportunité d'embauche.</p>
        <div>
            <Link to="portfolio"
            smooth duration={500} className=" group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                Portfolio
                <span className="group-hover:rotate-90 duration-300" >
                  <MdOutlineKeyboardArrowRight size={30} className="ml-l"/>
                  </span>
            </Link>
        </div>
        </div>
        <div>
            <img src={Imennn} alt="my profile" className="rounded-2xl max-auto w-2/3 md:w-full" />
        </div>
        </div>
    </div>
  )
}

export default Home