import React, { useState } from "react";

const Searchbar = ({ setUserSearch }) => {
  const [userInput, setUserInput] = useState("");

  const handleSearch = () => {
    setUserSearch(userInput.toLowerCase());
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center my-10">
      <input
        onKeyDown={handleKeyPress}
        onChange={(e) => setUserInput(e.target.value)}
        className="border-1 px-3 md:px-4 py-1 bg-sky-200 rounded-md mr-2 shadow-xl"
        placeholder="Search Name, Email..."
        type="text"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-1 bg-red-600 text-white rounded-md cursor-pointer shadow-xl"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
