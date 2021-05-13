import "./dist/css/bootstrap.min.css";
import "./dist/font/Open_Sans/Open_Sans_web.css";
import "./dist/css/style.css";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
//import { createBrowserHistory } from "history";

//let history = createBrowserHistory();

ReactDOM.render(
    <>
        <Router>
            <App />
        </Router>
    </>
    , document.querySelector("#root"));