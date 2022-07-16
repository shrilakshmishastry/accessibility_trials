import { useRef } from 'react';
import './shoppingCard.scss';
const ShoppingCard = () => {
  const parentDiv = useRef(null);

  const handleParent = (event) => {
    console.log("parent call")
    console.log(event.target);
    console.log(event.currentTarget)
    if (event.currentTarget.className === 'shoppingCardParent' && event.target.nodeName !== 'BUTTON') {
      console.log("parent navigation will happen")
      window.open("https://bobbyhadz.com/blog/react-remove-event-listener")
    }
  }

  const handleBtnClick = (event) => {

    if (event.currentTarget === event.target) {
      // event.stopPropagation();
      window.open("https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column")
    }
    // parentDiv.current.removeEventListener('click',handleParent)
    console.log("btn clicked");

  }


  return (
    <div ref={parentDiv} tabIndex="-1" onClick={(event) => handleParent(event)} className="shoppingCardParent">
      <div>
        <p 
        tabIndex="0"
         aria-label='navigates to new jockey jersy brief page' 
         role={'button'}          
         onClick={(event) => handleParent(event)}>
          New jockey jersy
        </p>
      </div>
      <div className='btnContainer'>
        <button
        aria-label='cancel order of new jersy'
         onClick={(event) => handleBtnClick(event)} className='btn'>
          Cancel
        </button>
      </div>
    </div>
  );
}
export { ShoppingCard };