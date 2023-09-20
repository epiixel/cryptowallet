import axios from 'axios';
import abi from '../web3/abi';
// import { Flag, Segment } from 'semantic-ui-react'



var LIVE = true;
var HOST = window.location.hostname
export const db = {
  server: HOST.includes("hticoin.com")? 'https://server.hticoin.com':'http://161.35.212.141:5002', //https://server.grwexchange.com //http://161.35.212.141:5002
  gurleyswap: 'https://server.gurleyswap.com',
  ducoin: 'https://server.ducoinexchange.com',
};

export const Contracts = {
  STAKING: {address: "0xbD490fF87ba0E5bFD7F496631F81E9e338e2Dbe5", abi: abi.STAKING}, 
  VAULT: {address: "0xCC0C2aA9ccf114548D06955d5Cc8F1769B57DD30", abi: abi.VAULT}, 
  ROUTER: {address: "0x33F894177d942031a7a17Eb09E32876E3BBe0222", abi: abi.ROUTER},
  FACTORY: {address: "0x268f9A2001ac91BE04b1806FD9A597122D54962d", abi: abi.FACTORY},
  PAIR: {address: "", abi: abi.PAIR},
  ERC20: {address: "", abi: abi.GRW20},
  USD: {address: "0x9AB44a1e6b7dd487b55E7880B550C675D573FAb2", abi: abi.GRW20},
  TOKEN: {address: "0x1E1860Af5402E695F570e0a72c96ff433678C15C", abi: abi.DUC}, 
  NATIVE: {address: "0xc7B596fC9293Ef903e25Cac103fe718612Da83B0", abi: abi.GRW20},
  SALES: {address: "0xD7025C10298C2c7EeEDCCabdd611326e160d4Fe0", abi: abi.SALES},
  SIGNER: {address: "0xcD8b2c35935f496ED30D5209f1A1Da4713F38D4B", abi: abi.GRW20},
  TOOLS: {address: "0xae7f88576599df3122a0c348f220e9136e6f6695", abi: abi.TOOLS}, 
  TOOLSGURLEY: {address: "0x505756791F368282a2A312D23BC3a1380c35de12", abi: abi.TOOLS}, 
  LOCKEDSTAKING: {address: "0xEC8f5F1E58A3E313f54784838eEc020cbB00C70C", abi: abi.TOOLS} 
}

export const Tokens = {
  Native: {
      Name: 'Greenwood',
      Symbol: 'GRW',
      Image: 'https://ducoinexchange.com/assets/grw.9897d069.png',
      Decimal: 18,
      Address: Contracts?.NATIVE?.address,
      ABI: Contracts?.NATIVE?.abi,
  },
  USD: {
      Name: 'Greenwood USD',
      Symbol: 'GUSD',
      Image: 'https://ducoinexchange.com/assets/gusd.d3d67123.png',
      Decimal: 18,
      Address: Contracts?.USD?.address,
      ABI: Contracts?.USD?.abi,
  },
  Token: {
      Name: 'Ducoin',
      Symbol: 'HTI',
      Image: 'https://i.ibb.co/C7SmrWr/2.png',
      Decimal: 18,
      Address: Contracts?.TOKEN?.address,
      ABI: Contracts?.TOKEN?.abi,
      MaxSupply: 2000000
  }
}
export const languages = [
    {
      key: 'EN',
    //   text: 'EN',
      value: 'EN',
      flag: 'us'
    },
    {
      key: 'PT',
    //   text: 'PT',
      value: 'PT',
      flag: 'br'
    }
  ]

  export const percentual = [
    {
      title: 'E',
      days: 365,
      percentual: 0.0666666
    },
    {
      title: 'M',
      days: 730,
      percentual: 0.11666666
    },
    {
      title: 'H',
      days: 1095,
      percentual: 0.16666
    }
]

//HTI 0.002% monthly

