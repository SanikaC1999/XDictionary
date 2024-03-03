import React, { useState } from "react";

export default function App() {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission

    const result = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (result) {
      setMeaning(result.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h6>Definition: {meaning}</h6>
    </div>
  );
}

