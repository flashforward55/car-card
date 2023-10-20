import { ButtonSecondaryStyled } from './ButtonSecondary.styled';

export const ButtonSecondary = ({ children, onClick }) => {
    return (
        <ButtonSecondaryStyled onClick={onClick}>
            {children}
        </ButtonSecondaryStyled>
    );
};
