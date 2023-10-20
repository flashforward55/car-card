import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Modal } from 'components/Shared/Modal/Modal';
import { AdvertModal } from 'components/AdvertModal/AdvertModal';
import { ButtonPrimary } from 'components/Shared/ButtonPrimary/ButtonPrimary';
import {
    CardItem,
    ImageWrapper,
    CardDescription,
    Image,
    FavoriteBtn,
    TitleWrapper,
    Title,
    TitleAccent,
    Price,
    TagsList,
    TagItem,
    BtnWrapper,
} from './Card.styled';
import { getShortestStringFromArr } from 'helpers/getShortestStringFromArr';
import placeholder from 'img/placeholder.jpg';
import { theme } from 'styles';

export const Card = ({ data, toggleFavorites }) => {
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        functionalities,
        rentalPrice,
        rentalCompany,
        address,
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
        <CardItem>
            <ImageWrapper onClick={handleFavorite}>
                <Image
                    src={img ? img : placeholder}
                    alt={`${make} ${model} ${year}`}
                />
                <FavoriteBtn type="button">
                    <FiHeart
                        size={18}
                        fill={isFavorite ? theme.colors.iconAccent : 'none'}
                        stroke={
                            isFavorite
                                ? theme.colors.iconAccent
                                : theme.colors.iconPrimary
                        }
                    />
                </FavoriteBtn>
            </ImageWrapper>

            <CardDescription>
                <TitleWrapper>
                    <Title>
                        <span>{make} </span>
                        <TitleAccent>{model}, </TitleAccent>
                        <span>{year}</span>
                    </Title>
                    <Price>{rentalPrice}</Price>
                </TitleWrapper>

                <TagsList>
                    <TagItem>{address.split(',')[1]}</TagItem>
                    <TagItem>{address.split(',')[2]}</TagItem>
                    <TagItem>{rentalCompany}</TagItem>
                    <TagItem>Premium</TagItem>
                    <TagItem>{type}</TagItem>
                    <TagItem>{model}</TagItem>
                    <TagItem>{id}</TagItem>
                    <TagItem>
                        {getShortestStringFromArr(functionalities)}
                    </TagItem>
                </TagsList>

                <BtnWrapper>
                    <ButtonPrimary
                        type="button"
                        tag="button"
                        onClick={toggleModal}
                        btnWidth="100%"
                        btnPadding="12px 44px"
                    >
                        Learn more
                    </ButtonPrimary>
                </BtnWrapper>
            </CardDescription>

            {isModalOpen && (
                <Modal toggleModal={toggleModal}>
                    <AdvertModal data={data} />
                </Modal>
            )}
        </CardItem>
    );
};

Card.propTypes = {
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
        functionalities: PropTypes.arrayOf(PropTypes.string.isRequired)
            .isRequired,
        rentalPrice: PropTypes.string.isRequired,
        rentalCompany: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        rentalConditions: PropTypes.string.isRequired,
        mileage: PropTypes.number.isRequired,
        favorite: PropTypes.bool.isRequired,
    }).isRequired,
    toggleFavorites: PropTypes.func.isRequired,
};
