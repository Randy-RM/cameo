import { Route, Switch } from "react-router-dom";

let App = () => {

    return (
        <>
            <h1>Hello World !!!</h1>
            <Switch>
                <Route path="/detail">
                    <RobotDetail />
                </Route>
                <Route path="/upcoming-movies">
                    <RobotDetail />
                </Route>
                <Route path="/tv-show">
                    <RobotDetail />
                </Route>
                <Route path="/movies">
                    <RobotDetail />
                </Route>
                <Route path="/">
                    <RobotList />
                </Route>
            </Switch>
        </>
    );
};

export default App;