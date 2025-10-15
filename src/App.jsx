import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";

import DefaultLayout from "./layouts/DefaultLayout";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/AboutUs'} element={<AboutUsPage />} />
            <Route path={'/Products'} element={<ProductsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
