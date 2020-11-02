import React from 'react';
import './Message.css';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export default function Message({id, message, timestamp, user, userImage, deleteMessageFunc}) {
    return (
        <div className="message">
            <div className="message__content">
                <img src={userImage} alt="" />
                <div className="message__info">
                    <h4>{user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                    <p>{message}</p>
                </div>
            </div>
            <DeleteForeverOutlinedIcon onClick={e => deleteMessageFunc(id)}/>
        </div>
    )
}
