import Web3 from "web3";
import Intro from "../components/Intro";
import Nfts from "../components/Nfts";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useState, useEffect } from "react";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

// console.log(contract);
const Main = ({ account }) => {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);

  const getTotalNft = async () => {
    try {
      if (!contract) return;
      const response = await contract.methods.totalNft().call();
      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNft(response);
      // setPage(parseInt(parseInt(response - 1) / 10) + 1);
      setPage(Math.ceil(response / 10));
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();
      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);
  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <>
      <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nfts page={page} mintedNft={mintedNft} />
    </>
  );
};

export default Main;
