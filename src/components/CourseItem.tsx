import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../control/cartSlice"; // Redux aksiyonları eklendi
import { CartItem } from "../courseItems";

const CourseItem: React.FC<CartItem> = ({
  id,
  title,
  price,
  img,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addItem({ id, title, price, quantity: 1, img }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(removeItem({ id }));
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="cartItem">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button onClick={handleIncrease} className="cartQuantityButton">
            <BsChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button onClick={handleDecrease} className="cartQuantityButton">
            <BsChevronDown />
          </button>
        </div>
      </div>
      <button className="cartDeleteButtton" onClick={handleRemove}>
        Sil
      </button>
    </div>
  );
};

export default CourseItem;
