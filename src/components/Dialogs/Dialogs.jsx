import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(el => (<DialogItem name={el.name} id={el.id} img={el.img}/>));
    let messageElements = props.state.messages.map(el => (<Message message={el.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;