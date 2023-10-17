import { Link, useNavigate } from 'react-router-dom';
import { BiSolidChevronDown } from 'react-icons/bi';
import { IRoute } from '../../../types/routes';
// import LogoName from '../../../../public/logo/logo-name.svg';
import Logo from '../../../../public/logo/logo.svg';

function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = (path: IRoute['path']) => navigate(path);

  return (
    <div>
      {/* web */}
      <nav className="text-indigo-900 items-center justify-between p-4 hidden lg:flex box-border h-[70px] border-b">
        <div>
          <Link to="/" className="hover:opacity-80 duration-150 active:opacity-70">
            <img src={Logo} alt="logo-name" className="h-[60px] p-2" />
          </Link>
        </div>
        <div className="flex items-center text-[18px]">
          <div className="group relative duration-200 mr-6">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/" className="mr-1">
                Home
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[170px]">
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/about')}
              >
                About
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/services" className="mr-1">
                Services
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/services/general-liason')}
              >
                General Liason Services
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/services/consulting')}
              >
                Consulting Services
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/operations" className="mr-1">
                Operation
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/supply-chain')}
              >
                Supply Chain
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/marketing-management')}
              >
                Marketing Management
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/financial-management')}
              >
                Financial Management
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/human-resource-management')}
              >
                Human Resource Management
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/management-information')}
              >
                Management Information
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/operation')}
              >
                Operation
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/operations/material-management')}
              >
                Material Management
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/subscription" className="mr-1">
                Subscription
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/sign-in')}
              >
                Sign In
              </button>
              <button
                type="button"
                className="cursor-pointer mb-1 hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/subscription/payment')}
              >
                Payment
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-indigo-900 hover:text-white duration-100 px-3 py-2 w-full text-left rounded"
                onClick={() => handleNavigate('/terms-and-privacy')}
              >
                Terms and Privacy
              </button>
            </div>
          </div>

          <div className="mr-6 hover:opacity-80 duration-150">
            <Link to="/contact" className="mr-1">
              Contact
            </Link>
          </div>

          <div>
            <Link to="/sign-in hover:opacity-80 duration-150" className="mr-1">
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
