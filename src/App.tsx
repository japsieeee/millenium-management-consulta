import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/services',
      element: <h1>Services</h1>,
    },
    {
      path: '/services/general-liason',
      element: <h1>General Liason</h1>,
    },
    {
      path: '/services/consulting',
      element: <h1>Consulting</h1>,
    },
    {
      path: '/operations',
      element: <h1>Operation</h1>,
    },
    {
      path: '/operations/supply-chain',
      element: <h1>Supply Chain</h1>,
    },
    {
      path: '/operations/marketing-management',
      element: <h1>Supply Chain</h1>,
    },
    {
      path: '/operations/financial-management',
      element: <h1>Supply Chain</h1>,
    },
    {
      path: '/operations/human-resource-management',
      element: <h1>Supply Chain</h1>,
    },
    {
      path: '/operations/operation',
      element: <h1>Operation</h1>,
    },
    {
      path: '/operations/management-information',
      element: <h1>Supply Chain</h1>,
    },
    {
      path: '/operations/material-management',
      element: <h1>Material Info</h1>,
    },
    {
      path: '/subscription',
      element: <h1>Subscription</h1>,
    },
    {
      path: '/subscription/payment',
      element: <h1>Payment</h1>,
    },
    {
      path: '/subscription/terms-and-privacy',
      element: <h1>Terms and privacy</h1>,
    },
    {
      path: '/terms-and-privacy',
      element: <h1>Terms and privacy</h1>,
    },
    {
      path: '/sign-up',
      element: <h1>Sign Un</h1>,
    },
    {
      path: '/sign-in',
      element: <h1>Sign In</h1>,
    },
    {
      path: '/contact',
      element: <h1>Contact</h1>,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
