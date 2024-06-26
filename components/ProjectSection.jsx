import Image from "next/image"
import { useState, useEffect } from 'react'
import ReactIcon from './SkillIconsSvg/React-Icon' 
import MongoJsIcon from './SkillIconsSvg/MongoDB-Icon'
import TailwindCssIcon from './SkillIconsSvg/TailwindCss-Icon'
import HTMLIcon from './SkillIconsSvg/Html-Icon'
import JavaScriptIcon from './SkillIconsSvg/Javascript-Icon'
import CSSIcon from './SkillIconsSvg/Css-Icon'
import BootstrapCssIcon from './SkillIconsSvg/BootstrapCss-Icon'
import PostgreSqlIcon from './SkillIconsSvg/PostgreSql-Icon'


export default function ProjectSection(){

    const [projects, setProjects] = useState([
        {
            id:1,
            name: 'Ensemble',
            visual: {
                image: '/assets/projects/Ensemble1.PNG',
                alt: 'Ensemble Picture',
                width: 300,
                height: 250
            },
            skills: [<ReactIcon key={1}/>, <MongoJsIcon key={2}/>, <TailwindCssIcon key={3}/>],
            description: 'Ensemble is a digital closet that allows you to upload pictures of your clothes, categorize them into sections, and edit or delete them.',
            links: {
                repo:"https://github.com/ASelviyan/Ensemble-Client",
                live:"https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/login"
            }
        },
        {
            id:2,
            name: 'Bug Out',
            visual: {
                image:'/assets/projects/bugOut1.PNG',
                alt: 'Bug Out Picture',
                width: 300,
                height: 250
            },
            skills: [<ReactIcon key={1}/>, <MongoJsIcon key={2}/>, <TailwindCssIcon key={3}/>],
            description: 'BugOut is a bug management system that allows users to easily submit, track, and resolve issues, with team commentary and different permission levels for managers and members.',
            links: {
                repo:"https://github.com/ASelviyan/BugOut1-Client",
                live:"http://bugout-p3.netlify.app"
            }
        },
        {
            id:3,
            name: 'Meet a Hero',
            visual: {
                image:'/assets/projects/superHero1.png',
                alt: 'Meet a Hero Picture',
                width: 300,
                height: 250
            },
            skills: [<JavaScriptIcon key={1}/>, <BootstrapCssIcon key={2}/>, <PostgreSqlIcon key={3}/>],
            description: 'Meet a Hero is a website where you can create, view, and comment on hero teams built to fight evil.',
            links: {
                repo:"https://github.com/ASelviyan/Super-Hero",
                live:"https://super-hero-website.herokuapp.com/"
            }
        },
        {
            id:4, 
            name: 'Matching Game',
            visual: {
                image:'/assets/projects/matchingGame1.png',
                alt: 'Matching Game Picture',
                width: 300,
                height: 250
            },
            skills: [<HTMLIcon key={1}/>, <CSSIcon key={2}/>, <JavaScriptIcon key={3}/>],
            description: "The Matching Game is a one player game where you try to match numbers together until they are all matched. But it's not as easy as it sounds because you are playing against time.",
            links: {
                repo:"https://github.com/ASelviyan/Matching_Game",
                live:"https://aselviyan.github.io/Matching_Game/"
            }
        }

    ])
    return (
        <>

            { 
                 projects.map(project =>  (
                        <div  key={project.id} className="grid items-center justify-items-center bg-white m-5 h-[44rem] border-4 w-[26rem] border-white p-6 text-center rounded-lg drop-shadow-2xl">
                            <h2 className="mb-4 text-[#4f0230]">{project.name}</h2>
                            <div className="max-width:1320px;display:block">
                                <Image src={project.visual.image} alt={project.visual.alt} width={project.visual.width} height={project.visual.height} className="rounded-lg border-2 border-white m-full h-auto" />

                            </div>
                            <div className="flex justify-around items-center text-white mt-4">
                                {project.skills.map((skill, i) => (
                                    <div key={i}>{skill}</div> 
                                ))}
                            </div> 
                            <p className="text-[#4f0230] text-center font-serif font-normal m-3 text-sm">{project.description}</p>
                            <div className="flex">
                                <a href={project.links.repo} target="_blank" rel="noreferrer" className=" bg-[#4f0230]  hover:scale-125 hover:bg-green-600  m-2 px-6 py-2 rounded-full text-lg">Repo</a>
                                <a href={project.links.live} target="_blank" rel="noreferrer" className="bg-[#4f0230]  hover:scale-125 hover:bg-green-600  m-2 px-6 py-2 rounded-full text-lg">Live</a>
                            </div>
                        </div> 
                    ))

    //                 stroke-width="3%" stroke-linecap="round" stroke-linejoin="round" 
    //   "group-hover:stroke-white"  
            }
        </>
    )
}