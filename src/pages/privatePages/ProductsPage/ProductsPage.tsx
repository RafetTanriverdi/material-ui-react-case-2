import { useState } from "react";

const ProductsPage = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("This is a test error!"); // Simulating an error
  }

  return (
    <div>
      <h2>No errors yet!</h2>
      <button onClick={() => setHasError(true)}>Trigger Error</button>
    </div>
  )
}

export default ProductsPage