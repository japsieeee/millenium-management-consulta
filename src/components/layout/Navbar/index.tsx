import { Link, useNavigate } from 'react-router-dom';
import { BiBuildingHouse, BiKey, BiSolidChevronDown } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { IoBusinessSharp, IoPricetagsOutline } from 'react-icons/io5';
import { GiProgression } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { FaPeopleRoof } from 'react-icons/fa6';
import { LuContact, LuSquareStack, LuBadgeInfo } from 'react-icons/lu';
import {
  MdAccountBalance,
  MdBusinessCenter,
  MdOutlinePayments,
  MdOutlinePrivacyTip,
} from 'react-icons/md';
import { GrCompliance, GrServices } from 'react-icons/gr';
import { AiFillHome } from 'react-icons/ai';
import Logo from '../../../../public/logo/logo.svg';
import { IRoute } from '../../../types/routes';

function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = (path: IRoute['path']) => navigate(path);
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen((prev) => !prev);
  const toggleOffMenu = () => setOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleOffMenu);

    return () => window.removeEventListener('scroll', toggleOffMenu);
  }, []);

  return (
    <div>
      {/* web */}
      <nav className="text-indigo-900 items-center justify-between p-4 hidden lg:flex box-border h-[70px] border-b fixed top-0 w-full z-50 bg-white">
        <div>
          <Link
            to="/"
            className="hover:opacity-80 duration-150 active:opacity-70"
          >
            <img src={Logo} alt="logo-name" className="h-[60px] p-2" />
          </Link>
        </div>
        <div className="flex items-center text-[16px]">
          <div className="group relative duration-200 mr-6 z-10">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/" className="mr-1 font-semibold">
                Home
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm overflow-hidden min-w-[170px]">
              <button
                type="button"
                className="hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/about')}
              >
                <span className="mr-2 text-[20px]">
                  <LuBadgeInfo />
                </span>
                <span>About</span>
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6 z-10">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/services" className="mr-1 font-semibold">
                Services
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm overflow-hidden min-w-[250px]">
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/services/business-compliance')}
              >
                <span className="mr-2 text-[20px]">
                  <GrCompliance />
                </span>
                <span>Business Compliance Service</span>
              </button>
              <button
                type="button"
                className="hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/services/financial-accounting')}
              >
                <span className="mr-2 text-[20px]">
                  <MdAccountBalance />
                </span>
                <span>Financial Accounting Service</span>
              </button>
            </div>
          </div>

          <div className="group relative duration-200 mr-6 z-10">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/operations" className="mr-1 font-semibold">
                Operations
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm overflow-hidden min-w-[250px] lg:min-w-[500px] grid grid-cols-1 lg:grid-cols-2">
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/operations/supply-chain')}
              >
                <span className="mr-2 text-[20px]">
                  <LuSquareStack />
                </span>
                <span>Supply Chain</span>
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/operations/marketing-management')}
              >
                <span className="mr-2 text-[20px]">
                  <FaPeopleRoof />
                </span>
                <span>Marketing Management</span>
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/operations/financial-management')}
              >
                <span className="mr-2 text-[20px]">
                  <RiMoneyDollarCircleLine />
                </span>
                <span>Financial Management</span>
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/operations/human-resource-development')}
              >
                <span className="mr-2 text-[20px]">
                  <GiProgression />
                </span>
                <span>Human Resource Development</span>
              </button>
              <button
                type="button"
                className="hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/operations/business-processing-outsource')}
              >
                <span className="mr-2 text-[20px]">
                  <IoBusinessSharp />
                </span>
                <span>Business Processing Outsource</span>
              </button>
            </div>
          </div>

          <div className="hover:opacity-80 duration-150 mr-6">
            <Link to="/marketing" className="mr-1 font-semibold">
              Marketing
            </Link>
          </div>

          <div className="group relative duration-200 mr-6 z-10">
            <div className="flex items-center hover:opacity-80 duration-150">
              <Link to="/subscriptions" className="mr-1 font-semibold">
                Subscription
              </Link>{' '}
              <BiSolidChevronDown />
            </div>

            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-10 right-0 bg-white text-black shadow duration-200 rounded-sm overflow-hidden min-w-[220px]">
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/sign-in')}
              >
                <span className="mr-2 text-[20px]">
                  <BiKey />
                </span>
                <span>Sign In</span>
              </button>
              <button
                type="button"
                className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/subscriptions/payment')}
              >
                <span className="mr-2 text-[20px]">
                  <MdOutlinePayments />
                </span>
                <span>Payment</span>
              </button>
              <button
                type="button"
                className="hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-2 w-full text-left flex items-center"
                onClick={() => handleNavigate('/terms-and-privacy')}
              >
                <span className="mr-2 text-[20px]">
                  <MdOutlinePrivacyTip />
                </span>
                <span>Terms and Privacy</span>
              </button>
            </div>
          </div>

          <div className="mr-6 z-10 hover:opacity-80 duration-150">
            <Link to="/contact" className="mr-1 font-semibold">
              Contact
            </Link>
          </div>

          <div className="hover:opacity-80 duration-150">
            <Link to="/sign-in" className="mr-1 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
      {/* mobile */}
      <nav className="text-indigo-900 items-center justify-between p-4 flex lg:hidden box-border h-[60px] border-b fixed top-0 w-full z-50 bg-white">
        <Link
          to="/"
          className="hover:opacity-80 duration-150 active:opacity-70"
        >
          <img src={Logo} alt="logo-name" className="h-[50px] p-2" />
        </Link>
        <Hamburger size={25} toggled={isOpen} toggle={toggle} />

        <div
          className={`bg-white grid grid-cols-2 gap-y-5 w-full p-5 py-10 right-0 shadow z-40 rounded fixed duration-200 font-bold text-gray-700 ${
					  isOpen ? 'visible opacity-100 top-14' : 'invisible opacity-0 top-0'
          }`}
        >
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-3 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <AiFillHome />
            </span>
            <span>Home</span>
          </button>
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 pb-2 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/services')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <MdBusinessCenter />
            </span>
            <span>Services</span>
          </button>
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-3 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/operations')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <GrServices />
            </span>
            <span>Operations</span>
          </button>
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 pb-2 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/marketing')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <BiBuildingHouse />
            </span>
            <span>Marketing</span>
          </button>
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 py-3 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/subscriptions')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <IoPricetagsOutline />
            </span>
            <span>Subscriptions</span>
          </button>
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 pb-2 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/contact')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <LuContact />
            </span>
            <span>Contact</span>
          </button>
          <button
            type="button"
            className="cursor-pointer hover:bg-stone-50 active:bg-stone-100 duration-100 px-3 pb-2 pt-3 w-full flex flex-col items-center justify-center border-l-2"
            onClick={() => handleNavigate('/sign-in')}
          >
            <span className="mr-2 text-[24px] mb-2">
              <BiKey />
            </span>
            <span>Sign In</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
