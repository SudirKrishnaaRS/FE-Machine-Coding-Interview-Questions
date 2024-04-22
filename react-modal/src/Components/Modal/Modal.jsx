import "./Modal.styles.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ open, onClose }) => {
  const handleCancelCta = () => {
    // handle the cancel cta here
    onClose();
  };

  const handleContinueCta = () => {
    // handle the continue cta here
  };

  return (
    <>
      {open && (
        <div className="modal-overlay">
          <div className="modal-container">
            <header className="modal-header">
              <span className="modal-text">Modal Header</span>
              <span className="cancel-symbol" onClick={onClose}>
                &#10005;
              </span>
            </header>
            <hr className="divider" />

            <div className="modal-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus distinctio aut eaque quibusdam aspernatur debitis
              laboriosam, asperiores id assumenda libero sunt autem odit. Rem at
              esse laboriosam atque molestiae rerum praesentium ut provident
              consequatur optio? Atque, architecto eligendi sunt quos soluta
              sint cupiditate facilis nobis neque magni cumque ullam delectus!
            </div>

            <hr className="divider" />

            <footer className="modal-footer">
              <button onClick={handleCancelCta}>Cancel</button>
              <button onClick={handleContinueCta}>Continue</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
