import React from 'react'
import cl from './header.module.sass'

const Header = () => {
    return (
        <div className={cl.header}>
            <h1 className={cl.heading}>MatveySuvorov</h1>
            <ul className={cl.menu}>
                <li><a href="/#sites">Мои сайты</a></li>
                <li><a href="/#bots">Мои боты</a></li>
                <li><a href="/#aboutme">Обо мне</a></li>
            </ul>
        </div>
    )
}
export default Header