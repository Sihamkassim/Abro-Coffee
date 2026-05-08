import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MenuCategoryPage from "./pages/MenuCategoryPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:categoryId" element={<MenuCategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}