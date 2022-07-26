import Image from 'next/image'
import ticTacToeImg from '../public/assets/projects/tictactoe.PNG'
import SuperHeroImg from '../public/assets/projects/superHero.PNG'
import bugOutImg from '../public/assets/projects/bugOut.PNG'
import EnsembleImg from '../public/assets/projects/Ensemble.PNG'
import Link from 'next/link'
import ProjectItem from '../components/ProjectItem'

export default function Project() {
    return (
        <>
            <div className='w-full mt-24'>
                {/* <div className='max-w-[1240px] mx-auto px-2 '> */}
                <p className="text-xl tracking-widest uppercase">Projects</p>
                <h2 className="py-4">Things I've Built </h2>
                {/* <div className="grid md:grid-cols-2 gap-8"> */}

                <section class="se-container">

                    <div class="se-slope">
                        <article class="se-content">
                            <ProjectItem
                                title='Tic Tac Toe Game'
                                backgroundImg={ticTacToeImg}
                                language='Vanilla JavaScript'
                                projectLive='https://aselviyan.github.io/sei-tic-tac-toe/'
                                githubLink='https://github.com/ASelviyan/sei-tic-tac-toe'
                                color='1'
                            />
                        </article>
                    </div>


                    <div class="se-slope">
                        <article class="se-content">
                            <ProjectItem
                                title='Super Hero Application'
                                backgroundImg={SuperHeroImg}
                                language='Ejs'
                                projectLive='https://super-hero-website.herokuapp.com/'
                                githubLink='https://github.com/ASelviyan/Super-Hero'
                                color='0'
                            />
                        </article>
                    </div>

                    <div class="se-slope">
                        <article class="se-content">
                            <ProjectItem
                                title='BugOut Application'
                                backgroundImg={bugOutImg}
                                language='React.js'
                                projectLive='http://bugout-p3.netlify.app'
                                githubLink='https://github.com/ASelviyan/BugOut-Client'
                                color='1'
                            />
                        </article>
                    </div>


                    <div class="se-slope">
                        <article class="se-content">
                            <ProjectItem
                                title='Ensemble Application'
                                backgroundImg={EnsembleImg}
                                language='React.js'
                                projectLive='https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/login'
                                githubLink='https://github.com/ASelviyan/Ensemble-Client'
                                color='0'
                            />
                        </article>
                    </div>

                </section>
            </div>

            {/* </div> */}
            {/* </div > */}
        </>
    )
}