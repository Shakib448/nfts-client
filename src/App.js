import NavigationBar from "./Shared/NavigationBar";
import Theme from "./Theme/Theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Theme/GlobalStyle";
import { MobileBar } from "./Shared/MobileBar/MobileBar";
import { BrowserRouter as Switch, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import ParticlesJs from "./Theme/ParticlesJs";
import "./App.scss";
import Login from "./Components/Login/Login";
import { AnimatePresence } from "framer-motion";
import SingUp from "./Components/SignUp/SignUp";

function App() {
  const location = useLocation();
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles />
      <ParticlesJs />

      <NavigationBar />
      <MobileBar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SingUp} />
        </Switch>
      </AnimatePresence>
    </MuiThemeProvider>
  );
}

export default App;
