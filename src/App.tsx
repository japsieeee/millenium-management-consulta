import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BusinessCompliance from './pages/Services/BusinessCompliance';
import Operations from './pages/Operations';
import Subscriptions from './pages/Subscriptions';
import Contacts from './pages/Contacts';
import SignIn from './pages/Signin';
import FinancialAccounting from './pages/Services/FinancialAccounting';
import Marketing from './pages/Marketing';

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
      element: <Services />,
    },
    {
      path: '/services/business-compliance',
      element: <BusinessCompliance />,
    },
    {
      path: '/services/financial-accounting',
      element: <FinancialAccounting />,
    },
    {
      path: '/operations',
      element: <Operations />,
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
      path: '/operations/human-resource-development',
      element: <h1>Supply Chain</h1>,
    },
    {
      path: '/operations/business-processing-outsource',
      element: <h1>Operation</h1>,
    },
    {
      path: '/marketing',
      element: <Marketing />,
    },
    {
      path: '/subscriptions',
      element: <Subscriptions />,
    },
    {
      path: '/subscriptions/payment',
      element: <h1>Payment</h1>,
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
      element: <SignIn />,
    },
    {
      path: '/contact',
      element: <Contacts />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
