import React from "react";

function Universe() {
  
  const imgStyle = { width: "120px", height: "auto", objectFit: "contain" };
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p >
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={imgStyle} />

          <p className="mt-3">
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div >
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/zerodhaFundhouse.png" style={imgStyle} />
          <p className="mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/sensibullLogo.svg" style={imgStyle} />
          <p className="mt-3">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/tijori.svg" style={imgStyle} />
          <p className="mt-3">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={imgStyle} />
          <p className="mt-3">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={imgStyle} />
          <p className="mt-3">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{ width: '20%' , margin: '0 auto' }}>Sign Up Now</button>
      </div>
    </div>
  );
}

export default Universe;
