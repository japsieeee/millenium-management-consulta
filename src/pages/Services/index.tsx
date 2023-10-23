/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { AiOutlineGift } from 'react-icons/ai';
import Layout from '../../components/layout';
import { ServiceCard } from '../../types/services';

const Services = () => {
  const servicesInfo: ServiceCard[] = [
    {
      title: 'Business Compliance',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium ex voluptates dolorum rem obcaecati quam alias vel
      minus adipisci sequi ratione optio possimus ipsam.`,
      link: '/services/business-compliance',
      icon: <AiOutlineGift />,
      delay: 500,
    },
    {
      title: 'Financial Accounting',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      illo, odio error vel ab dolor explicabo nam sed voluptas
      maiores.`,
      link: '/services/financial-accounting',
      icon: <AiOutlineGift />,
      delay: 700,
    },
  ];

  return (
    <Layout>
      <div className="mx-4 flex flex-wrap p-8">
        {servicesInfo.map((service, index) => (
          <div
            className={`w-full px-4 md:w-1/2 lg:w-1/3 animate-jump-in animate-delay-[${service.delay}ms]`}
            key={index}
          >
            <Link to={service.link} key={index}>
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block text-[40px]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base font-medium text-body-color">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Services;
