import React from "react";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <SearchResult />
    </div>
  );
}

export default App;
