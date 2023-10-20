import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazyNamedModuleImport } from 'helpers/lazyModuleImport';
const HomePage = lazyNamedModuleImport('HomePage');
const FavoritePage = lazyNamedModuleImport('FavoritePage');
const RentalPage = lazyNamedModuleImport('RentalPage');

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
