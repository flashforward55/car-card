import errorPlaceholder from 'img/errorPlaceholder.png';
import { ErrorCardStyled, ErrorImage, ErrorText } from './ErrorCard.styled';

export const ErrorCard = ({ children }) => {
  return (
    <>
      <ErrorCardStyled>
        <ErrorImage src={errorPlaceholder} alt="error" />
        <ErrorText>
          {children.split('. ').map(item => (
            <span key={item}>{item}</span>
          ))}
        </ErrorText>
      </ErrorCardStyled>
    </>
  );
};
