import React, { useState } from "react";

import axios from "axios";
import "./BuyActionWindow.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SellActionWindow = ({ uid }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSell = () => {
    axios.post(`${BACKEND_URL}/newOrder`, {
      name: uid,
      qty,
      price,
      mode: "SELL",
    }, { withCredentials: true }).then(() => setSuccess(true));
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Sell {uid}</h3>
      </div>
      <div className="inputs">
        <fieldset>
          <legend>Qty</legend>
          <input
            type="number"
            value={qty}
            min={1}
            onChange={e => setQty(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Price</legend>
          <input
            type="number"
            value={price}
            min={0}
            onChange={e => setPrice(e.target.value)}
          />
        </fieldset>
      </div>
      <div className="buttons">
        <button className="btn btn-blue" onClick={handleSell}>Sell</button>
      </div>
      {success && <div>Sell order placed!</div>}
    </div>
  );
};

export default SellActionWindow;
