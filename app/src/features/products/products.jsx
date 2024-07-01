import React, { Suspense, useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productsApi";

const Images = lazy(() => import("./products.jsx"));

export const Products = () => {
  const dispatch = useDispatch();
  const { loading = false, products = [] } = useSelector(
    (x) => x?.products || {}
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? <h1>Loadding.. </h1> : null}
      {products && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
          {products.map((item) => (
            <div style={{ width: "200px", height: "350px" }}>
              <h3>{item.title}</h3>
              <h4>{item.pricec}</h4>
              <Suspense fallback={<p>Loading...</p>}>
                <Images item={item} />
              </Suspense>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Image = ({ item }) => {
  return (
    <img
      style={{ width: "100px", height: "100px" }}
      src={item.image}
      alt={item.image}></img>
  );
};
