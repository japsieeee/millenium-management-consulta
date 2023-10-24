/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { IoBusinessSharp } from 'react-icons/io5';
import { LuSquareStack } from 'react-icons/lu';
import { FaPeopleRoof } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { GiProgression } from 'react-icons/gi';
import Layout from '../../components/layout';
import { OperationCard } from '../../types/operations';

const Operations = () => {
  const servicesInfo: OperationCard[] = [
    {
      title: 'Supply Chain',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium ex voluptates dolorum rem obcaecati quam alias vel
          minus adipisci sequi ratione optio possimus ipsam.`,
      link: '/operations/supply-chain',
      icon: <LuSquareStack />,
      delay: 500,
    },
    {
      title: 'Marketing Management',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          illo, odio error vel ab dolor explicabo nam sed voluptas
          maiores.`,
      link: '/operations/marketing-management',
      icon: <FaPeopleRoof />,
      delay: 700,
    },
    {
      title: 'Financial Management',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          illo, odio error vel ab dolor explicabo nam sed voluptas
          maiores.`,
      link: '/operations/financial-management',
      icon: <RiMoneyDollarCircleLine />,
      delay: 900,
    },
    {
      title: 'Human Resource Development',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium ex voluptates dolorum rem obcaecati quam alias vel
          minus adipisci sequi ratione optio possimus ipsam.`,
      link: '/operations/human-resource-development',
      icon: <GiProgression />,
      delay: 1100,
    },
    {
      title: 'Business Processing Outsource',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          illo, odio error vel ab dolor explicabo nam sed voluptas
          maiores.`,
      link: '/operations/business-processing-outsource',
      icon: <IoBusinessSharp />,
      delay: 1300,
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

export default Operations;
