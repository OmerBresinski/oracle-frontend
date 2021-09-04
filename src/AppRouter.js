import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { KeysContextProvider } from "contexts/KeysContextProvider";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import * as P from "pages";
import * as C from "constant";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <KeysContextProvider>
            <Route exact path={C.ROUTES.home} component={P.Home} />
          </KeysContextProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
