import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
 const [input, setInput] = useState('');
 const [messages, setMessages] = useState([]);
 const [username, setUsername] = useState('');

 //console.log(input);
 //console.log(messages);
 // useEffect = piece of code that gets executed in certain conditions
 // useState = variable in REACT
useEffect(() => {
    // run once when the app component loads
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
  })
 }, [])

 useEffect(() => {
   //run code here...
   //if its blank inside [], this code runs ONCE when the app component loads
   setUsername(prompt('Please enter your name'))
  }, []) //condition

 const sendMessage =(event)=> {
     // all the logic to send message goes here
     event.preventDefault();
     
     db.collection('messages').add({
       message: input,
       username: username,
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
     })
   setInput('');
 }

  return (
    <div className="app">
      <img src="data:image/jpeg;base64,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" alt="" />
     <h1>Facebook Messenger Clone By @KelvinMuindi</h1>
     <h2>Welcome, {username} </h2>

     <form className="app__form">
        <FormControl className="app__formControl">
          {/* input field */}
          <Input className="app__input" placeholder="Enter a message.." value={input} onChange={event => setInput(event.target.value)} />
          
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary"type='submit' onClick={sendMessage}>
           <SendIcon />
        </IconButton>
           {/* button */}
      
        </FormControl>      
    </form>

    <FlipMove>
        {/* messages themselves */}
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
    </FlipMove>
    
    </div>
  );
}

export default App;
