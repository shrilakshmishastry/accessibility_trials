import { useEffect, useState } from "react";
const Pagination = ({
  totalNumberOfItems,
  itemsPerPage,
  pageCounterToShow
}) => {
  const [activeInd, setActiveInd] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [numbersToShow, setNumbersToShow] = useState([]);

  const prevDisbaledText = `You have reached the starting page`;
  const nextDisabledText = `You have reached the ending page`;

  useEffect(() => {
    setTotalPages(totalNumberOfItems / itemsPerPage);

    setNumbersToShow(arrayCreator(0, pageCounterToShow, activeInd));
  }, []);

  const arrayCreator = (startIndex, endIndex, startValue) => {
    let tempArr = [];
    for (let i = startIndex; i < endIndex; i++) {
      tempArr.push(startValue + i);
    }
    return tempArr;
  }

  const handlePreviousSetLoad = () => {
    setActiveInd(activeInd - pageCounterToShow);
    setNumbersToShow(arrayCreator(0, pageCounterToShow, activeInd - pageCounterToShow));
  }

  const handleNextSetLoad = () => {
    const sumHolder = activeInd + pageCounterToShow;
    setActiveInd(activeInd + pageCounterToShow);
    setNumbersToShow(arrayCreator(0, pageCounterToShow, sumHolder));
  }


  return (
    <div className="paginationContainer">
      <button
        onClick={handlePreviousSetLoad}
        className="btn"
        aria-label={activeInd <= pageCounterToShow ? prevDisbaledText : `you will be moved to next ${activeInd - pageCounterToShow} page`}
        disabled={activeInd <= pageCounterToShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      </button>
      {

        numbersToShow.map((value) => {
          return (
            <button
              aria-label={`currently your in ${value} page`}
              onClick={() => setActiveInd(value)}
              className={activeInd === value ? `btn btn-primary` : 'btn'}
              key={value}>{value}</button>
          );
        })
      }
      <button onClick={() => {
        handleNextSetLoad();
      }}
        aria-label={activeInd > totalPages ? nextDisabledText : `You will taken to ${activeInd + pageCounterToShow} page`}
        className={"btn"}
        disabled={activeInd > totalPages}
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