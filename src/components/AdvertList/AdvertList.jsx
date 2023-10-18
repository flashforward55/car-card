import { AdvertCard } from 'components/AdvertCard/AdvertCard';

export const AdvertList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={`${item.id} ${item.description}`} data={item}>
          <AdvertCard data={item} />
        </li>
      ))}
    </ul>
  );
};
