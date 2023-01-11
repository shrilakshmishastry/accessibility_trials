import { useEffect, useState } from "react";
import { useRef } from "react";
import './alert.scss';

const AlertDialog = () => {
  const [notes, setNotes] = useState("Hello world");
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(0);
  const noBtn = useRef(null);
  const yesBtn = useRef(null);

  function handleBtnDown(e) {
    e.preventDefault();
    if (e.key === 'Tab') {
      if (active === 0) {
        yesBtn.current.focus();
        setActive(1);
      } else {
        noBtn.current.focus();
        setActive(0);
      }
    } else if (e.key === 'Escape') {
      setModal(false);
    }
  }
  return (
    <>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <button className="btn btn-primary me-2 ms-3" onClick={() => { }}>
        Save
      </button>
      <button className="btn btn-outline-secondary" onClick={() => { setModal(true) }}
        aria-disabled={notes.length === 0 ? true : false}>
        Discord
      </button>
      {
        modal && (
          <div className="modal-backdrop-custom" onKeyDown={handleBtnDown}>
            <div
              className="modal-alert-custom"
              aria-modal={true}
              role={"alertdialog"}
              aria-labelledby={"what-is-alert-for"}
              aria-describedby={"alert-consequences"}
            >
              <h5 id="what-is-alert-for">
                Are you sure you want to discord all your notes ?
              </h5>
              <h6 id="alert-consequences">
                2 words will be deleted .
              </h6>
              <button ref={noBtn} autoFocus className="btn btn-primary me-2 ms-3">
                No
              </button>
              <button ref={yesBtn} className="btn btn-outline-secondary">
                Yes
              </button>
            </div>
          </div>
        )
      }
    </>
  );
}
export default AlertDialog;