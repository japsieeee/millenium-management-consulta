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
import SupplyChain from './pages/Operations/SupplyChain';
import MarketingManagement from './pages/Operations/MarketingManagement';
import FinancialManagement from './pages/Operations/FinancialManagement';
import HumanResourceDevelopment from './pages/Operations/HumanResourceDevelopment';
import BusinessProcessingOutsource from './pages/Operations/BusinessProcessingOutsource';
import TermsAndPrivacy from './pages/TermsAndPrivacy';
import Payments from './pages/Payments';

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
			element: <SupplyChain />,
		},
		{
			path: '/operations/marketing-management',
			element: <MarketingManagement />,
		},
		{
			path: '/operations/financial-management',
			element: <FinancialManagement />,
		},
		{
			path: '/operations/human-resource-development',
			element: <HumanResourceDevelopment />,
		},
		{
			path: '/operations/business-processing-outsource',
			element: <BusinessProcessingOutsource />,
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
			element: <Payments />,
		},
		{
			path: '/terms-and-privacy',
			element: <TermsAndPrivacy />,
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
