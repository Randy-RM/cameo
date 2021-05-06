import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

let history = createBrowserHistory();

ReactDOM.render(
    <>
        <Router history={history}>
            <App />
        </Router>
    </>
    , document.querySelector("#root"));