import Image from "next/image"
import { useState, useEffect } from 'react'
import ReactIcon from '../components/SkillIconsSvg/React-Icon' 
import MongoJsIcon from './SkillIconsSvg/MongoDB-Icon'
import TailwindCssIcon from '../components/SkillIconsSvg/TailwindCss-Icon'

export default function(){

    const [projects, setProjects] = useState({
        ensemble: {
            name: 'Ensemble',
            visual: {
                image: '/assets/projects/Ensemble1.PNG',
                alt: 'Ensemble Picture'
            },
            skills: [<ReactIcon/>, <MongoJsIcon />, <TailwindCssIcon />],
            description: 'Ensemble is a digital closet that allows you to upload pictures of your clothes, categorize them into sections, and edit or delete them.'
        },
        bugOut: {
            name: 'Bug Out',
            visual: {
                image:'/assets/projects/bugOut1.PNG',
                alt: 'Bug Out Picture'
            },
            skills: [<ReactIcon/>, <MongoJsIcon />, <TailwindCssIcon />],
            description: 'BugOut is a bug management system that allows users to easily submit, track, and resolve issues, with team commentary and different permission levels for managers and members.'
        },
        meetAHero: {
            name: 'Meet a Hero',
            visual: {
                image:'/assets/projects/superHero1.png',
                alt: 'Meet a Hero Picture'
            },
            skills: ['add'],
            description: 'Meet a Hero is a website where you can create, view, and comment on hero teams built to fight evil.'
        },
        matchingGame: {
            name: 'Matching Game',
            visual: {
                image:'/assets/projects/superHero1.png',
                alt: 'Matching Game Picture'
            },
            skills: ['add'],
            description: "The Matching Game is a one player game where you try to match numbers together until they are all matched. But it's not as easy as it sounds because you are playing against time."
        }

    })
    return (
        <>
            <div className="m-5 max-h-fit border-2 border-white p-3 text-center">
                <h2 >{projects.ensemble.name}</h2>
            <img src={projects.ensemble.visual.image} alt={projects.ensemble.visual.alt} className="w-48 h-48 m-auto"/>
                <div className="flex justify-around items-center">
                    {projects.ensemble.skills.map(skill => (skill))}
                </div>
                <p className="text-center font-serif font-normal m-3 text-sm">{projects.ensemble.description}</p>
            </div>
        </>
    )
}