import "./App.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "./constant/constant";
import Login from "./components/Login.jsx";
import Connected from "./components/Connected";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected " + address);
        setIsConnected(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Metamask not detected in browser");
    }
  }

  return (
    <div className="App">
      {isConnected ? (
        <Connected account={account} />
      ) : (
        <Login connectWallet={connectToMetamask} />
      )}
    </div>
  );
}

export default App;
