import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowDown, MdSwapHorizontalCircle } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { BiCopy } from 'react-icons/bi'
import { BiLinkExternal } from 'react-icons/bi'
import { BsFillCreditCardFill, BsFillSendFill } from 'react-icons/bs'
import useProvider from '../hooks/useProvider'
import useGenerateWallet from '../hooks/useGenerateWallet'
import Accounts from '../components/Accounts'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const NewWallet = useGenerateWallet();
    // console.log(NewWallet)

    const [ShowAccount, setShowAccount] = useState(false);

    const CallBack = () => {
Init();
        // const g = {
        //     test: true
        // }
        // window.tiago = g;
        // console.log(window)
        
    }

  return (
    <main className="w-full relative ">
        <Accounts props={[ShowAccount, setShowAccount]} />
        <div className="p-4">
      <div className="screen mx-auto flex items-center justify-between">
        <Link to="/tx/" className="flex items-center gap-2 text-sm">
          <div  className="w-3 h-3 bg-primary rounded-full" />
          <label>Greenwood Network</label>
          <MdKeyboardArrowDown />
        </Link>
        <FaUserAlt onClick={() => setShowAccount(prev => !prev)} className="text-primary cursor-pointer" />
      </div>
      <div className="screen rounded-md mt-6 text-white p-3 mx-auto  bg-primary">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div className="text-[rgba(255,255,255,.8)]">Account 1</div>
              <div className="text-[rgba(255,255,255,.3)] text-sm">(0x3647...4637)</div>
            </div>
            <div className="flex items-center gap-2">
              <BiCopy className="cursor-pointer" />
              <BiLinkExternal className="cursor-pointer" />
            </div>
        </div>
        <div className="w-full border-t-[1px] border-[rgba(255,255,255,.2)] mt-2" />
        <div className="flex justify-between items-center w-full">
          <div className="w-full flex items-start flex-col justify-center">
            <label className="text-[2rem] mt-2 leading-9 text-[rgba(255,255,255,.9)] flex items-center gap-2">
              <label>3.4353 </label>
              <label className="text-[1.7rem]">GRW</label>
            </label>
            <label className="text-[1.1rem] text-[rgba(255,255,255,.3)] flex items-center gap-2">
              <label>$400 </label>
              <label className="text-[0.8rem]">USD</label>
            </label>
          </div>
          <img src="https://app.gurleyswap.com/uploads/grw.png" className="w-10" alt="GRW" />
        </div>
      </div>
      <div className="screen mx-auto flex items-center justify-center gap-3 mt-5">
        <div className="flex flex-col gap-2 min-w-[90px] items-center justify-center cursor-pointer hover:text-white hover:bg-color1 rounded-[55px] px-7 py-3 ">
          <BsFillCreditCardFill className="text-[1.6rem]" />
          <div className="text-[1.1rem]">BUY</div>
        </div>
        <div className="flex flex-col gap-2 min-w-[90px] items-center justify-center cursor-pointer hover:text-white hover:bg-color1 rounded-[55px] px-7 py-3 ">
          <BsFillSendFill className="text-[1.6rem]" />
          <div className="text-[1.1rem]">SEND</div>
        </div>
        <div className="flex flex-col gap-2 min-w-[90px] items-center justify-center cursor-pointer hover:text-white hover:bg-color1 rounded-[55px] px-7 py-3 ">
          <MdSwapHorizontalCircle className="text-[1.6rem]" />
          <div className="text-[1.1rem]">SWAP</div>
        </div>
      </div>

      <div className="screen flex items-center justify-center gap-4 mt-5">
        <div className="flex flex-col gap-1 group items-center justify-center w-1/2 cursor-pointer">
          <div className="font-extrabold">Assets</div>
          <div className="bg-primary h-1 opacity-100 group-hover:opacity-100 w-full" />
        </div>
        <div className="flex flex-col gap-1 group items-center justify-center w-1/2 cursor-pointer">
          <div className="font-normal">Activity</div>
          <div className="bg-primary h-1 opacity-0 group-hover:opacity-50 w-full" />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <div className="flex items-center justify-between gap-5 bg-[rgb(0,0,0,.1)] p-3">
          <div className="flex items-center gap-5">

            <img src="https://app.gurleyswap.com/uploads/grw.png" className="w-7" alt="GRW" />
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2 font-extrabold leading-5">
                <div>3.4353</div>
                <div className="text-[0.9rem]">GRW</div>
              </div>
              <div className="flex text-[rgba(0,0,0,.5)] items-center gap-1 text-[.8rem] leading-5">
                <div>6473.00 </div>
                <div>USD</div>
              </div>
            </div>
          </div>
          <button id="connectButton" onClick={CallBack} className="flex gap-2 items-center justify-center cursor-pointer hover:text-white hover:bg-color1 rounded-[55px] px-3 py-2 ">
            <BsFillSendFill className="text-[.8rem]" />
            <div className="text-sm">SEND</div>
          </button>
        </div>
      </div>
      </div>
    </main>
  )
}

export default Dashboard