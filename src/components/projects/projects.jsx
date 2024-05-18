import React from 'react'
import cl from './projects.module.sass'
import projects from '../../../projects.json'
import LandscapeProject from '../landscapeProject/project'
import PortatitProject from '../portatitProject/project'

const Projects = () => {
    return (
        <>
            <div className={'section'}>
                <h2 className='heading' id='sites'>Мои сайты</h2>
                {
                    projects.map(project => project.type == 'site' && <LandscapeProject data={project} key={project.id} />)
                }
            </div>
            <div className={'section'}>
                <h2 className='heading' id='bots'>Мои боты</h2>
                <div className={'flex'}>
                    {
                        projects.map(project => project.type == 'bot' && <PortatitProject data={project} key={project.id} />)
                    }
                </div>
            </div>
        </>
    )
}
export default Projects