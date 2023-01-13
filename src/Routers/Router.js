import { BrowserRouter, Routes, Route } from "react-router-dom";

import WordQuiz from "../Components/Pages/MS_Word/MS_Word";
import HomePage from "../Components/Pages/HomePage/HomePage";
import App from '../App'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" component = {App}>
            <Route path="#/msword" element={<WordQuiz />} />
            <Route path="#/mcq_quiz" element={<HomePage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}