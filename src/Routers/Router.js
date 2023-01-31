import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordQuiz from "../Components/Pages/MS_Word/MS_Word";
import HomePage from "../Components/Pages/HomePage/HomePage";
import { HashRouter } from 'react-router-dom';

export default function Router() {
  return (
    <HashRouter>
      <Routes>
            <Route path="/msword" element={<WordQuiz />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
      </Routes>
      </HashRouter>
  );
}