import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage/index.jsx";
import CheckoutPage from "./pages/CheckoutPage/index.jsx";
import ErrorPage from "./pages/ErrorPage/index.jsx";
import HomePage from "./pages/HomePage/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
