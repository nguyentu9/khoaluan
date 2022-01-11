import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import routes from "./Router";
function App() {
    let routing = useRoutes(routes);
    return (
        <div className="app">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
            {routing}
        </div>
    );
}

export default App;
