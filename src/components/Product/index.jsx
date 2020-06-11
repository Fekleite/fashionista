import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";

import { getProductSizes } from "../../services/api";

import { addProductBag } from "../../store/actions/actions";

const Product = () => {
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState(null);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(products[id]);
  }, [products, id]);

  useEffect(() => {
    getProductSizes(id, products).then(setSizes);
  }, [id, products]);

  function handleSize(item) {
    setSize(item);
  }

  function handleClickAddProduct() {
    if (size === null) {
      alert("Escolha o tamanho");
      return;
    }
    dispatch(
      addProductBag({
        ...product,
        size,
        id,
      })
    );
  }

  return (
    <div className="product">
      <div className="product__back-link">
        <Link to="/">
          <FiArrowLeft color="#121111" size={24} />
        </Link>
      </div>
      <div className="product__content">
        <div className="product__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product__information">
          <h2> {product.name}</h2>
          <p>Cor: {product.color} </p>
          <div className="product__prices">
            <div className="product__prices--row">
              {product.regular_price !== product.actual_price ? (
                <>
                  <span className="product__price--sale">
                    {product.regular_price}
                  </span>
                  <span className="product__price">{product.actual_price}</span>
                </>
              ) : (
                <span className="product__price">{product.actual_price}</span>
              )}
            </div>
            <span className="product__price--installments">
              {product.installments}
            </span>
          </div>
          <p>Escolha um tamanho:</p>
          <div className="product__sizes">
            {sizes.map((item, index) => (
              <button
                className="product__button--size"
                key={index}
                onClick={() => handleSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="product__button" onClick={handleClickAddProduct}>
            Adicionar à sacola
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
