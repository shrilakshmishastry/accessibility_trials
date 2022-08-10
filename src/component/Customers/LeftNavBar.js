import { useState } from "react";
import { labelsWithContent, logoAndLabelCycle } from "./logoAndLabel";

const LeftNavBar = () => {
  const [isNtfAccrOpen, setNtfAccrOpen] = useState(true);
  const [isProfileOpen, setProfileOpen] = useState(true);
  const [isDesignboardsOpen, setDesignboards] = useState(false);
  const [isDevelopersboardsOpen, setDevelopersboards] = useState(false);
  const [isHRBoardsOpen, setHRBoards] = useState(false);

  const Notification = () => {
    console.log("helo");
    setNtfAccrOpen(!isNtfAccrOpen);
  }

  const handlerVariable = [
    isDesignboardsOpen,
    isDevelopersboardsOpen,
    isHRBoardsOpen
  ];

  const fun = [
    setDesignboards,
    setDevelopersboards,
    setHRBoards
  ];


  return (
    <div className="leftNavBarContainer">
      <div className="headingContiner">
        <h3 className="accordianBtn">
          <button
            className="btnAccordion"
            onClick={() => setNtfAccrOpen(!isNtfAccrOpen)}
            id="notificationHandler"
            aria-expanded={isNtfAccrOpen}
            aria-controls="notificationPanel" >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
              fill="#4059F2"
              className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
            </svg>
            <span className="title">Cycle</span>
            {
              isNtfAccrOpen ?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down accordionIcon"
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg> :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up accordionIcon"
                  viewBox="0 0 16 16">
                  <path fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            }
          </button>
        </h3>
        {
          isNtfAccrOpen && (
            <button
              onClick={() => setProfileOpen(!isProfileOpen)}
              aria-expanded={isProfileOpen}
              id="profileHandler"
              aria-controls="profileRegion"
              className="btnProfile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#4059F2"
                className="bi bi-person-circle"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              {
                isProfileOpen ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down accIcon"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg> :
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up accIcon"
                    viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                  </svg>
              }
            </button>
          )

        }

      </div>

      {
        isNtfAccrOpen && (<div
          className="accordionPanelContainer"
          id="notificationPanel"
          aria-labelledby="notificationHandler"
          role={"region"}>

          {
            isProfileOpen && (
              <div
                className="profilePanelContainer"
                id="profileRegion"
                role={"region"}
                aria-labelledby="profileHandler">
                {logoAndLabelCycle.map(value => {
                  return (
                    <button className="btn" key={value.label}>
                      {value.svg}
                      <span>
                        {value.label}
                      </span>
                    </button>
                  );
                })
                }
              </div>
            )

          }

          {
            labelsWithContent.map((value, index) => {
              return (
                <div>
                  <h3 >
                    <button
                      aria-expanded={handlerVariable[index]}
                      className="innerLabelContiner"
                      aria-controls={`${value.label}region`}
                      id={value.label}
                      onClick={() => {
                        fun[index](!handlerVariable[index]);
                      }}>
                      {
                        handlerVariable[index]
                          ?
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill " viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill " viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
                      }
                      <span className="accordionIcon">{value.label}</span>
                    </button>
                  </h3>
                  <div
                    id={`${value.label}region`}
                    aria-labelledby={value.label}
                    role={"region"}
                    className="indivdualAccordion">
                    {handlerVariable[index] && (
                      value.content.map(innerValue => {
                        return (
                          <button
                            role="region"
                            id={innerValue.label}
                            aria-labelledby={value.label}
                            className="innerBtn"
                            key={innerValue.label}>
                            {innerValue.svg}
                            <p>{innerValue.label}</p>
                          </button>
                        );
                      }))
                    }
                  </div>
                </div>
              );
            })
          }
        </div>)
      }



    </div>
  );
}
export default LeftNavBar;