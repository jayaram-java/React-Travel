

import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>

      <h2>Counter operation</h2>
      <p>Current count: {count}</p>

      <button onClick={() => setCount(count + 1)} >Increase</button>

      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }} >Decrease</button>

    </div>
  )
}

export default Counter
