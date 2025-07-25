import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <br />
            <br />
            <br />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <p style={{ color: "#222", fontWeight: "bold" }}>Company</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span>About</span>
              <span>Philosophy</span>
              <span>Press & media</span>
              <span>Careers</span>
              <span>Zerodha Cares (CSR)</span>
              <span>Zerodha.tech</span>
              <span>Open source</span>
            </div>
          </div>
          <div className="col">
            <p style={{ color: "#222", fontWeight: "bold" }}>Support</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span>Contact us</span>
              <span>Support portal</span>
              <span>How to file a complaint?</span>
              <span>Status of your complaints</span>
              <span>Bulletin</span>
              <span>Circular</span>
              <span>Z-Connect blog</span>
              <span>Downloads</span>
            </div>
          </div>
          <div className="col">
            <p style={{ color: "#222", fontWeight: "bold" }}>Account</p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span>Open demat account</span>
              <span>Minor demat account</span>
              <span>NRI demat account</span>
              <span>Commodity</span>
              <span>Dematerialisation</span>
              <span>Fund transfer</span>
              <span>MTF</span>
              <span>Referral program</span>
            </div>
          </div>
        </div>
        <div className=" mt-5  text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a
              href="https://smartodr.in/login"
              style={{ textDecoration: "none" }}
            >
              Smart Online Dispute Resolution
            </a>{" "}
            |
            <a
              href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
              style={{ textDecoration: "none" }}
            >
              Grievances Redressal Mechanism
            </a>{" "}
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha"
              style={{ textDecoration: "none" }}
            >
              create a ticket here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
