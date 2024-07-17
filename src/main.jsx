import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyContextProvider from "./Context/DataContext.jsx"
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <MyContextProvider>
        <App />
    </MyContextProvider>
    </BrowserRouter>
);
