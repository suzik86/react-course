import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/main/MainPage";
import NotFoundPage from "./components/pages/notFoundPage/NotFoundPage";
import BookDetails from "./components/pages/main/components/bookDetails/BookDetails";

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
