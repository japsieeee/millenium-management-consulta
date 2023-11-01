/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { BsCheck2 } from 'react-icons/bs';
import { MdEast, MdOutlinePayments, MdOutlinePrivacyTip } from 'react-icons/md';
import Layout from '../../components/layout';
import { SubscriptionCard } from '../../types/subscriptions';
import { BiKey } from 'react-icons/bi';

const Subscriptions = () => {
	const subscriptionsInfo: SubscriptionCard[] = [
		{
			title: 'Sign In',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium ex voluptates dolorum rem obcaecati quam alias vel
      minus adipisci sequi ratione optio possimus ipsam.`,
			link: '/sign-in',
			icon: <BiKey />,
			delay: 500
		},
		{
			title: 'Payment',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      illo, odio error vel ab dolor explicabo nam sed voluptas
      maiores.`,
			link: '/subscriptions/payment',
			icon: <MdOutlinePayments />,
			delay: 700
		},
		{
			title: 'Terms and Privacy',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
      illo, odio error vel ab dolor explicabo nam sed voluptas
      maiores.`,
			link: '/terms-and-privacy',
			icon: <MdOutlinePrivacyTip />,
			delay: 900
		}
	];

	return (
		<Layout>
			<div className="mx-4 flex flex-wrap py-8">
				<div className="w-full lg:mb-24">
					<div className="flex justify-center items-center">
						<div className="hidden md:block">
							<div className="text-center font-semibold">
								<h1 className="text-5xl">
									<span className="text-blue-700 tracking-wide">Flexible </span>
									<span>Plans</span>
								</h1>
								<p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
									Choose a plan that works best for you and
									<br /> your team.
								</p>
							</div>
							<div className="pt-24 flex items-center flex-col lg:flex-row animate-jump-in">
								<div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
									<h1 className="text-black font-semibold text-2xl">Basic</h1>
									<p className="pt-2 tracking-wide">
										<span className="text-gray-400 align-top">$ </span>
										<span className="text-3xl font-semibold">14.99</span>
										<span className="text-gray-400 font-medium">/ monthly</span>
									</p>
									<hr className="mt-4 border-1" />
									<div className="pt-8">
										<p className="font-semibold text-gray-400 text-left">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">Financial Statement Preparation</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Bookkeeping</span> Services
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Basic Tax</span> and Compliance
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">Business Launch Guidance</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Basic</span> Financial Planning
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Basic</span> Financial Analysis
											</span>
										</p>

										<Link to="/">
											<p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white flex items-center justify-center">
												<span className="font-medium">Choose Plan</span>
												<span className="text-[17px] ml-3">
													<MdEast />
												</span>
											</p>
										</Link>
									</div>
								</div>

								<div className="w-80 md:w-96 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125 my-20 lg:my-0">
									<h1 className="text-white font-semibold text-2xl">Pro</h1>
									<p className="pt-2 tracking-wide">
										<span className="text-gray-400 align-top">$ </span>
										<span className="text-3xl font-semibold">19.99</span>
										<span className="text-gray-400 font-medium">/ monthly</span>
									</p>
									<hr className="mt-4 border-1 border-gray-600" />
									<div className="pt-8">
										<p className="font-semibold text-gray-400 text-left">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-white">Detailed </span>
												Financial Statement Prep
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-white">Advanced</span> Bookkeeping
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-white">Comprehensive</span> Tax and Compliance
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-white">Full Business</span> Launch Assistance
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-white">Advanced</span> Financial Planning
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-white">Advanced</span> Financial Analysis
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												Media Library
												<span className="text-white"> Access</span>
											</span>
										</p>

										<Link to="/">
											<p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white flex items-center justify-center">
												<span className="font-medium">Choose Plan</span>
												<span className="text-[17px] ml-3">
													<MdEast />
												</span>
											</p>
										</Link>
									</div>
									<div className="absolute top-4 right-4">
										<p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
											Popular
										</p>
									</div>
								</div>

								<div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
									<h1 className="text-black font-semibold text-2xl">Premium</h1>
									<p className="pt-2 tracking-wide">
										<span className="text-gray-400 align-top">$ </span>
										<span className="text-3xl font-semibold">24.99</span>
										<span className="text-gray-400 font-medium">/ monthly</span>
									</p>
									<hr className="mt-4 border-1" />
									<div className="pt-8">
										<p className="font-semibold text-gray-400 text-left">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Complete</span> Financial Support
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Full-Service</span> Bookkeeping
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Tailored</span> Tax and Compliance
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Business Launch</span> Excellence
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Advanced</span> Financial Planning
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Advanced</span> Financial Analysis
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												Media Library
												<span className="text-black"> Access</span>
											</span>
										</p>
										<p className="font-semibold text-gray-400 text-left pt-5">
											<span className="inline-flex">
												<BsCheck2 />
											</span>
											<span className="pl-2">
												<span className="text-black">Priority</span> Support
											</span>
										</p>

										<Link to="/">
											<p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white flex items-center justify-center">
												<span className="font-medium">Choose Plan</span>
												<span className="text-[17px] ml-3">
													<MdEast />
												</span>
											</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{subscriptionsInfo.map((subscription, index) => (
					<div
						className={`w-full px-4 md:w-1/2 lg:w-1/3 animate-jump-in animate-delay-[${subscription.delay}ms]`}
						key={index}
					>
						<Link to={subscription.link} key={index}>
							<div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
								<div className="mx-auto mb-7 inline-block text-[40px]">{subscription.icon}</div>
								<div>
									<h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
										{subscription.title}
									</h3>
									<p className="text-base font-medium text-body-color">{subscription.description}</p>
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
