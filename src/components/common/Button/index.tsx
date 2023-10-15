import React from 'react';

interface IButton {
  label: string;
  action: () => void;
  isBlock?: boolean;
}

const Button: React.FC<IButton> = ({ label, action, isBlock = false }) => {
  return (
    <button
      onClick={action}
      className={`bg-indigo-900 text-white hover:bg-indigo-700 active:bg-indigo-950 duration-200 p-2 rounded ${
        isBlock && 'w-full'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
