import "./App.scss";
import NavigationBar from "./Shared/NavigationBar";
import Theme from "./Theme/Theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Theme/GlobalStyle";
import "../src/Shared/MobileBar/styles.css";
import { Example } from "./Shared/MobileBar/Example";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles />
      {/* <NavigationBar /> */}
      <Example />
    </MuiThemeProvider>
  );
}

export default App;
