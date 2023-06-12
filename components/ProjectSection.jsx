import Image from "next/image"
import { useState, useEffect } from 'react'
import ReactIcon from './SkillIconsSvg/React-Icon' 
import MongoJsIcon from './SkillIconsSvg/MongoDB-Icon'
import TailwindCssIcon from './SkillIconsSvg/TailwindCss-Icon'

export default function(){

    const [projects, setProjects] = useState([
        {
            name: 'Ensemble',
            visual: {
                image: '/assets/projects/Ensemble1.PNG',
                alt: 'Ensemble Picture',
                width: 300,
                height: 200
            },
            skills: [<ReactIcon/>, <MongoJsIcon />, <TailwindCssIcon />],
            description: 'Ensemble is a digital closet that allows you to upload pictures of your clothes, categorize them into sections, and edit or delete them.',
            links: {
                repo:"https://github.com/ASelviyan/Ensemble-Client",
                live:"https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/login"
            }
        },
        {
            name: 'Bug Out',
            visual: {
                image:'/assets/projects/bugOut1.PNG',
                alt: 'Bug Out Picture',
                width: 300,
                height: 200
            },
            skills: [<ReactIcon/>, <MongoJsIcon />, <TailwindCssIcon />],
            description: 'BugOut is a bug management system that allows users to easily submit, track, and resolve issues, with team commentary and different permission levels for managers and members.',
            links: {
                repo:"https://github.com/ASelviyan/BugOut-Client",
                live:"http://bugout-p3.netlify.app"
            }
        },
        {
            name: 'Meet a Hero',
            visual: {
                image:'/assets/projects/superHero1.png',
                alt: 'Meet a Hero Picture',
                width: 300,
                height: 200
            },
            skills: ['add'],
            description: 'Meet a Hero is a website where you can create, view, and comment on hero teams built to fight evil.',
            links: {
                repo:"https://github.com/ASelviyan/Super-Hero",
                live:"https://super-hero-website.herokuapp.com/"
            }
        },
        {
            name: 'Matching Game',
            visual: {
                image:'/assets/projects/matchingGame1.png',
                alt: 'Matching Game Picture',
                width: 300,
                height: 200
            },
            skills: ['add'],
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
                    projects.map((project) =>  (
                            <div  key={project.id} className="grid items-center justify-items-center  bg-white m-5 max-h-fit border-4 w-[26rem] border-white p-6 text-center rounded-lg">
                                <h2 className="mb-4 text-[#4f0230]">{project.name}</h2>
                                <Image src={project.visual.image} alt={project.visual.alt} width={project.visual.width} height={project.visual.height} className="rounded-lg border-2 border-white" />
                                <div className="flex justify-around items-center text-white">
                                    {project.skills.map(skill => (skill))}
                                </div>
                                <p className="text-[#4f0230] text-center font-serif font-normal m-3 text-sm">{project.description}</p>
                                <div className="flex">
                                    <a href={project.links.repo} target="_blank" className="bg-gradient-to-r from-[#4f0230] via-[#ab0569] to-[#4f0230] m-2 px-6 py-2 rounded-full text-lg">Repo</a>
                                    <a href={project.links.live} target="_blank" className="bg-gradient-to-r from-[#ab0569] via-[#4f0230] to-[#ab0569] m-2 px-6 py-2 rounded-full text-lg">Live</a>
                                </div>
                            </div> 
                        ))
                }
        </>
    )
}