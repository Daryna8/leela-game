import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/more" element={<LearnMore />} /> */}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
