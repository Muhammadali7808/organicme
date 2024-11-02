import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home/home";
import { Product } from "./page/product/product";
import { ProductDetail } from "./page/product-detail/product-detail";
import { AboutUs } from "./pages/about_us/about-us";
import { Shop } from "./pages/shop/shop";
import { News } from "./pages/news/news";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="shop" element={<Shop />} />
          <Route path="news" element={<News/>} />
          <Route>
            <Route path="/" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;