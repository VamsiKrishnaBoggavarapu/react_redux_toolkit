import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { showLoader } from "./slices/loaderSlice";
import { Products } from "./features/products/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header"> Hello Redux Toolkit</header>
      <Products />
    </div>
  );
}

export default App;
