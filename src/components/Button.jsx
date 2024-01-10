import React from 'react';

function Button({ text, style }) {
  return (
    <div>
      <button
        className={`bg-gray-900 w-[160px] text-white py-3  rounded-sm my-4 hover:bg-gray-800 ease-in-out duration-300 ${style}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
