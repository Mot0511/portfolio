import React from 'react'
import Header from '../header/header'
import cl from './main.module.sass'
import * as images from '../../img/'

const Main = () => {
    return (
        <div className={cl.main}>
            <Header />
            <p className={cl.main__description}>
            Привет! Я - Матвей Суворов.<br />
Являюсь веб разработчиком и не только.<br />
А это мой официальный сайт.<br />
            </p>
        </div>
    )
}
export default Main