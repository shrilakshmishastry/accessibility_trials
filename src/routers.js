import { Route, Routes } from "react-router-dom";
import App from "./App";
import { ShoppingCard } from "./component";
import Customers from "./component/Customers";

const Routers = () =>{
return(
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/shopping-card" element={<ShoppingCard/>} />
    <Route path="/customers" element={<Customers/>} />
  </Routes>
);
}
export default Routers;