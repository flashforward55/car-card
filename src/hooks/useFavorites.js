import { useEffect, useState } from 'react';
import { ERROR_MESSAGE, LS_KEY_FAVORITES } from 'constants/constants';
import { updateAdvert } from 'api/advertsApi';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY_FAVORITES)) ?? [];
  });

  useEffect(() => {
    if (favorites.length === 0) {
      localStorage.removeItem(LS_KEY_FAVORITES);
    } else {
      localStorage.setItem(LS_KEY_FAVORITES, JSON.stringify(favorites));
    }
  }, [favorites]);

  const toggleFavorites = async id => {
    const isAlreadyInFavorites = favorites.some(item => item.id === id);

    if (isAlreadyInFavorites) {
      try {
        const updates = { favorite: false };
        await updateAdvert(id, updates);
        setFavorites(prevState => prevState.filter(item => item.id !== id));
      } catch (error) {
        throw new Error(ERROR_MESSAGE);
      }
    } else {
      try {
        const updates = { favorite: true };
        const updatedAdvert = await updateAdvert(id, updates);
        setFavorites(prevState => [updatedAdvert, ...prevState]);
      } catch (error) {
        throw new Error(ERROR_MESSAGE);
      }
    }
  };

  return [favorites, toggleFavorites];
};
