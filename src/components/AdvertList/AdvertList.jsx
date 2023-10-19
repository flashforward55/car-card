import { AdvertCard } from 'components/AdvertCard/AdvertCard';

export const AdvertList = ({ data, toggleFavorites }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={`${item.id} ${item.description}`}>
          <AdvertCard data={item} toggleFavorites={toggleFavorites} />
        </li>
      ))}
    </ul>
  );
};
