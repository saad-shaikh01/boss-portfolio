// import React, { useState, useEffect } from 'react';

// const Counter = ({ number }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const targetNumber = number || 100; // Use the prop value or default to 100
//     const increment = Math.ceil(targetNumber / 100); // Calculate increment based on target number

//     const interval = setInterval(() => {
//       if (count < targetNumber) {
//         setCount((prevCount) => prevCount + increment);
//       } else {
//         clearInterval(interval); // Stop the counter when it reaches the target number
//       }
//     }, 100); // Change the interval as needed (milliseconds)

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [count, number]);

//   return <div>{count}</div>;
// };

// export default Counter;



import React, { useState, useEffect } from 'react';
import { SecondaryHeading } from './Text'
const Counter = ({ number, duration, sign, style }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNumber = number || 100; // Use the prop value or default to 100
    const increment = Math.ceil(targetNumber / 100); // Calculate increment based on target number

    // Calculate interval duration based on the target number
    const intervalDuration = Math.max(Math.ceil(targetNumber / 100), duration);

    const interval = setInterval(() => {
      if (count < targetNumber) {
        setCount((prevCount) => prevCount + increment);
      } else {
        clearInterval(interval); // Stop the counter when it reaches the target number
      }
    }, intervalDuration); // Use calculated interval duration

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [count, number]);

  return <SecondaryHeading style={style} title={`${count}${sign}`} />
};

export default Counter;
