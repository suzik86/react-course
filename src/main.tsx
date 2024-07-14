import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<p className="error-msg">Something went wrong</p>}>
    <App />
  </ErrorBoundary>,
);
