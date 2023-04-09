import Image from 'next/image'
import CssIcon from '../components/SkillIconsSvg/Css-Icon'
import HtmlIcon from '../components/SkillIconsSvg/Html-Icon'
import JavascriptIcon from '../components/SkillIconsSvg/Javascript-Icon'
import SqlIcon from '../components/SkillIconsSvg/Sql-Icon'
import ReactIcon from '../components/SkillIconsSvg/React-Icon'
import NextJsIcon from '../components/SkillIconsSvg/NextJs-Icon'
import NodeJsIcon from '../components/SkillIconsSvg/NodeJs-Icon'
import MongoJsIcon from '../components/SkillIconsSvg/MongoJs-Icon'
import PostgreSqlIcon from '../components/SkillIconsSvg/PostgreSql-Icon'
import BootstrapCssIcon from '../components/SkillIconsSvg/BootstrapCss-Icon'
import PythonIcon from '../components/SkillIconsSvg/Python-Icon'
import TailwindCssIcon from '../components/SkillIconsSvg/TailwindCss-Icon'
import JavaIcon from '../components/SkillIconsSvg/Java-Icon'


export default function Skills() {
    return (
        <>

            <h2 className='text-5xl'>My Abilities</h2>
            <div className='flex flex-wrap items-center justify-center' >
                <div className='m-5 z-0'>
                    <CssIcon />
                </div>

                <div className='m-5'>
                    <HtmlIcon />
                </div>

                <div className='m-5'>
                    <JavascriptIcon />
                </div>

                <div className='m-5'>
                    <JavaIcon />
                </div>


                <div className='m-5'>
                    <SqlIcon />
                </div>

                <div className='m-5'>
                   <ReactIcon />
                </div>

                <div className='m-5'>
                    <NextJsIcon />
                </div>

                <div className='m-5'>
                    <NodeJsIcon />
                   
                </div>

                <div className='m-5'>
                   <MongoJsIcon />
                </div>

                <div className='m-5'>
                    <PostgreSqlIcon />
                </div>

                <div className='m-5'>
                    <BootstrapCssIcon />
                </div>

                <div className='m-5'>
                    <PythonIcon />
                </div>

                <div className='m-5'>
                    <TailwindCssIcon />
                </div>
            </div>
        </>
    )
}