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
    <>
      <Image
        src={img ? img : placeholder}
        alt={`${make} ${model} ${year}`}
        // width="274"
        // height="268"
      />

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
            {rentalConditions.split('\n').map(item => (
              <RentalConditionsItem key={item}>{item}</RentalConditionsItem>
            ))}
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
