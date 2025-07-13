import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
       
        <div className=" col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href="https://kite-demo.zerodha.com/dashboard" style={{textDecoration: "none"}}>Try demo</a>
            <a href="https://zerodha.com/products/kite" style={{ textDecoration: "none", marginLeft: "50px" }}>Learn more</a>
          </div>
          <div className="mt-3">
            <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802" style={{marginLeft: "50px"}}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
