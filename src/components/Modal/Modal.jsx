import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Close from '../../images/close.svg?react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className='overlay' onClick={handleBackdropClick}>
      <div className='modal-window'>
        <button className='close-btn' type="button" onClick={()=> onClose()}><Close/></button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}