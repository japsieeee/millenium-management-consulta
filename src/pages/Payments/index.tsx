import Card from '../../components/common/Card';
import Layout from '../../components/layout';

const Payments = () => {
 interface ICard {
  label: string;
  type:
   | 'debit'
   | 'credit'
   | 'paypal'
   | 'amex'
   | 'visa';
  link: string;
 }

 const cards: ICard[] = [
  {
   label: 'Debit',
   type: 'debit',
   link:
    'https://discover.payoneer.com/payoneer-checkout/en?utm_source=google&utm_medium=cpc&utm_campaign=Lead_SE_CHO_APAC_TH-PH-MY-HK-PK_Generics_MF&gclid=Cj0KCQiA14WdBhD8ARIsANao07jYyDL9R5-Nu3jVoyEJMOulvKbtkKLAEUxeOFjl2oAZ-Q5l9PZL-A0aAugBEALw_wcB#form-anchor',
  },
  {
   label: 'Credit',
   type: 'credit',
   link:
    'https://dashboard.xendit.co/register/1?utm_source=xendit-web&utm_medium=atf&utm_campaign=xenpayments&utm_term=en&utm_content=sign-up-now',
  },
  {
   label: 'Paypal',
   type: 'paypal',
   link:
    'https://www.xoom.com/pay-bills/options/category?countryCode=MX',
  },
  {
   label: 'Visa',
   type: 'visa',
   link:
    'https://exchange.vertofx.com/auth/login',
  },
  {
   label: 'American Express',
   type: 'amex',
   link:
    'https://www.americanexpress.com/en-us/account/login/?inav=iNavLnkLog',
  },
 ];

 const redirect = (link: string) => {
  window.open(link);
 };

 return (
  <Layout>
   <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 gap-x-4 py-10 animate-jump-in'>
    {cards.map((card) => (
     <Card
      key={card.label}
      label={card.label}
      type={card.type}
      action={() => redirect(card.link)}
      isBlock={false}
     />
    ))}
   </div>
  </Layout>
 );
};

export default Payments;
