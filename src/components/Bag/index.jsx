import React /*{ useState, useEffect }*/ from "react";
import { FiFrown, FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux";

import "./styles.scss";

import BagCard from "../BagCard";

// import { formatPrice } from "../../utils";

const Bag = ({ handleBag }) => {
  const bag = useSelector((state) => state.productsBag);
  console.log(bag);
  const bagSize = bag.length;

  // const [subTotal, setSubTotal] = useState(0);

  // let calculeSubTotal = 0;

  // useEffect(() => {
  //   setSubTotal(calculeSubTotal);
  // }, [calculeSubTotal]);

  // function handleSubTotal() {
  //   return bag
  //     .map((product) => formatPrice(product.actual_price))
  //     .reduce((total, item) => {
  //       return total + item;
  //     }, 0);
  // }

  // calculeSubTotal = handleSubTotal();

  return (
    <div className="bag">
      <header className="bag__header">
        <div className="bag__header-group">
          <button className="bag__button" onClick={handleBag}>
            <FiArrowLeft size={24} color="#f2f2f2" />
          </button>

          <div className="bag__title">
            <h3>Sacola ({bagSize})</h3>
          </div>
        </div>
      </header>

      {bagSize === 0 ? (
        <div className="bag__products--empty">
          <p>Sua sacola está vazia</p>
          <FiFrown size={20} color="#393939" />
        </div>
      ) : (
        <div className="bag__products">
          {bag.map((product, index) => (
            <BagCard product={product} key={index} />
          ))}
        </div>
      )}

      <footer className="bag__footer">
        <h3>Subtotal: R$ 0 </h3>
      </footer>
    </div>
  );
};

export default Bag;
