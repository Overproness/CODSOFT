import { useState } from "react";

const App = () => {
  const [count, countUpdater] = useState(0);
  return (
    <>
      <button onClick={() => countUpdater(count + 1)}>Increment</button>
      <p>{count}</p>
    </>
  );
};

export default App;
