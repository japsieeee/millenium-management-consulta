import { Link } from 'react-router-dom';

import {
  BsTwitter, BsFacebook, BsInstagram, BsPinterest,
} from 'react-icons/bs';

import { MdAlternateEmail } from 'react-icons/md';

const Footer = () => (
  <div className="bg-gray-700 p-2 w-full flex flex-col items-center justify-center text-white py-10 min-h-[360px]">
    <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:justify-center items-center lg:items-start w-full text-[16px] lg:text-[22px]">
      <Link className="mx-5 hover:text-blue-300 duration-150" to="/about">
        About
      </Link>
      <Link
        className="mx-5 hover:text-blue-300 duration-150"
        to="/terms-and-privacy"
      >
        Terms &amp; Privacy
      </Link>
      <Link className="mx-5 hover:text-blue-300 duration-150" to="/services">
        Services
      </Link>
      <Link
        className="mx-5 hover:text-blue-300 duration-150"
        to="/subscriptions"
      >
        Subscription
      </Link>
      <Link className="mx-5 hover:text-blue-300 duration-150" to="/contact">
        Contact
      </Link>
    </div>

    <Link className="text-[16px] lg:text-[20px] hover:text-blue-300 duration-150 my-4" to="/#">
      MMCONSULTANCY.COM
    </Link>

    <div className="text-[16px] lg:text-[18px] flex flex-col items-center">
      <a
        href="mailto:jamesnazareno41@gmail.com"
        className="hover:text-blue-300 duration-150"
      >
        jamesnazareno41@gmail.com
      </a>
      <p className="text-gray-200 text-center">
        3138 Manggahan Street Karuhatan Valenzuela City 1441
      </p>
    </div>

    <div className="flex items-center text-[24px] lg:text-[32px] mt-5">
      <Link to="/" className="mx-2 duration-150 hover:text-[#f97316]">
        <BsInstagram />
      </Link>

      <Link to="/" className="mx-2 duration-150 hover:text-[#3b82f6]">
        <BsFacebook />
      </Link>

      <Link to="/" className="mx-2 duration-150 hover:text-[#22d3ee]">
        <BsTwitter />
      </Link>

      <Link to="/" className="mx-2 duration-150 hover:text-[#ef4444]">
        <BsPinterest />
      </Link>

      <Link to="/" className="mx-2 duration-150 hover:text-[#450a0a]">
        <MdAlternateEmail />
      </Link>
    </div>

    <h1 className="text-center text-[15px] lg:text-[20px] mt-10">All rights reserved</h1>
  </div>
);

export default Footer;
