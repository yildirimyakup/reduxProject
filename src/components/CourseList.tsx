import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { RootState } from "../store"; // RootState, store'un genel tipidir
import { CartItem } from "../courseItems";

const CourseList: React.FC = () => {
  const { cartItems, quantity, total } = useSelector(
    (store: RootState) => store.cart
  );

  const handleClearCart = () => {};

  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <h4>bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item: CartItem) => (
              <CourseItem key={item.id} {...item} />
            ))}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button className="cartClearButton" onClick={handleClearCart}>
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
