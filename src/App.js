import "./styles.css";
import { useState } from 'react';

const emojiMeaning = {
    '😂':"smile", 
    '😠':"angry",
    '😕':"consfused",
    '😢':"crying"
};

function inputHandler(inputEmoji){
    switch(inputEmoji){
      case '😂' : return "smile";
      case '😠' : return "angry";
      case '😕' : return "confused";
      case '😢' : return "crying";
      case ""   : return ""
      default   : return "Not found"
    }
}

export default function App() {

  const [ meaning , setMeaning ] = useState("....")
  

  return (
    <div className="App">
      <p>Give me an emoji</p>
      <input onChange = { (event) => { setMeaning(inputHandler(event.target.value)) }}/>
    <br/><br/>

    {meaning}<br/>

    <br/>

    <button onClick = { () => setMeaning("Smile") } >   <h1> 😂 </h1> </button>
    <button onClick = { () => setMeaning("Angry") } >   <h1> 😠 </h1> </button>
    <button onClick = { () => setMeaning("Confused") }> <h1> 😕 </h1> </button>
    <button onClick = { () => setMeaning("Crying") }>   <h1> 😢 </h1> </button>

    </div>
  );
}
