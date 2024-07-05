import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import MainPage from "./components/pages/main/MainPage";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
