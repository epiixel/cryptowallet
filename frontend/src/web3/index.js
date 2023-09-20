import { Networks } from './networks';
import { ethers } from "ethers";
// import { 
//   ThirdwebProvider,
//   metamaskWallet,
//   coinbaseWallet,
//   walletConnect,
//   safeWallet,
//   useNetwork } from "@thirdweb-dev/react";
  
  const defaultChainId = 5665;

export const MainProvider = async () => {
  const provider = new ethers.providers.JsonRpcProvider(Networks[defaultChainId].rpcUrls);
    return provider;
}

  export const SignContract = (_contract, _abi, _signer) => {  
    const Contract = new ethers.Contract(_contract, _abi, _signer);
    return Contract;
};

export const chain = {
  chain: Networks[defaultChainId]?.chainName,
  chainId: Networks[defaultChainId]?.chainId,
  explorers: {},
  faucets: [],
  icon:  {
    url: 'https://ducoinexchange.com/assets/grw.9897d069.png', width: 1800, height: 1800, format: 'png'
  },
  infoURL: "https://hticoin.com",
  name: Networks[defaultChainId]?.chainName,
  nativeCurrency:  {name: Networks[defaultChainId]?.nativeCurrency.name, symbol: Networks[defaultChainId]?.nativeCurrency.symbol, decimals: Networks[defaultChainId]?.nativeCurrency.decimals},
  networkId: Networks[defaultChainId]?.chainId,
  rpc: [Networks[defaultChainId]?.rpcUrls],
  shortName: Networks[defaultChainId]?.chainName,
  slip44: 700,
  slug: Networks[defaultChainId]?.chainName,
  testnet: false
}

// export const walletConnectConfig = walletConnect({
//   meta: {
//     name: "HTICoin"
//   },
//   projectId: "e82c2efecf9d7aadc1c79d83b2f1eaf3",
//   theme: "dark"
// });

// export const ChangeToNetwork = () => {
//   const [, switchNetwork] = useNetwork();
//   switchNetwork(chain)
// }