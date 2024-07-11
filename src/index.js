// CSS
import "./style.css";

// Pages
import App from "./App";

// React
import ReactDOM from "react-dom/client";

//react router dom
import { BrowserRouter } from "react-router-dom";

// Redux Store
import { Provider } from "react-redux";
import store from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
