import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: 'dashboard',
        element: <Dashboard />
    },
]);

const Project = () => {
    return <RouterProvider router={router} />;
};

export default Project;
