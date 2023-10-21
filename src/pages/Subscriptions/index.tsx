/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { AiOutlineGift } from 'react-icons/ai';
import Layout from '../../components/layout';
import { SubscriptionCard } from '../../types/subscriptions';

const Subscriptions = () => {
  const subscriptionsInfo: SubscriptionCard[] = [
    {
      title: 'Sign In',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium ex voluptates dolorum rem obcaecati quam alias vel
      minus adipisci sequi ratione optio possimus ipsam.`,
      link: '/sign-in',
      icon: <AiOutlineGift />,
      delay: 500,
    },
    {
      title: 'Payment',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      illo, odio error vel ab dolor explicabo nam sed voluptas
      maiores.`,
      link: '/subscriptions/payment',
      icon: <AiOutlineGift />,
      delay: 700,
    },
    {
      title: 'Terms and Privacy',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      illo, odio error vel ab dolor explicabo nam sed voluptas
      maiores.`,
      link: '/terms-and-privacy',
      icon: <AiOutlineGift />,
      delay: 900,
    },
  ];

  return (
    <Layout>
      <div className="-mx-4 flex flex-wrap p-8">
        {subscriptionsInfo.map((subscription, index) => (
          <div
            className={`w-full px-4 md:w-1/2 lg:w-1/3 animate-jump-in animate-delay-[${subscription.delay}ms]`}
            key={index}
          >
            <Link to={subscription.link} key={index}>
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block text-[40px]">
                  {subscription.icon}
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    {subscription.title}
                  </h3>
                  <p className="text-base font-medium text-body-color">
                    {subscription.description}
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

export default Subscriptions;
