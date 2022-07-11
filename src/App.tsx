import { useState } from 'react';
import './App.css';
import ReadDocument from './components/ReadDocument';

function App() {

  const [documentRendered, setDocumentRendered] = useState(false);
  const [text, setText] = useState('');
  
  return (
    <div className="App">
      {documentRendered ? 
        <div>
          <button onClick={() => {
            setDocumentRendered(false)
            setText('');
          }}>Go back</button>
          <ReadDocument text={text}></ReadDocument>
        </div>
        : 
        <div className="setup">
          <textarea onChange={(e) => {
            setText(e.target.value)
          }}></textarea>
          <button onClick={() => {
            setDocumentRendered(true)
          }}>Click me to show document</button>
        </div>
      }
    </div>
  );
}

export default App;
