import React from "react";

const Item = ({ product }) => {
  return (
    <div>
      <h4>
        - 상품명: {product.title} / 가격: {product.price} 원 / 수량: {product.quantity} 개 / 총액: {product.total} 원 / 할인율: {product.discountPercentage}% / 할인된 금액: {product.discountedPrice}{" "}
        원
      </h4>
    </div>
  );
};

export default Item;
