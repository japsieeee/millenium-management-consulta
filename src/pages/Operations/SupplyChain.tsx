import Layout from '../../components/layout';
import InventoryOptimization from '../../../public/images/png/optimization.png';
import RelationshipManagement from '../../../public/images/png/relationship-management.png';

const SupplyChain = () => (
	<Layout>
		<div className="p-6 lg:p-10 leading-tight">
			<h1 className="text-[22px] lg:text-[40px] text-indigo-900 font-extrabold animate-fade-down animate-delay-[500ms]">
				Supply Chain
			</h1>
			<p className="text-gray-700 font-bold text-[18px] lg:text-[28px] animate-fade-down animate-delay-[300ms]">
				{'<Insert any text here>'}
			</p>

			<div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
				<div className="w-full lg:w-2/6 py-10 flex justify-center lg:justify-start">
					<img src={RelationshipManagement} alt="report" className="lg:h-full animate-fade-down" />
				</div>
				<div className="w-full lg:w-4/6">
					<h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">
						Supplier Relationship Management
					</h1>

					<p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sapiente rerum nulla aliquid
						odit dolore, quasi obcaecati, rem molestiae suscipit repudiandae maxime sunt? Dolore.
					</p>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row-reverse gap-10 mt-10 items-center">
				<div className="w-full lg:w-3/6 py-10 flex justify-center lg:justify-end">
					<img src={InventoryOptimization} alt="planning" className="h-full animate-fade-down" />
				</div>
				<div className="w-full lg:w-3/6">
					<h1 className="text-[20px] lg:text-[30px] animate-fade-down font-bold">Inventory Optimization</h1>

					<p className="text-gray-700 text-[16px] lg:text-[20px] font-medium mt-5 animate-fade-down">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque nemo autem hic magni sed
						nostrum harum veniam praesentium quidem?
					</p>
				</div>
			</div>
		</div>
	</Layout>
);

export default SupplyChain;
