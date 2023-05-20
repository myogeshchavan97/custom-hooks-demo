import React from 'react';
import { products } from '../utils/products';

const Products = ({ cart, addProduct, removeProduct }) => {
  return (
    <div>
      <div className='cart-info'>
        {cart.length} products are added in the cart.
      </div>
      <ul className='products-list'>
        {products.map((product) => {
          const { id, name, image, price } = product;
          return (
            <li key={id} className='product'>
              <img src={image} alt={name} />
              <div>
                <div>{name}</div>
                <div className='price'>{price}</div>
                <button className='btn' onClick={() => addProduct(product)}>
                  Add to cart
                </button>
                <button className='btn' onClick={() => removeProduct(id)}>
                  Remove from cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
