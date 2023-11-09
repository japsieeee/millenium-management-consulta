/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import Logo from '../../../public/logo/logo.svg';

const SignIn = () => (
	<Layout>
		<section className='bg-white flex flex-col justify-center items-center lg:min-h-[700px] animate-fade w-full'>
			<div className='w-full flex flex-col items-center justify-center py-8 mx-auto lg:py-0 min-w-[290px] px-5 lg:px-0 lg:w-[400px]'>
				<Link
					to='/'
					className='flex items-center mb-6 text-2xl font-semibold text-gray-900'>
					<img className='w-8 h-8 mr-2' src={Logo} alt='logo' />
					Millenium
				</Link>
				<div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
							Sign in to your account
						</h1>
						<form className='space-y-4 md:space-y-6' action='#'>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900'>
									Your email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
									placeholder='name@company.com'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-medium text-gray-900'>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='••••••••'
									className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
									required
								/>
							</div>
							<div className='flex items-center justify-between'>
								<span className='text-sm font-medium text-primary-600 hover:underline cursor-default text-gray-400'>
									Forgot password?
								</span>
							</div>
							<button
								type='submit'
								className='w-full text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
								Sign in
							</button>
							<p className='text-sm font-light text-gray-500 text-end'>
								No account yet?{' '}
								<Link
									to='/'
									className='font-medium text-primary-600 hover:underline'>
									Sign up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default SignIn;
