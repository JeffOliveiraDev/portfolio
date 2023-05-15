import React from "react";
import { Dashboard } from "./pages/dashboard";
import { StyledButtons } from "./styles/buttons";
import { StyledGlobal } from "./styles/global";
import { StyledReset } from "./styles/reset";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    // <ThemeProvider theme={}>
    <div className="App">
      <StyledReset />
      <StyledGlobal />
      <StyledButtons />
      <Dashboard />
    </div>
    // </ThemeProvider>
  );
}
