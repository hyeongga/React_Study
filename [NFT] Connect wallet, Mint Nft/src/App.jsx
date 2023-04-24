import { useEffect, useState } from "react";
import Web3 from "web3";
import axios from "axios";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  NFT_ABI,
  NFT_ADDRESS,
} from "./Web3.config";

const web3 = new Web3(window.ethereum); //메타마스크 지갑 연결
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS); //Remix에서 가지고 오기
const nftContract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);

function App() {
  const [account, setAccount] = useState("");
  const [myBalance, setMyBalance] = useState();
  const [nftMetadata, setNftMetadata] = useState();

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogOut = () => {
    setAccount("");
  };

  const onClickBalance = async () => {
    try {
      if (!account || !contract) return;

      const balance = await contract.methods.balanceOf(account).call(); //지갑 잔고 조회

      setMyBalance(web3.utils.fromWei(balance));
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMint = async () => {
    try {
      if (!account) return;

      const uri =
        "https://gateway.pinata.cloud/ipfs/QmTiJEjE44cfESVmTTRnGH2jMHGbjZ5xGDLqL1WJjWj6AC";

      const result = await nftContract.methods.mintNft(uri).send({
        from: account,
      }); //nft 발행

      if (!result.status) return;

      /*어려운Ver. : 
      balanceOf -> 마지막 nft 조회
      tokenOfOwnerByIndex -> 마지막 nft의 token ID조회
      token ID에 해당하는 URI를call을 통해서 가지고 옴*/

      // const balanceOf = await nftContract.methods.balanceOf(account).call();
      // const tokenOfOwnerByIndex = await nftContract.methods
      //   .tokenOfOwnerByIndex(account, parseInt(balanceOf) - 1)
      //   .call();

      // console.log(balanceOf);
      // console.log(tokenOfOwnerByIndex);

      // const tokenURI = await nftContract.methods
      //   .tokenURI(tokenOfOwnerByIndex)
      //   .call();

      // const response = await axios.get(tokenURI);

      const response = await axios.get(uri); //발행된 NFT정보 가지고오기
      setNftMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div>
          <div className="text-main font-semibold text-2xl">
            {account.substring(0, 4)}...
            {account.substring(account.length - 4)}
            <button className="ml-4 btn-style" onClick={onClickLogOut}>
              로그아웃
            </button>
          </div>
          <div className="flex items-center">
            {myBalance && <div>{myBalance} tMatic</div>}
            <button className="ml-2 btn-style" onClick={onClickBalance}>
              잔액 조회
            </button>
          </div>
          <div className="flex items-center mt-4">
            {nftMetadata && (
              <div>
                <img src={nftMetadata.image} alt="NFT" className="" />
                <div>Name : {nftMetadata.name}</div>
                <div>Description : {nftMetadata.description}</div>
                {nftMetadata.attributes.map((v, i) => {
                  return (
                    <div>
                      <span>{v.trait_type} : </span>
                      <span>{v.value}</span>
                    </div>
                  );
                })}
              </div>
            )}
            <button className="ml-2 btn-style" onClick={onClickMint}>
              민팅
            </button>
          </div>
        </div>
      ) : (
        <button className="btn-style" onClick={onClickAccount}>
          <img
            className="w-12"
            src={`${process.env.PUBLIC_URL}/images/metamask.png`}
          />
        </button>
      )}
    </div>
  );
}

export default App;
