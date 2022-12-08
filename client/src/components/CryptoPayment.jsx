import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./CyptoErrorMessage";
import TxList from "./TxList";
import styles from "../styles/Checkout.module.css";
import Button from "react-bootstrap/Button";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  const initialValues = {
    address: "0x61681515a72dcc10d626e45c531bbd22a196df6c",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.box}>
        <main className="mt-4 p-4">
          <h1>Submit ETH Payment</h1>
          <div className="">
            <div className="my-3">
              <input
                defaultValue={initialValues.address}
                type="password"
                name="addr"
                className="input input-bordered block w-full focus:ring focus:outline-none"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <Button variant="dark" type="submit">
            Pay now
          </Button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}
