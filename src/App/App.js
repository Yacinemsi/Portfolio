import { Route, Routes } from "react-router-dom";
import HomePage from "../Routes/HomePage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default App;
