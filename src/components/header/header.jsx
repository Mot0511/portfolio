import React from 'react'
import cl from './header.module.sass'

const Header = () => {
    return (
        <div className={cl.header}>
            <div>
                <h1 className={cl.heading}>MatveySuvorov</h1>
            </div>
            <ul className={cl.menu}>
                <li><a href="/#sites">Мои сайты</a></li>
                <li><a href="/#bots">Мои боты</a></li>
                <li><a href="/#aboutme">Обо мне</a></li>
            </ul>
            <h1 className={cl.email}>suvorov.matvej9@gmail.com</h1>
        </div>
    )
}
export default Header