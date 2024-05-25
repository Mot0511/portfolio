import React from 'react'
import * as images from '../../img/'
import cl from './diplomas.module.sass'

const Diplomas = () => {
    return (
        <div className='section' id='diplomas'>
            <h2 className='heading'>Дипломы, грамоты, сертификаты</h2>
            <div className={'flex'}>
                <img src={images['d1']} className={cl.diploma} alt="" />
            </div>
        </div>
    )
}
export default Diplomas