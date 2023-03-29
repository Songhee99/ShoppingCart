import React from "react";
import Item from "./Item";

const ItemList = ({ cart, setCart }) => {
  return (
    <>
      <h2>- 유저 아이디: {cart.userId}</h2>
      <h2>- 품목 수: {cart.totalProducts} 종류</h2>
      {cart.products !== undefined
        ? cart.products.map((product, idx) => {
            return <Item product={product}></Item>;
          })
        : null}
      <h2>- 총 수량: {cart.totalQuantity} 개</h2>
      <h2>- 할인 받은 금액: {cart.discountedTotal} 원</h2>
      <h2>- 총 금액: {cart.total} 원</h2>
    </>
  );
};

export default ItemList;
