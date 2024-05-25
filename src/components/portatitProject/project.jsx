import React from 'react'
import cl from './project.module.sass'
import * as images from '../../img/'

const Project = ({data}) => {

    return (
        <div className={cl.project}>
                <img src={images[`p${data.id}`]} alt="" />
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