import React from 'react';

function Button({ text }) {
  return (
    <div>
      <button className='bg-gray-900 py-3 px-8 rounded-sm my-4 hover:bg-gray-800  ease-in-out duration-300'>
        {text}
      </button>
    </div>
  );
}

export default Button;
