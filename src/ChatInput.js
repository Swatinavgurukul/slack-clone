import React, { useState } from 'react';
import './ChatInput.css';
import { useStateValue } from './StateProvider'
import db from './firebase';
import firebase from 'firebase'
function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            db.collection("rooms")
                .doc(channelId)
                .collection("messages")
                .add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userimage: user.photoURL
                });
                setInput("")  
        }

    }
    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput



// Dear,

// I hope you are well and doing well. I just wanted to say thank you so much for giving this kind of pleatform. I am the bigest fun of yours and sunny. 
// I really appreciate you for providinghthe best learningh pleatform.
// I have watched a lot of you react challenges videos and implementing the clone. learning a lot and getting a lot of confidence .

// actully , I am fasing A error and I trid but not able to solve so if you can provide a person who can help me so I will Be too much thankfull.

// Again, thank You so much.