import { Link, useNavigate } from 'react-router-dom';
import { BiSolidChevronDown } from 'react-icons/bi';
import { IRoute } from '../../../types/routes';

function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = (path: IRoute['path']) => navigate(path);

  return (
    <div>
      {/* web */}
      <nav className="bg-indigo-900 text-white items-center justify-between p-2 hidden lg:flex">
        <div>
          <Link to="/" className="text-[20px]">
            Millenium Management Consulta
          </Link>
        </div>
        <div className="flex items-center text-[20px]">
          <div className="group relative duration-200 mr-6">
            <div className="flex items-center">
              <Link to="/" className="mr-1">
                Home
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[170px]">
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/about')}
              >
                About
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6">
            <div className="flex items-center">
              <Link to="/services" className="mr-1">
                Services
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/services/general-liason')}
              >
                General Liason Services
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/services/consulting')}
              >
                Consulting Services
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6">
            <div className="flex items-center">
              <Link to="/operations" className="mr-1">
                Operation
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/supply-chain')}
              >
                Supply Chain
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/marketing-management')}
              >
                Marketing Management
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/financial-management')}
              >
                Financial Management
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/human-resource-management')}
              >
                Human Resource Management
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/management-information')}
              >
                Management Information
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/operation')}
              >
                Operation
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/operations/material-management')}
              >
                Material Management
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6">
            <div className="flex items-center">
              <Link to="/subscription" className="mr-1">
                Subscription
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/sign-in')}
              >
                Sign In
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/subscription/payment')}
              >
                Payment
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left"
                onClick={() => handleNavigate('/terms-and-privacy')}
              >
                Terms and Privacy
              </button>
            </div>
          </div>

          <div className="mr-6">
            <Link to="/contact" className="mr-1">
              Contact
            </Link>
          </div>

          <div>
            <Link to="/sign-in" className="mr-1">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      {/* mobile */}
    </div>
  );
}

export default Navbar;
