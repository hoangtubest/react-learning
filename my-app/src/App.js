import "./App.css";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import CardTailwind from "./components/card/CardTailwind";
// import Card2 from "./components/card/Card2";
// import Button from "./components/button/Button";
// import Game from "./components/tictactoe/Game";
// import Counter from "./components/counter/Counter";
// import Toggle from "./components/toggle/Toggle";
// import YoutubeList from "./components/youtube/YoutubeList";

const themeLight = {
  colors: {
    blue: "#2979ff",
    orange: "#ffa433",
  },
};

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles></GlobalStyles>
      {/* <YoutubeList></YoutubeList> */}
      {/* <Toggle></Toggle> */}
      {/* <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      <CardList>
        <CardTailwind colorAmount={"#ff4444"}></CardTailwind>
        <CardTailwind fontSize={"16px"}></CardTailwind>
        <CardTailwind colorAmount={"green"}></CardTailwind>
        <CardTailwind></CardTailwind>
        <CardTailwind></CardTailwind>
        <CardTailwind></CardTailwind>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
