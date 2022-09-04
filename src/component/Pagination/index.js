import { useEffect, useState } from "react";
import './pagination.scss';
const Pagination = ({
  totalNumberOfItems,
  itemsPerPage,
  pageCounterToShowInit,
  handlePreviousBtnClick,
  handleNextBtnClick
}) => {
  const [activeInd, setActiveInd] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [numbersToShow, setNumbersToShow] = useState([]);
  const [pageCounterToShow, setPageCounterToShow] = useState(pageCounterToShowInit);
  const prevDisbaledText = `You have reached the starting page`;
  const nextDisabledText = `You have reached the ending page`;

  useEffect(() => {
    const totalPages = totalNumberOfItems > itemsPerPage ? Math.ceil(totalNumberOfItems / itemsPerPage) : 1;
    setPageCounterToShow(totalPages);
    setTotalPages(totalPages);
    setNumbersToShow(arrayCreator(1, pageCounterToShow + 1));
  }, [totalNumberOfItems, itemsPerPage, pageCounterToShow]);

  const arrayCreator = (startIndex, endIndex) => {
    let tempArr = [];
    for (let i = startIndex; i < endIndex; i++) {
      tempArr.push(i);
    }
    return tempArr;
  }

  const handlePreviousSetLoad = () => {
    setActiveInd(activeInd - 1);
    handlePreviousBtnClick();
    const startIndex = activeInd > pageCounterToShow ? activeInd - (pageCounterToShow - 1) : 1;
    setNumbersToShow(arrayCreator(startIndex, activeInd + 1))
  }

  const handleNextSetLoad = () => {
    setActiveInd(activeInd + 1);
    handleNextBtnClick();
    const endIndex = activeInd + pageCounterToShow > totalPages ? totalPages : activeInd + pageCounterToShow;
    setNumbersToShow(arrayCreator(activeInd + 1, endIndex + 1));
  }


  return (
    <div className="paginationContainer">
      <button
        onClick={handlePreviousSetLoad}
        className="btn"
        aria-label={activeInd === 1 ? prevDisbaledText : `press enter and you will be moved to next set of pages starting from index ${activeInd - 1} `}
        disabled={activeInd === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </button>
      {
        activeInd > 1 ? <span>...</span> : <></>
      }
      {

        numbersToShow.map((value) => {
          return (
            <button
              aria-label={activeInd === value ? `Your currently in page number ${value} ` : `Press enter to go to page number ${value}`}
              onClick={() => setActiveInd(value)}
              className={activeInd === value ? `btn activeBtn` : 'btn'}
              key={value}>{value}</button>
          );
        })
      }

      {
        activeInd + pageCounterToShow <= totalPages ? <span>...</span> : <></>
      }
      <button onClick={() => {
        handleNextSetLoad();
      }}
        aria-label={activeInd + pageCounterToShow >= totalPages ? nextDisabledText : `Press enter and You will taken to  page number${activeInd + 1}`}
        className={"btn"}
        disabled={activeInd === totalPages}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
          <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
export default Pagination;