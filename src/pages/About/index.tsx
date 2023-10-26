import Layout from '../../components/layout';
import LogoName from '../../../public/logo/logo-name.svg';
import Mission from '../../../public/images/png/mission.png';
import Vision from '../../../public/images/png/vision.png';

const About = () => (
  <Layout>
    <div className="p-6 lg:p-10 leading-tight">
      <h1 className="text-[22px] lg:text-[40px] text-indigo-900 font-extrabold animate-fade-down animate-delay-[500ms]">
        MILLENNIUM MANAGEMENT CONSULTANCY FIRM
      </h1>
      <p className="text-gray-700 font-bold text-[18px] lg:text-[28px] animate-fade-down animate-delay-[300ms]">
        Lets create great future together!
      </p>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="w-full lg:w-3/6 py-10">
          <img
            src={LogoName}
            alt="logo-name"
            className="lg:h-[100px] animate-fade-down"
          />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">About Us</h1>

          <p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
            {`Millennium Management Consultancy Firm is a dynamic startup founded by a
                group of ambitious individuals. This innovative venture was
                conceptualized and brought to life as part of a significant business
                project, highlighting the passion and dedication of these future
                business leaders. The name "Millennium" signifies our pursuit of
                long-term success, while "Management Consultancy Firm" underscores our
                primary focus.`}
          </p>

          <p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
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

      <div className="flex flex-col lg:flex-row-reverse gap-10 mt-10 items-center">
        <div className="w-full lg:w-3/6 py-10 flex justify-end">
          <img
            src={Mission}
            alt="logo-name"
            className="h-full animate-fade-down"
          />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">Mission</h1>

          <p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
            {`At MM Consultancy, our mission is to empower businesses to achieve
            their full potential. We are dedicated to providing expert guidance
            and tailored solutions that drive growth, enhance efficiency, and
            foster innovation. Through our unwavering commitment to excellence,
            we strive to be the trusted partners businesses turn to when
            navigating the complexities of today's competitive landscape.`}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 my-10 items-center">
        <div className="w-full lg:w-3/6 py-10 flex justify-start">
          <img
            src={Vision}
            alt="logo-name"
            className="h-full animate-fade-down"
          />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">Vision</h1>

          <p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
            Our vision at MM Consultancy is to be a catalyst for positive
            transformation in the business world. We aspire to set new standards
            of excellence in consultancy services, continuously evolving to meet
            the ever-changing needs of our clients. We envision a future where
            businesses flourish and thrive, guided by our expertise and support,
            making a lasting impact on their industries and the global economy.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
