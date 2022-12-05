import { useState } from "react";

import Card from "react-bootstrap/Card";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
          setConnButtonText("Wallet Connected");
        });
    } else {
      setErrorMessage("Please Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  return (
    <Card>
      <div className="WalletCard">
        <h4> {"Connect to your crypto wallet!"} </h4>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div className="account">
          <h3>Account Address: {defaultAccount}</h3>
        </div>

        {errorMessage}
      </div>
    </Card>
  );
};

export default WalletCard;
