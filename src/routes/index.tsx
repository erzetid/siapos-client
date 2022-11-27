import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../layout';
import LinkItems, { LinkSubItems } from './LinkItems';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {LinkItems.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {LinkSubItems.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Route>
  )
);

export default router;
