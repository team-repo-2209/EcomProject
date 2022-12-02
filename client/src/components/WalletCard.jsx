import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [connButtonText, setConnButtonText] = useState("");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Please Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.etherum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(balance);
      });
  };
  return (
    <Card>
      <div className="WalletCard">
        <h4> {"Connection to your crypto wallet"} </h4>
        <button onClick={connectWalletHandler}>{connButtonText}Connect</button>
        {/* <div className="account">
          <h3>Address: {defaultAccount}</h3>
        </div>
        <div className="balanceDisplay">
          <h3>Balance: {userBalance}</h3>
        </div> */}
        {errorMessage}
      </div>
    </Card>
  );
};

export default WalletCard;
