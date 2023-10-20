import PropTypes from 'prop-types';
import { ButtonPrimaryStyled } from './ButtonPrimary.styled';

export const ButtonPrimary = ({
  children,
  tag = 'button',
  btnWidth = 'auto',
  btnPadding = '12px 44px',
  ...props
}) => {
  return (
    <ButtonPrimaryStyled tag={tag} btnWidth={btnWidth} btnPadding={btnPadding} {...props}>
      {children}
    </ButtonPrimaryStyled>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string.isRequired,
  btnWidth: PropTypes.string.isRequired,
  btnPadding: PropTypes.string.isRequired,
};
