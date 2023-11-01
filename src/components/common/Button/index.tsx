import React from 'react';

interface IButton {
	label: string;
	action: () => void;
	isBlock: boolean;
}

const Button: React.FC<IButton> = ({ label, action, isBlock = false }) => (
	<button
		type="button"
		onClick={action}
		className={`bg-indigo-900 text-white hover:bg-indigo-700 active:bg-indigo-950 duration-200 p-2 rounded text-[16px] lg:text-[24px] animate-fade-down ${isBlock &&
			'w-full'}`}
	>
		{label}
	</button>
);

export default Button;
