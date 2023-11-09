import Layout from '../../components/layout';

const Marketing = () => (
	<Layout>
		<div className='p-6 lg:p-10 leading-tight'>
			<h1 className='text-[22px] lg:text-[40px] text-indigo-900 font-extrabold animate-fade-down animate-delay-[500ms]'>
				Marketing
			</h1>
			<p className='text-gray-700 font-bold text-[18px] lg:text-[28px] animate-fade-down animate-delay-[300ms]'>
				{'<Insert any text here>'}
			</p>

			<div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
				<div className='w-full lg:w-3/6 py-10 flex justify-center lg:justify-start'>
					<img
						src='/images/png/graphic-designing.png'
						alt='graphic designing'
						className='lg:h-full animate-fade-down'
					/>
				</div>
				<div className='w-full lg:w-3/6'>
					<h1 className='text-[20px] lg:text-[30px] animate-fade-down font-bold'>
						Graphic Designing
					</h1>

					<p className='text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down'>
						Effective graphic design not only enhances your online presence but
						also fosters brand recognition, trust, and customer loyalty. It
						serves as a powerful visual communication tool that conveys your
						message and sets you apart in a competitive digital landscape,
						ultimately leading to business growth and success.
					</p>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row-reverse gap-10 mt-10 items-center'>
				<div className='w-full lg:w-3/6 py-10 flex justify-center lg:justify-end'>
					<img
						src='/images/png/web-dev.png'
						alt='web dev'
						className='h-full animate-fade-down'
					/>
				</div>
				<div className='w-full lg:w-3/6'>
					<h1 className='text-[20px] lg:text-[30px] animate-fade-down font-bold'>
						Web Development
					</h1>

					<p className='text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down'>
						Web Development is the art and science of creating, designing, and
						maintaining your online presence. It involves the use of various
						programming languages, frameworks, and technologies to build
						functional, visually appealing, and user-friendly online assets that
						cater to your unique needs and goals
					</p>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
				<div className='w-full lg:w-3/6 py-10 flex justify-center lg:justify-start'>
					<img
						src='/images/png/advertising.png'
						alt='advertising'
						className='lg:h-full animate-fade-down'
					/>
				</div>
				<div className='w-full lg:w-3/6'>
					<h1 className='text-[20px] lg:text-[30px] animate-fade-down font-bold'>
						Advertising and Promotion
					</h1>

					<p className='text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down'>
						{` Advertising and Promotion is a strategic fusion of creativity and
            data-driven precision, designed to enhance your brand's reach and
            impact. We craft compelling campaigns that seamlessly integrate into
            your online presence, leveraging various channels and techniques to
            engage, captivate, and convert your target audience, all in
            alignment with your unique goals and vision.`}
					</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default Marketing;
