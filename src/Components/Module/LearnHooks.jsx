import React, { useEffect, useState } from 'react';

const LearnHooks = () => {
    const [count,setCount]=useState(0);
    useEffect(() => {
        console.log(count);

    }, [count]);
  return (
    <div>
        <button onClick={() => setCount (count+1)}> 
          Add Count </button>
    </div>
  );
};

export default LearnHooks;
