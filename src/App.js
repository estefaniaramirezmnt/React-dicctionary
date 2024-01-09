import React from "react";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <main>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
