import { Route, Routes } from "react-router-dom";
import HomePage from "../Routes/HomePage";
import NotFoundPage from "../Routes/NotFoundPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default App;
