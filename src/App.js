import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderStat from "./components/order/OrderStat";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-stat/:id" element={<OrderStat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
