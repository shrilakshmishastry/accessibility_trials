import { Route, Routes } from "react-router-dom";
import About from "../component/About";
import Alert from "../component/Alert";
import Customers from "../component/Customers";
import LandingPage from "../component/LandingPage";
import ShoppingCard from "../component/ShoppingCard/ShoppingCard";

const GlobalRouter = () => {
  return (
    <Routes>
      <Route path="/shopping-card" element={<ShoppingCard />} />
      <Route path='/customers' element={<Customers />} />
      <Route path="/about" element={<About />} />
      <Route path="/alert" element={<Alert />} />
      <Route path='/' element={<LandingPage />} />
    </Routes>
  );
}
export default GlobalRouter;