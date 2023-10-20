import PropTypes from 'prop-types';
import { ButtonPrimary } from 'components/Shared/ButtonPrimary/ButtonPrimary';
import {
  TitleBlockWrapper,
  Image,
  Title,
  TitleAccent,
  TagsList,
  TagItem,
  Description,
  BlockWrapper,
  BlockTitle,
  RentalConditionsList,
  RentalConditionsItem,
  AccentText,
} from './AdvertModal.styled';
import { splitStringIntoNumberAndText } from 'helpers/splitStringIntoNumberAndText';
import placeholder from 'img/placeholder.jpg';

export const AdvertModal = ({
  data: {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const normalizedData = rentalConditions
    .split('\n')
    .map(item => splitStringIntoNumberAndText(item));

  return (
    <>
      <Image src={img ? img : placeholder} alt={`${make} ${model} ${year}`} />

      <div>
        <TitleBlockWrapper>
          <Title>
            <span>{make} </span>
            <TitleAccent>{model}, </TitleAccent>
            <span>{year}</span>
          </Title>

          <TagsList>
            <TagItem>{address.split(',')[1]}</TagItem>
            <TagItem>{address.split(',')[2]}</TagItem>
            <TagItem>Id: {id}</TagItem>
            <TagItem>Year: {year}</TagItem>
            <TagItem>Type: {type}</TagItem>
            <TagItem>Fuel Consumption: {fuelConsumption}</TagItem>
            <TagItem>Engine Size: {engineSize}</TagItem>
          </TagsList>
        </TitleBlockWrapper>

        <Description>{description}</Description>

        <BlockWrapper>
          <BlockTitle>Accessories and functionalities:</BlockTitle>
          <TagsList>
            {[...accessories, ...functionalities].map(item => (
              <TagItem key={item}>{item}</TagItem>
            ))}
          </TagsList>
        </BlockWrapper>

        <BlockWrapper>
          <BlockTitle>Rental Conditions:</BlockTitle>

          <RentalConditionsList>
            {normalizedData.map(item => {
              if (typeof item === 'object') {
                return (
                  <RentalConditionsItem key={item}>
                    {item.text} <AccentText>{item.number}</AccentText>
                  </RentalConditionsItem>
                );
              } else {
                return <RentalConditionsItem key={item}>{item}</RentalConditionsItem>;
              }
            })}

            <RentalConditionsItem>
              Mileage: <AccentText>{mileage.toLocaleString('en-US')}</AccentText>
            </RentalConditionsItem>

            <RentalConditionsItem>
              Price: <AccentText>{rentalPrice}</AccentText>
            </RentalConditionsItem>
          </RentalConditionsList>
        </BlockWrapper>

        <ButtonPrimary href="tel:+380730000000" tag="a" btnWidth="auto" btnPadding="12px 50px">
          Rental car
        </ButtonPrimary>
      </div>
    </>
  );
};

AdvertModal.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
};
