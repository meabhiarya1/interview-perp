import React from "react";

const ProductList = ({ id, title, imgUrl, price }) => {
  return (
    <div>
      <div key={id}>
        <img key={id} src={imgUrl} alt={title} />
        {title}
        <div>{price}</div>
      </div>
    </div>
  );
};

export default ProductList;
