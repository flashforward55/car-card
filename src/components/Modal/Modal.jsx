import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { Overlay } from './Modal.styled';

export const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const handleEscKeydown = evt => {
      const KEY_CODE = 'Escape';

      if (evt.key === KEY_CODE) {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscKeydown);
    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
      document.documentElement.style.overflowY = 'unset';
    };
  }, [toggleModal]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  const backdropRootPortal = document.querySelector('#backdrop-root');

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <div>
        <span onClick={toggleModal}>
          <IoCloseOutline size={24} />
        </span>
        {children}
      </div>
    </Overlay>,
    backdropRootPortal
  );
};
