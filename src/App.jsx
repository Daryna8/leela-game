import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import LeelaInfo from "./pages/LeelaInfo/LeelaInfo";
import Format from "./pages/Format/Format";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<LeelaInfo />} />
        <Route path="/format" element={<Format />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
