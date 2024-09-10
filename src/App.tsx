import React from "react";
import AppContent from "./components/AppContext";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Grid with Drag-and-Drop and Detail Overlay</h1>
      </header>
      <AppContent />
    </div>
  );
};

export default App;
