import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { connect, useDispatch } from "react-redux";

import "./styles.scss";

import { getProduct, getProductSizes } from "../../services/api";

import { setProductsBag } from "../../store/actions/actions";

const Product = ({ products }) => {
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState(null);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    async function handleGetProduct() {
      getProduct(id, products).then(setProduct);
    }

    handleGetProduct();
  }, [id, products]);

  useEffect(() => {
    async function handleGetSizes() {
      getProductSizes(id, products).then(setSizes);
    }
    handleGetSizes();
  }, [id, products]);

  function handleSize(item) {
    setSize(item);
  }

  function handleClick() {
    if (size === null) {
      alert("Escolha um tamanho");
      return;
    }
    const productBag = {
      id: id,
      image: product.image,
      name: product.name,
      price: product.actual_price,
      installments: product.installments,
      size,
    };

    dispatch(setProductsBag(productBag));
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
              <span className="product__price--sale">
                {product.regular_price}
              </span>
              <span className="product__price">{product.actual_price}</span>
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
          <button className="product__button" onClick={handleClick}>
            Adicionar à sacola
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Product);
