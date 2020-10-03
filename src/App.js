import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import { TweetContextProvider } from "./Context/TweetContext";

function App() {
  return (
    <div className="App">
      <TweetContextProvider>
        <HomePage />
      </TweetContextProvider>
    </div>
  );
}

export default App;
