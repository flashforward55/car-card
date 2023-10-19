import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { AdvertModal } from 'components/AdvertModal/AdvertModal';
import placeholder from 'img/placeholder.jpg';

export const AdvertCard = ({ data, toggleFavorites }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
    favorite,
  } = data;

  const [isFavorite, setIsFavorite] = useState(favorite);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFavorite = () => {
    toggleFavorites(id);
    setIsFavorite(prevState => !prevState);
  };

  const toggleModal = () => setIsModalOpen(prevState => !prevState);

  return (
    <>
      <img
        src={img ? img : placeholder}
        alt={`${make} ${model} ${year}`}
        width="274"
        height="268"
      />

      <button type="button" onClick={handleFavorite}>
        {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
      </button>

      <div>
        <h2>
          <span>{make} </span>
          <span>{model}, </span>
          <span>{year}</span>
        </h2>
        <span>{rentalPrice}</span>
      </div>

      <ul>
        <li>{address.split(',')[1]}</li>
        <li>{address.split(',')[2]}</li>
        <li>{rentalCompany}</li>
        <li>Premium</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{functionalities[0]}</li>
      </ul>

      <button type="button" onClick={toggleModal}>
        Learn more
      </button>

      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <AdvertModal data={data} />
        </Modal>
      )}
    </>
  );
};
