import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    {
      word: "Component",
      meaning: "A reusable building block in React.",
    },
    {
      word: "State",
      meaning: "An object that stores data for a component.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === term
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <div>Definition:</div>
      <div>{meaning}</div>
    </div>
  );
}

export default App;

