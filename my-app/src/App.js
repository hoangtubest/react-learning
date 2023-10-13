import "./App.css";
import CardList from "./components/card/CardList";
import Card2 from "./components/card/Card2";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
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
        <Card2 colorAmount={"#ff4444"}></Card2>
        <Card2 fontSize={"16px"}></Card2>
        <Card2 colorAmount={"green"}></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
