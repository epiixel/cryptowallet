import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlinePlus } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import useGenerateWallet from '../hooks/useGenerateWallet';
import { FormatNumber } from '../lib/';
const CreateAccount = ({props}) => {
let [Generate, Update] = useGenerateWallet();
const [Wallet, setWallet] = useState({});

useEffect(() => {
    Update(Math.random())
    setWallet(Generate)
}, [])

const GenerateNewWallet = () => {
    Update(Math.random())
    setWallet(Generate)
}
if(!props[0]) return;
  return (
    <div className={`absolute w-full opacity-100 h-full overflow-auto`}>
        <div className="w-full bg-white h-full border-2 relative p-4">
            <AiOutlineArrowLeft onClick={() => props[1](false)} className="absolute left-5 top-5 cursor-pointer" />
            <div className="flex justify-center items-center text-base font-bold">
                Create Account
            </div> 
            <div className="border-b-[1px] border-opacity-50 my-5" />
            <form>
                
                <div className="flex flex-col gap-2">
                    <div className="font-extrabold ml-1">Account Name:</div>
                    <input type="input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {!Wallet?.address && (
                <div className="flex flex-col gap-2 mt-5">
                    <button onClick={GenerateNewWallet} type="button" className="btn btn__load w-full">Generate</button>
                </div>
                )}
                {Wallet?.address && (

                <>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="font-extrabold ml-1 flex items-center gap-3">Mnemonic (12 words): <div className="text-[.8rem] text-red-500 font-bold">(** keep it safe **)</div></div>
                    <p>{Wallet?.mnemonic}</p>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="font-extrabold ml-1 flex items-center gap-3">Private Key: <div className="text-[.8rem] text-red-500 font-bold">(** keep it safe **)</div></div>
                    <div className="text-sm block overflow-auto w-full px-2 py-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{Wallet?.privateKey}</div>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="font-extrabold ml-1">Address:</div>
                    <div className="text-sm block overflow-auto w-full px-2 py-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{Wallet?.address}</div>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <button onClick={() => {}} type="button" className="btn btn__load w-full">Save</button>
                </div>
                </>
                )}
                
            </form>
        </div>
    </div>
  )
}

export default CreateAccount