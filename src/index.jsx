import "./dist/css/bootstrap.min.css";
import "./dist/font/Open_Sans/Open_Sans_web.css";
import "./dist/css/style.css";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import WindowScrollToTop from "./components/personal_hooks/WindowScrollToTop.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <WindowScrollToTop>
        <App />
      </WindowScrollToTop>
    </Router>
  </>,
  document.querySelector("#root")
);
