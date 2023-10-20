import { CardListStyled } from './CardList.styled';
import { Card } from 'components/Shared/Card/Card';

export const CardList = ({ data, toggleFavorites }) => {
    return (
        <CardListStyled>
            {data.map(item => (
                <Card
                    key={`${item.id}`}
                    data={item}
                    toggleFavorites={toggleFavorites}
                />
            ))}
        </CardListStyled>
    );
};
