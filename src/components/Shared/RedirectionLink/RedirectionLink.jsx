import PropTypes from 'prop-types';
import { LinkStyled } from './RedirectionLink.styled';

export const RedirectionLink = ({ children, to }) => {
    return <LinkStyled to={to}>{children}</LinkStyled>;
};

RedirectionLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};
