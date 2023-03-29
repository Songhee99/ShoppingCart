import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  const cartsURL = "https://dummyjson.com/carts";
  const [data, setData] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(cartsURL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setCarts(result.carts);
        setCart(result.carts[0]);
      })
      .catch((error) => console.log("error".error));
  }, []);

  return (
    <>
      <h1>{cart.userId}의 장바구니😅...</h1>
      <ItemList cart={cart} setCart={setCart} />;
    </>
  );
}

export default App;
