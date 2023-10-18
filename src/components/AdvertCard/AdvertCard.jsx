import placeholder from 'img/placeholder.jpg';

export const AdvertCard = ({
    data: {
        img,
        make,
        model,
        year,
        rentalPrice,
        address,
        rentalCompany,
        type,
        id,
        functionalities,
    },
}) => {
    return (
        <>
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
        </>
    );
};
