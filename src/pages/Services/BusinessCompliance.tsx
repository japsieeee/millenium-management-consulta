import Layout from '../../components/layout';
import Taxation from '../../../public/images/png/taxation.png';
import Permit from '../../../public/images/png/permit.png';

const BusinessCompliance = () => (
  <Layout>
    <div className="p-6 lg:p-10 leading-tight">
      <h1 className="text-[22px] lg:text-[40px] text-indigo-900 font-extrabold animate-fade-down animate-delay-[500ms]">
        Business Compliance
      </h1>
      <p className="text-gray-700 font-bold text-[18px] lg:text-[28px] animate-fade-down animate-delay-[300ms]">
        {'<Insert any text here>'}
      </p>

      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
        <div className="w-full lg:w-3/6 py-10 flex justify-center lg:justify-start">
          <img
            src={Taxation}
            alt="taxation"
            className="lg:h-full animate-fade-down"
          />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">
            Taxation and BIR Reportorial
          </h1>

          <p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
            Help clients prepare accurate and compliant financial statements,
            including income statements, balance sheets, and cash flow
            statements. These statements are essential for financial reporting
            and decision- making.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-10 mt-10 items-center">
        <div className="w-full lg:w-3/6 py-10 flex justify-center lg:justify-end">
          <img src={Permit} alt="permit" className="h-full animate-fade-down" />
        </div>
        <div className="w-full lg:w-3/6">
          <h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">
            Business Licensing and Permit
          </h1>

          <p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
            Assist with day-to-day financial record-keeping, which includes
            tracking transactions, managing accounts payable and receivable, and
            reconciling bank statements. This ensures financial data is up to
            date and accurate
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default BusinessCompliance;
