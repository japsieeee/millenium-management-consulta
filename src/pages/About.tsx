import Layout from '../components/layout';

import LogoName from '../../public/logo/logo-name.svg';

const About = () => (
  <Layout>
    <div className="p-10 leading-tight">
      <h1 className="text-[40px] text-indigo-900 font-extrabold animate-fade-down animate-delay-[500ms]">
        MILLENNIUM MANAGEMENT CONSULTANCY FIRM
      </h1>
      <p className="text-gray-700 font-bold text-[28px] animate-fade-down animate-delay-[300ms]">
        Lets create great future together!
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-3/6 py-10">
          <img src={LogoName} alt="logo-name" className="h-[100px] animate-fade-down" />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-[30px] animate-fade-down">About Us</h1>

          <p className="text-gray-700 text-[20px] font-medium mt-5 animate-fade-down">
            {`Millennium Management Consultancy Firm is a dynamic startup founded by a
                group of ambitious individuals. This innovative venture was
                conceptualized and brought to life as part of a significant business
                project, highlighting the passion and dedication of these future
                business leaders. The name "Millennium" signifies our pursuit of
                long-term success, while "Management Consultancy Firm" underscores our
                primary focus.`}
          </p>

          <p className="text-gray-700 text-[20px] font-medium mt-5 animate-fade-down">
            At Millennium, we blend professionalism, financial expertise, and a
            deep understanding of regulatory requirements to craft customized
            solutions that empower businesses to excel in a fiercely competitive
            landscape. Our mission is to be your trusted partner on the path to
            prosperity, offering comprehensive services that enable you to
            concentrate on your core business operations, leaving the rest to
            us.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
