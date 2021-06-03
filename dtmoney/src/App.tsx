import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";

import React from "react";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <>
        <Header />
        <Dashboard/>
        <GlobalStyle />
    </>
  );
}
