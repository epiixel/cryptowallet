import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineImport, AiOutlinePlus } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import CreateAccount from './CreateAccount';

const Account = ({props}) => {

const [CreateAccountModal, setCreateAccountModal] = useState(false);

if(CreateAccountModal) return <CreateAccount props={[CreateAccountModal, setCreateAccountModal]} />

if(!props[0]) return;
  return (
    <div className={`absolute w-full opacity-100 h-full`}>
        <div className="w-full bg-white h-full border-2 relative p-4">
            <AiOutlineArrowLeft onClick={() => props[1](false)} className="absolute left-5 top-5 cursor-pointer" />
            <div className="flex justify-center items-center text-base font-bold">
                Account
            </div> 
            <div className="border-b-[1px] border-opacity-50 my-5" />
            <div className="flex items-center justify-between mt-10 mb-4 font-bold">
                <div>My Accounts</div>
                <div className="text-blue-800">Manage</div>
            </div>
            <button className="flex w-full items-center justify-start gap-3 font-bold bg-green-100/50 hover:bg-gray-300/50 p-4">
                <BsCheckLg className="text-[1.5rem] text-green-500" />
                <FaUserAlt className="text-[1.2rem] text-primary" />
                <div className=" flex flex-col gap-1 leading-4 ml-3">
                    <div className="text-gray-800">Account 1</div>
                    <div className="text-gray-500 text-[.7rem]">0x1234...1232</div>
                </div>
            </button>
            <button className="flex w-full items-center justify-start gap-3 font-bold hover:bg-gray-300/50 p-4">
                <FaUserAlt />
                <div className=" flex flex-col gap-1 leading-4 ml-3">
                    <div className="text-gray-800">Account 1</div>
                    <div className="text-gray-500 text-[.7rem]">0x1234...1232</div>
                </div>
            </button>
            <div className="border-b-[1px] border-opacity-50 my-5" />
            <div className="flex flex-col gap-2">
                <button onClick={() => setCreateAccountModal(prev => !prev)} className="w-full rounded-sm text-gray-900/80 hover:bg-gray-200/100 flex text-base items-center gap-2 bg-gray-200/50 p-5">
                    <AiOutlinePlus className="text-[1.5rem]" />
                    <div className="" >Create Account</div>
                </button>
                <button onClick={() => setCreateAccountModal(prev => !prev)} className="w-full rounded-sm text-gray-900/80 hover:bg-gray-200/100 flex text-base items-center gap-2 bg-gray-200/50 p-5">
                    <AiOutlineImport className="text-[1.5rem]" />
                    <div className="" >Import Wallet</div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Account