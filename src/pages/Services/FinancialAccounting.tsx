import Layout from '../../components/layout';

const FinancialAccounting = () => (
	<Layout>
		<div className='p-6 lg:p-10 leading-tight'>
			<h1 className='text-[22px] lg:text-[40px] text-indigo-900 font-extrabold animate-fade-down animate-delay-[500ms]'>
				Financial Accounting
			</h1>
			<p className='text-gray-700 font-bold text-[18px] lg:text-[28px] animate-fade-down animate-delay-[300ms]'>
				{'<Insert any text here>'}
			</p>

			<div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
				<div className='w-full lg:w-3/6 py-10 flex justify-center lg:justify-start'>
					<img
						src='/images/png/report.png'
						alt='report'
						className='lg:h-full animate-fade-down'
					/>
				</div>
				<div className='w-full lg:w-3/6'>
					<h1 className='text-[20px] lg:text-[30px] animate-fade-down font-bold'>
						Financial Reports Preparation
					</h1>

					<p className='text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down'>
						Help clients successfully launch their businesses by providing
						guidance on marketing strategies, customer acquisition, and initial
						operational setup. Offer guidance and tools to help individuals
						choose a suitable business name that complies with legal
						requirements and aligns with their brand identity.
					</p>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row-reverse gap-10 mt-10 items-center'>
				<div className='w-full lg:w-3/6 py-10 flex justify-center lg:justify-end'>
					<img
						src='/images/png/planning.png'
						alt='planning'
						className='h-full animate-fade-down'
					/>
				</div>
				<div className='w-full lg:w-3/6'>
					<h1 className='text-[20px] lg:text-[30px] animate-fade-down font-bold'>
						Financial Planning and Budgeting
					</h1>

					<p className='text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down'>
						Provide expertise in creating realistic financial budgets and plans,
						including revenue projections, expense management, and funding
						strategies.
					</p>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
				<div className='w-full lg:w-3/6 py-10 flex justify-center lg:justify-start'>
					<img
						src='/images/png/evaluation.png'
						alt='evaluation'
						className='lg:h-full animate-fade-down'
					/>
				</div>
				<div className='w-full lg:w-3/6'>
					<h1 className='text-[20px] lg:text-[30px] animate-fade-down font-bold'>
						Financial Analysis and Evaluation
					</h1>

					<p className='text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down'>
						Help clients successfully launch their businesses by providing
						guidance on marketing strategies, customer acquisition, and initial
						operational setup. Offer guidance and tools to help individuals
						choose a suitable business name that complies with legal
						requirements and aligns with their brand identity.
					</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default FinancialAccounting;
