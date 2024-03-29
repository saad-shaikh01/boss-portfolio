import React from 'react';

function Button({ text, style, onClick }) {
  return (
    <div>
      <button
       data-aos="fade-out"
       data-aos-duration="9000"
        onClick={onClick}
        className={`bg-gray-900 w-[160px] text-white py-3  rounded-sm my-4 hover:bg-gray-800 ease-in-out duration-300 ${style}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
