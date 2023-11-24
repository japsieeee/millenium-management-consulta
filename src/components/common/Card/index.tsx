import React from 'react';

export type TCards =
 | 'debit'
 | 'credit'
 | 'paypal'
 | 'amex'
 | 'visa';

interface ICard {
 label: string;
 type: TCards;
 action: () => void;
 isBlock: boolean;
}

const Card: React.FC<ICard> = ({
 label,
 action,
 type,
 isBlock = false,
}) => {
 let color: string;

 switch (type) {
  case 'amex':
   color = 'bg-cyan-600';
   break;
  case 'debit':
   color = 'bg-blue-600';
   break;
  case 'credit':
   color = 'bg-orange-600';
   break;
  case 'paypal':
   color = 'bg-sky-500';
   break;
  case 'visa':
   color = 'bg-blue-800';
   break;
  default:
   color = 'bg-blue-500';
   break;
 }

 return (
  <button
   type='button'
   onClick={action}
   className={`${isBlock && 'w-full'}`}
   title={label}>
   <div
    className={`w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 ${color}`}>
    <img
     alt='card'
     className='relative object-cover w-full h-full rounded-xl opacity-30'
     src='https://i.imgur.com/kGkSg1v.png'
    />

    <div className='w-full px-8 absolute top-8'>
     <div className='flex justify-between'>
      <div className=''>
       <p className='font-light text-left'>
        Name
       </p>
       <p className='font-medium tracking-widest text-left'>
        John Doe
       </p>
      </div>
      <h1 className='font-bold uppercase'>
       {type === 'amex' ? label : `${label} CARD`}
      </h1>
     </div>
     <div className='pt-1'>
      <p className='font-light text-left'>
       Card Number
      </p>
      <p className='font-medium tracking-more-wider text-left'>
       4642 3489 9867 7632
      </p>
     </div>
     <div className='pt-6 pr-6'>
      <div className='flex justify-between'>
       <div className=''>
        <p className='font-light text-xs'>
         Valid
        </p>
        <p className='font-medium tracking-wider text-sm'>
         11/15
        </p>
       </div>
       <div className=''>
        <p className='font-light text-xs'>
         Expiry
        </p>
        <p className='font-medium tracking-wider text-sm'>
         03/25
        </p>
       </div>

       <div className=''>
        <p className='font-light text-xs'>CVV</p>
        <p className='font-bold tracking-more-wider text-sm'>
         ···
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </button>
 );
};

export default Card;
