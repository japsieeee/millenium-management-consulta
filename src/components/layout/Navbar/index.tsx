import { Link, useNavigate } from 'react-router-dom';
import { IRoute } from '../../../types/routes';

import { BiSolidChevronDown } from 'react-icons/bi';

const Navbar = () => {
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
        <div className="flex items-center text-[16px]">
          <div className="group relative duration-200 mr-6">
            <div className="flex items-center">
              <Link to="/" className="mr-1">
                Home
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[170px]">
              <p
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/about')}
              >
                About
              </p>
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
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/services/general-liason')}
              >
                General Liason Services
              </p>
              <p
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/services/consulting')}
              >
                Consulting Services
              </p>
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
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/operations/supply-chain')}
              >
                Supply Chain
              </p>
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() =>
                  handleNavigate('/operations/marketing-management')
                }
              >
                Marketing Management
              </p>
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() =>
                  handleNavigate('/operations/financial-management')
                }
              >
                Financial Management
              </p>
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() =>
                  handleNavigate('/operations/human-resource-management')
                }
              >
                Human Resource Management
              </p>
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() =>
                  handleNavigate('/operations/management-information')
                }
              >
                Management Information
              </p>
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/operations/operation')}
              >
                Operation
              </p>
              <p
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() =>
                  handleNavigate('/operations/material-management')
                }
              >
                Material Management
              </p>
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
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/sign-in')}
              >
                Sign In
              </p>
              <p
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/subscription/payment')}
              >
                Payment
              </p>
              <p
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2"
                onClick={() => handleNavigate('/terms-and-privacy')}
              >
                Terms and Privacy
              </p>
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
};

export default Navbar;
