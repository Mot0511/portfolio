import React from 'react'
import cl from './project.module.sass'

const Project = ({data}) => {
    return (
        <div className={cl.project}>
                <img src={`../../../img/${data.id}.png`} alt="" />
                <h2>{data.title}</h2>
                <p className={cl.project__techs}>{data.technologies.map(item => item+" ")}</p>
                <p>
                    {data.description}
                </p>
                <a href={data.link}><button>Посмотреть проект</button></a>
                <a href={data.github} className={cl.github}>Проект на Github</a>
        </div>
    )
}
export default Project