import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/card/card.component";
import ErrorBondaries from "./components/error-bondaries/error-bondaries.component";

function App() {
  return (
    <div className="App">
      <ErrorBondaries>
        <Card testo="Contatore" />
      </ErrorBondaries>
    </div>
  );
}

export default App;
