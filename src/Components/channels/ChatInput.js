import React, {useState} from 'react';
import './ChatInput.css';
import db from '../../misc/firebase';
import {useStateValue} from '../../context/StateProvider';
import firebase from 'firebase';

export default function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = event => {
        event.preventDefault();
        if(channelId) {
            db.collection('channels')
            .doc(channelId)
            .collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }
        //setInput('');
    }; 

        console.log(input);  

    return (
        <div className="chatInput">
            <form>
                <input  type="text" placeholder={`chaîne #${channelName}`} value={input} onChange={e => setInput(e.target.value)}/>
                <button type="submit" onClick={sendMessage}>Envoyer</button>
            </form>
        </div>
    )
}
