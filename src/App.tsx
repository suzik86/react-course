import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BookDetails from "./components/bookDetails/BookDetails";
import MainPage from "./pages/main/MainPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/book/:bookId" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
