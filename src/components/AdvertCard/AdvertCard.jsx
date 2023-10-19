import placeholder from 'img/placeholder.jpg';
import { useState } from 'react';

export const AdvertCard = ({
  data: {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    favorite = false,
  },
  toggleFavorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavorite = () => {
    toggleFavorites(id);
    setIsFavorite(prevState => !prevState);
  };

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
        <li>{mileage}</li>
        <li>{functionalities[0]}</li>
      </ul>
    </>
  );
};
