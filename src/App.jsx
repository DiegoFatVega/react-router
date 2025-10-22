import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";

import DefaultLayout from "./layouts/DefaultLayout";
import SingleProduct from "./pages/SingleProduct";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about'} element={<AboutUsPage />} />
            <Route path={'/products'} element={<ProductsPage />} />
            <Route path={'/products/:id'} element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
