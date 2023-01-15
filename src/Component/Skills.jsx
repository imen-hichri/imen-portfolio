import React from 'react';
import html from "../assest/Skills/html5.webp";
import bb from "../assest/Skills/bo.png";
import css3 from "../assest/Skills/css3.webp";
import js from "../assest/Skills/js.png";
import sql from "../assest/Skills/sqll.png";
import mysq from "../assest/Skills/mysq.png";
import off from "../assest/Skills/of.png";
import react from "../assest/Skills/Reacti.png";
import php from "../assest/Skills/phpp.png";
import tailwind from "../assest/Skills/tail.png";

const Skills = () => {
    const Technos = [
        {
            id: 1,
            src: html,
            title: 'html',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: bb,
            title: 'Bootstrap5',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: css3,
            title: 'CSS3',
            style: 'shadow-violet-500'
        },
        {
            id: 4,
            src: js,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: sql,
            title: 'SQL',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: mysq,
            title: 'MySql',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: off,
            title: 'Microsoft Office',
            style: 'shadow-orange-500'
        },
        {
            id: 8,
            src: react,
            title: 'react',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: php,
            title: 'php',
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            src: tailwind,
            title: 'tailwind css',
            style: 'shadow-sky'
        },
    ]
  return (
    <div name="Compétances" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen" >
        <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center w-full h-full text-white">
            <div>
            <p  className="text-2xl font-bold inline border-b-4 border-gray-500">Compétances</p>
            <p className="py-6"> Ce sont les technologies avec lesquelles j’ai travaillé</p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-8 px-10 sm:px-0">
        {
            Technos.map(({id, src, title, style}) => (
        
            <div key={id} className= "shadow-md shadow-gray-500 rounded-lg  py-2 duration-200 hover:scale-95 "
            >
            <img src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
        </div>
            
            ))
}
       
          
        </div>
    </div>
    </div>
  );
}

export default Skills;