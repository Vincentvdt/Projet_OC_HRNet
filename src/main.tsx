import { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const CreateEmployee = lazy(() => import('./pages/CreateEmployee'));
const Employee = lazy(() => import('./pages/Employee'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/create-employee',
        element: <CreateEmployee />,
      },
      {
        path: '/employee',
        element: <Employee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
