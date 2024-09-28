import { useState } from 'react';
import './App.css'

const baseUrl = 'http://localhost:5173';

async function customGenerateAudio(payload?: any) {
  const url = `${baseUrl}/api/generate`;
  const test = new Request(url, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
  })
  const data = fetch(test).then((response) => response.json()).then(data => console.log(data));
}

function App() {
  const [audioUrl, setAudioUrl] = useState(null);
  
  const onClick = async () => {
    customGenerateAudio();
  }
  

  const onInputChange = () => { };

  return (
    <>
      <div>
        <h1>Generate song</h1>
        <button onClick={onClick}>Send</button> 
      </div>
      <div>audio url: {audioUrl && audioUrl}</div>
    </>
  )
}

export default App
