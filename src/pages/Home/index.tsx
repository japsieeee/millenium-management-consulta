import { Link } from 'react-router-dom';

import Word from '/images/word.svg';
import Excel from '/images/excel.svg';
import Docs from '/images/docs.svg';
import Drive from '/images/drive.svg';
import Office from '/images/office.svg';
import HomeSvg from '/images/homeSvg.svg';
import Layout from '../../components/layout';
import Button from '../../components/common/Button';

function Home() {
  return (
    <Layout>
      <div className="flex flex-col-reverse lg:flex-row items-center py-10">
        <div className="w-full flex flex-col justify-center items-center text-indigo-950">
          <div
            id="box"
            className="px-5 lg:px-0 max-w-[500px] mt-10 leading-tight"
          >
            <h1 className="font-bold text-[34px] animate-fade-down animate-delay-[500ms]">
              Modern Platform For Your Business
            </h1>

            <p className="text-[26px] mt-3 animate-fade-down animate-delay-[300ms]">
              Quickly and Easily Create Any Business Document
            </p>

            <div id="divider" className="my-4" />

            <Button action={() => {}} label="Get Started" size="20" isBlock />

            <p className="text-[22px] mt-5 animate-fade-down">
              Customizable and Ready made Business documents compatible with:
            </p>

            <div className="flex lg:justify-start items-center justify-start mt-5">
              <Link
                to="https://www.microsoft.com/en/microsoft-365/word?market=ph"
                target="_blank"
                className="mr-2 animate-jump-in animate-delay-[500ms]"
              >
                <img
                  src={Word}
                  className="w-[60px] h-[60px] hover:scale-[110%] duration-200"
                  alt="word"
                />
              </Link>
              <Link
                to="https://www.microsoft.com/en/microsoft-365/excel?market=ph"
                target="_blank"
                className="mr-2 animate-jump-in animate-delay-[700ms]"
              >
                <img
                  src={Excel}
                  className="w-[60px] h-[60px] hover:scale-[110%] duration-200"
                  alt="excel"
                />
              </Link>
              <Link
                to="https://www.google.com/docs/about/"
                target="_blank"
                className="mr-2 animate-jump-in animate-delay-[900ms]"
              >
                <img
                  src={Docs}
                  className="w-[60px] h-[60px] hover:scale-[110%] duration-200"
                  alt="docs"
                />
              </Link>
              <Link
                to="https://www.google.com/drive/"
                target="_blank"
                className="mr-2 animate-jump-in animate-delay-[1100ms]"
              >
                <img
                  src={Drive}
                  className="w-[60px] h-[60px] hover:scale-[110%] duration-200"
                  alt="drive"
                />
              </Link>
              <Link
                to="https://www.office.com/"
                target="_blank"
                className="mr-2 animate-jump-in animate-delay-[1300ms]"
              >
                <img
                  src={Office}
                  className="w-[60px] h-[60px] hover:scale-[110%] duration-200"
                  alt="office"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-2">
          <Link to="https://storyset.com/people" target="_blank">
            <img
              src={HomeSvg}
              className="h-[600px] animate-jump-in animate-delay-[1500ms]"
              alt="People illustrations by Storyset"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
