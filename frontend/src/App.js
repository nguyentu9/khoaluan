import { useRoutes } from "react-router-dom";
import "./App.scss";
import routes from "./Router";

function App() {
    let routing = useRoutes(routes);
    return <div className="app">{routing}</div>;
}

export default App;
