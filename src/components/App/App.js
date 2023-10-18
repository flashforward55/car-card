import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';
import { RentalPage } from 'pages/RentalPage/RentalPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
