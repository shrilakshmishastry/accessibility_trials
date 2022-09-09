import { useState } from "react";
import Tab1Content from "./Tab1Content";
import Tab2Content from "./Tab2Content";


const MainContentRender = () => {
  const [contentToRender, setContentToRender] = useState(1);
  return (
    <main className="mainContentContainer">
      <h3>Customers</h3>
      <div className="tabContainer">
        <button onClick={() => {
          setContentToRender(1);
        }}
          className={contentToRender === 1 ? `tabBtn bg-white text-dark activeBtn` : `tabBtn`}
        >
          People
        </button>
        <button onClick={() => {
          setContentToRender(2);
        }}
          className={contentToRender === 2 ? `tabBtn bg-white text-dark  activeBtn` : `tabBtn`}
        >
          Companies
        </button>
      </div>

      {
        contentToRender === 1 ?
          <Tab1Content />
          : <Tab2Content />
      }
    </main>
  );
}
export default MainContentRender;