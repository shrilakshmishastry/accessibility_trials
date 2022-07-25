import { useState } from "react";

const LeftNavBar = () =>{
const [isNtfAccrOpen,setNtfAccrOpen] = useState(false);

const Notification = () =>{
  console.log("helo");
  setNtfAccrOpen(!isNtfAccrOpen);
}


return(
  <>
  <h3>
    <button 
    onClick={Notification}
    id="notificationHandler"
    aria-expanded={isNtfAccrOpen} 
    aria-controls="notificationPanel" >
    <span>Cycle</span>
      
    </button>
  </h3>
  {
    isNtfAccrOpen && ( <div 
  id="notificationPanel"
   aria-labelledby="notificationHandler" role={"region"}>
    <p>hello</p>
  </div>)
  }
 
  </>
);
}
export default LeftNavBar;