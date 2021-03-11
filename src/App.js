import NavigationBar from "./Shared/NavigationBar";
import Theme from "./Theme/Theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Theme/GlobalStyle";
import { MobileBar } from "./Shared/MobileBar/MobileBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ParticlesJs from "./Theme/ParticlesJs";
import "./App.scss";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles />
      <ParticlesJs />

      <Router>
        <NavigationBar />
        <MobileBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
