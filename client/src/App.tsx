import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Invoice from './pages/Invoice';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/invoice',
        element: <Invoice />,
    },
]);

function App() {
    return (
        <>
            <Navbar />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
