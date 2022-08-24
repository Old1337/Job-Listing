import "./App.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    min-height:100vh;
    background-color: hsl(180, 52%, 96%);
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="App">
        <Jobs />
      </main>
    </>
  );
}

export default App;
