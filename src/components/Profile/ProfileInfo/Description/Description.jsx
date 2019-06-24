import React from 'react'
import s from './Description.module.css'

const Description = (props) => {
    return (
        <div className={s.description}>
            <h2>
                Раиль Бахитов
            </h2>
            <hr/>
            <div className={s.item}>
                День рождения: 01.11.1999
            </div>
            <div className={s.item}>
                Город: Казань
            </div>
            <div className={s.item}>
                Контактная информация: rail.bakhitov@gmail.com
            </div>
            <hr/>
        </div>
    )
}
export default Description;