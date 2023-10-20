import PropTypes from 'prop-types';
import { NoResultsStyled } from './NoResults.styled';

export const NoResults = ({ children }) => {
  return <NoResultsStyled>{children}</NoResultsStyled>;
};

NoResults.propTypes = {
  children: PropTypes.node.isRequired,
};
