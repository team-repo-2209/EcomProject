import { useState } from "react";
import styles from "../styles/Profile.module.css";
import meta from "../styles/meta.png";
import Button from "react-bootstrap/esm/Button";

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
    <div className={styles.walletCard}>
      <div className="WalletCard">
        <h4> {"Connect crypto wallet"} </h4>
        <Button variant="dark" onClick={connectWalletHandler}>
          {connButtonText}
        </Button>
        <div className="account">
          <div>
            <img src={meta} height={80} width={80} alt="Meta" />
          </div>
          <h3>{defaultAccount}</h3>
        </div>

        {errorMessage}
      </div>
    </div>
  );
};

export default WalletCard;
