import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
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
        <CardItem>
            <ImageWrapper onClick={handleFavorite}>
                <Image
                    src={img ? img : placeholder}
                    alt={`${make} ${model} ${year}`}
                    // width="274"
                    // height="268"
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
