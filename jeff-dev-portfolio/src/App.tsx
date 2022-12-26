import React from "react";
import { Dashboard } from "./pages/dashboard";
import { StyledButtons } from "./styles/buttons";
import { StyledGlobal } from "./styles/global";
import { StyledReset } from "./styles/reset";

export function App() {
  return (
    <div className="App">
      <StyledReset />
      <StyledGlobal />
      <StyledButtons />
      <Dashboard />
    </div>
  );
}
