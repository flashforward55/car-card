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
        <Route path="catalog" element={<RentalPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};
