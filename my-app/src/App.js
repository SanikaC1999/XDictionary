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
  
    let result = null;
    const iterator = dictionary[Symbol.iterator](); // Get iterator for the array
  
    let currentItem = iterator.next(); // Get the first item from the iterator
  
    while (!currentItem.done) {
      // Iterate until end of array
      const item = currentItem.value;
      if (item.word.toLowerCase() === searchTerm.toLowerCase()) {
        result = item.meaning;
        break; // Break the loop once the item is found
      }
      currentItem = iterator.next(); // Move to the next item
    }
  
    if (result) {
      setMeaning(result);
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

