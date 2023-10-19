import placeholder from 'img/placeholder.jpg';

export const AdvertModal = ({
  data: {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  },
}) => {
  return (
    <div>
      <img
        src={img ? img : placeholder}
        alt={`${make} ${model} ${year}`}
        width="274"
        height="268"
      />

      <div>
        <h2>
          <span>{make} </span>
          <span>{model}, </span>
          <span>{year}</span>
        </h2>

        <ul>
          <li>{address.split(',')[1]}</li>
          <li>{address.split(',')[2]}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size: : {engineSize}</li>
        </ul>

        <p>{description}</p>

        <h3>Accessories and functionalities:</h3>

        <ul>
          {[...accessories, ...functionalities].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Rental Conditions:</h3>

        <ul>
          {rentalConditions.split('\n').map(item => (
            <li key={item}>{item}</li>
          ))}
          <li>Mileage: {mileage}</li>
          <li>Price: {rentalPrice}</li>
        </ul>

        <a href="tel:+380730000000">Rental car</a>
      </div>
    </div>
  );
};
