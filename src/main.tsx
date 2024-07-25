import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<p className="error-msg">Something went wrong</p>}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
);
