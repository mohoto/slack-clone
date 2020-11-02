import React, {useState, useEffect} from 'react';
import './Chat.css';
import {useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../misc/firebase';
import Message from './Message';
import ChatInput from './ChatInput';

export default function Chat(props) {

    const {channelId} = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelMessages, setChannelMessages] = useState(null);

    useEffect(() => {
        if(channelId) {
            db.collection('channels')
            .doc(channelId)
            .onSnapshot(snapshot => 
                setChannelDetail(snapshot.data())
            )
        }
        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => 
            setChannelMessages(snapshot.docs.map(doc => ({id: doc.id, data:doc.data()})))
        )

    }, [channelId]);


    const deleteMessage = (id) => {
        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .doc(id).delete(); 
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{channelDetail?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />Détails
                    </p>
                </div>
            </div>
            {/* <div className="chat__messages">
                {channelMessages?.map(({message, timestamp, user, userImage}) =>
                    <Message 
                    message = {message}
                    timestamp = {timestamp}
                    user = {user}
                    userImage = {userImage}
                    />
                    )}
            </div> */}
            <div className="chat__messages">
                {channelMessages?.map(message =>
                    <Message
                    id = {message.id}
                    message = {message.data.message}
                    timestamp = {message.data.timestamp}
                    user = {message.data.user}
                    userImage = {message.data.userImage}
                    deleteMessageFunc = {() => deleteMessage(message.id)}
                    />
                    )}
            </div>
            <ChatInput channelName={channelDetail?.name} channelId= {channelId} />
        </div>
    )
}
