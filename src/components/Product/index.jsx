import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import crypto from "crypto";

import "./styles.scss";

import ErrorAlert from "../ErrorAlert";
import SuccessAlert from "../SuccessAlert";

import { getProductSizes } from "../../services/api";
import { addProductBag } from "../../store/actions/actions";

const Product = () => {
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState(null);
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();

  const hash = crypto.randomBytes(6).toString("hex");

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
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
      return;
    }

    dispatch(
      addProductBag({
        ...product,
        size,
        id,
        hash,
        amount: 1,
      })
    );

    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 3000);

    setSize(null);
    return;
  }

  return (
    <div className="product">
      {errorAlert && <ErrorAlert />}
      {successAlert && <SuccessAlert />}
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
