import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import "./App.css";
import Layout from "./components/Layout";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
