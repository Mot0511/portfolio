import React from 'react'
import cl from './aboutme.module.sass'

const Aboutme = () => {
    return (
        <div className={'section'} id='aboutme'>
            <h2 className='heading'>Обо мне</h2>
            <p className={cl.description}>
                Меня зовут Матвей Суворов, мне 15 лет. 
                На протяжении 5 лет увлекаюсь программированием, последние 2 года сосредоточился на веб разработке. 
                <br /><br />
                Знаю Python, Javascript.<br />
                Из фронтенда освоил HTML/CSS, Typescript, React, Redux, Next.<br />
                Из бэкенда освоил Express, Django, FastAPI.<br />
                Умею делать телеграм ботов на aiogram3.<br />
                <br />
                <a href="https://t.me/Mot0511" target='_blank'>Мой телеграм</a><br />
                <a href="https://github.com/Mot0511" target='_blank'>Мой Github</a>

            </p>
            </div>
    )
}
export default Aboutme