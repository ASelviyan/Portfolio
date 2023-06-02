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
            description: 'Ensemble is a digital closet that allows you to upload pictures of your clothes, categorize them into sections, and edit or delete them.'
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
            description: 'BugOut is a bug management system that allows users to easily submit, track, and resolve issues, with team commentary and different permission levels for managers and members.'
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
            description: 'Meet a Hero is a website where you can create, view, and comment on hero teams built to fight evil.'
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
            description: "The Matching Game is a one player game where you try to match numbers together until they are all matched. But it's not as easy as it sounds because you are playing against time."
        }

    ])
    return (
        <>
                { 
                    projects.map((project) =>  (
                            <div  key={project.id} className="bg-white m-5 max-h-fit border-4 w-[26rem] border-white p-6 text-center rounded-lg">
                                <h2 className="mb-4 text-[#4f0230]">{project.name}</h2>
                                <Image src={project.visual.image} alt={project.visual.alt} width={project.visual.width} height={project.visual.height} className="rounded-lg border-2 border-white" />
                                <div className="flex justify-around items-center text-white">
                                    {project.skills.map(skill => (skill))}
                                </div>
                                <p className="text-[#4f0230] text-center font-serif font-normal m-3 text-sm">{project.description}</p>
                            </div> 
                        ))
                }
        </>
    )
}