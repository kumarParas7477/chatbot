import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import ChatComponent from "./chat";
const AppRouter: React.FC = () => {
  return (
    <App >
      <Router>
        <Route path="/" component={ChatComponent} exact />
      </Router>
    </App>
  );
};
export default AppRouter;
