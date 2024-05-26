import React, { useEffect, useState } from 'react'
import cl from './project.module.sass'
import * as images from '../../img/'

const Project = ({data}) => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.screen.width <= 880){
            setIsMobile(true)
        }
    }, [])

    return (
        <div className={cl.project}>
            <div className={cl.project__view}>
                <img src={images[`p${data.id}`]} alt="" />
                {isMobile && <h2 className={cl.title}>{data.title}</h2>}
                <p className={cl.project__techs}>{data.technologies.map(item => item+" ")}</p>
                <a href={data.link} target='_blank'><button>Посмотреть проект</button></a>
                <a href={data.github} target='_blank' className={cl.github}>Проект на Github</a>
            </div>
            <div className={cl.project__info}>
                {!isMobile && <h2 className={cl.title}>{data.title}</h2>}
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}
export default Project