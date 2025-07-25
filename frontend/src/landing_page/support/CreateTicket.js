import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-muted  ">To create a ticket, select a relevant topic</h1>
      
      <div className="col-4 p-5 mt-2 mb-2">
        <h4 className=" " style={{lineHeight: "2.5"}}>
          <i class="fa-solid fa-circle-plus"></i>Account Opening
        </h4>
        <a href ="https://support.zerodha.com/category/account-opening/resident-individual" style={{textDecoration:"none", lineHeight:"2.5"}}>Resident individual</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration:"none", lineHeight:"2.5"}}>Minor</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/glossary" style={{textDecoration:"none", lineHeight:"2.5"}}>Glossary</a><br/>
      </div>
      <div className="col-4 p-5 mt-2 mb-2">
        <h4 className=" " style={{lineHeight: "2.5"}}>
          <i class="fa-sharp-duotone fa-solid fa-circle-user"></i>Your Zerodha Account
        </h4>
        <a href ="https://support.zerodha.com/category/account-opening/resident-individual" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration:"none", lineHeight:"2.5"}}>Account modification</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/glossary" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of securities</a><br/>
      </div>
      <div className="col-4 p-5 mt-2 mb-2">
        <h4 className=" " style={{lineHeight: "2.5"}}>
          <i class="fa-sharp fa-solid fa-square"></i>Kite
        </h4>
        <a href ="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Charts and orders</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/glossary" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a><br/>
      </div>
       <div className="col-4 p-5 mt-2 mb-2">
        <h4 className=" " style={{lineHeight: "2.5"}}>
          <i class="fa-sharp fa-solid fa-envelope"></i>Funds
        </h4>
        <a href ="https://support.zerodha.com/category/account-opening/resident-individual" style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw money</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Add bank accounts</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a><br/>
      </div>
       <div className="col-4 p-5 mt-2 mb-2">
        <h4 className=" " style={{lineHeight: "2.5"}}>
         <i class="fa-sharp fa-solid fa-circle-exclamation"></i>Console
        </h4>
        <a href ="https://support.zerodha.com/category/account-opening/resident-individual" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/glossary" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br/>
      </div>
       <div className="col-4 p-5 mt-2 mb-2">
        <h4 className=" " style={{lineHeight: "2.5"}}>
          <i class="fa-sharp fa-solid fa-circle"></i>Coin
        </h4>
        <a href ="https://support.zerodha.com/category/account-opening/resident-individual" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual funds</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Fixed Deposit (FD)</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration:"none", lineHeight:"2.5"}}>Features on Coin</a><br/>
        <a href="https://support.zerodha.com/category/account-opening/glossary" style={{textDecoration:"none", lineHeight:"2.5"}}>Payments and Orders</a><br/>
      </div>
      
      </div>
    </div>
  );
}

export default CreateTicket;
