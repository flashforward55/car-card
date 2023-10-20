import PropTypes from 'prop-types';
import { ButtonSecondaryStyled } from './ButtonSecondary.styled';

export const ButtonSecondary = ({ children, onClick }) => {
  return <ButtonSecondaryStyled onClick={onClick}>{children}</ButtonSecondaryStyled>;
};

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
