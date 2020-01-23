import React, { useState, useEffect } from "react";

function Hook() {
  const [count, setCount] = useState(null); // null or 0

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className='hook'>
      <h4> With Hooks </h4>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr />
      <small>No class. A function. Looks more like javascript. </small>
    </div>
  );
}

export default Hook;
