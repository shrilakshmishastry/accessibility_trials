import { Link } from "react-router-dom";

function App() {
  return (
   <nav style={{
    display:'flex',
    flexDirection: 'column',
    gap: '1rem'
   }}>
    <Link to={"shopping-card"}>
      Shopping Card
    </Link>    
    <Link to={"customers"}>
      Customers
    </Link>
   </nav>
  );
}

export default App;
