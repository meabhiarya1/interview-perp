import useFetch from "../Hooks/useFetch";
import ProductList from "./ProductList";

const Dashboard = () => {
  const products = useFetch();

  return (
    <div className="font-bold text-2xl bg-dark ">
      <h1 className="text-purple-600">Dashboard</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div>
            <ProductList
              id={product.id}
              title={product.title}
              imgUrl={product.image}
              price={product.price}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
