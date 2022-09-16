import { useEffect, useState } from "react";

const Alert = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  function keyDownHandler(event) {
    if (event.key === 'Escape') {
      setAlertVisible(false);
    }

  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, [])


  return (
    <>
      <button onClick={() => setAlertVisible(true)} className="btn btn-primary">
        OpenMe !
      </button>
      <div role='alert' className={`mt-5 bg-secondary text-white ${alertVisible ? 'visible' : 'invisible'}`}>
        <p>I am here !!! surprise !!</p>
      </div>
    </>
  );
}

export default Alert;