import { useState } from "react";
import { classicNameResolver } from "typescript";
import "./App.css";
import ReadDocument from "./components/ReadDocument/ReadDocument";

type StringObject = {
  text: string;
  classes: string[];
};

function App() {
  const [documentRendered, setDocumentRendered] = useState(false);
  const [text, setText] = useState("");
  const [bionic, setBionic] = useState<boolean>(true);
  const [stringObjects, setStringObjects] = useState<StringObject[]>([]);

  const createStringObjectArray = (text: string) => {
    return text
      .split(" ")
      .map((word) => {
        return createStringObjectList(word);
      })
      .flat();
  };

  const createStringObjectList = (word: string) => {
    let wordArr = [word];
    let arr = [
      {
        text: word,
        classes: [""],
      },
    ];

    if (bionic) {
      wordArr = [
        word.substring(0, Math.ceil(word.length / 2)),
        word.substring(Math.ceil(word.length / 2), word.length),
      ];
      arr = [
        { text: wordArr[0], classes: ["bionic"] },
        { text: wordArr[1], classes: [] },
      ];
    }

    arr.push({
      text: " ",
      classes: [],
    });

    return arr;
  };

  return (
    <div className="app">
      <div>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              setBionic(e.target.checked);
            }}
          />
          Use bionic
        </label>
      </div>
      {documentRendered ? (
        <div>
          <button
            onClick={() => {
              setDocumentRendered(false);
              setText("");
            }}
          >
            Go back
          </button>

          <ReadDocument text={createStringObjectArray(text)}></ReadDocument>
        </div>
      ) : (
        <div className="setup">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <button
            onClick={() => {
              setDocumentRendered(true);
            }}
          >
            Click me to show document
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
