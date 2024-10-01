import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // RootState, store'un genel durum tipini ifade eder.

export const Navbar: React.FC = () => {
  // `useSelector` içindeki `store` parametresine tip ekledik.
  const { quantity } = useSelector((store: RootState) => store.cart);
  console.log(useSelector((store: RootState) => store.cart));
  return (
    <nav>
      <div className="navbar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <BsFillBasketFill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
