'use client'
import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'


const initialState = {
  chainID: 5665,
  session: null,
  wrongNetwork: false,
  address: null,
  darkMode: false,
  user: true,
  verified: false,
  name: null,
  email: null,
  SideMenu: false,
  UserMenuTop: false,
  reload: false,
  picture: null,
  language: 'EN',
  isLoading: false,
  userUUID: null,
  farm: null,
  modalTokens: null,
  tokensList: {
    token0: null,
    token1: "0x1E1860Af5402E695F570e0a72c96ff433678C15C"
  },
  message: {
    status: false,
    success: null,
    title: null,
    message: null,
    hash: null,
    provider: {}
}
}



export const counterSlice = createSlice(
  {
  name: 'global',
  initialState,
  reducers: {
      setAddress: (state, action) => {
        state.address = action.payload
      },
      setTokensList: (state, action) => {
        state.tokensList = action.payload
      },
      setModalTokens: (state, action) => {
        state.modalTokens = action.payload
      },
      setSession: (state, action) => {
        state.session = action.payload
      },
      setWrongNetwork: (state, action) => {
        state.wrongNetwork = action.payload
      },
      setTheme: (state, action) => {
        state.darkMode = action.payload
      },
      setUser: (state, action) => {
        state.user = action.payload
      },
      setVerified: (state, action) => {
        state.verified = action.payload
      },
      setName: (state, action) => {
        state.name = action.payload
      },
      setSideMenu: (state, action) => {
        state.SideMenu = action.payload
      },
      setEmail: (state, action) => {
        state.email = action.payload
      },
      setFarm: (state, action) => {
        state.farm = action.payload
      },
      setLanguage: (state, action) => {
        state.language = action.payload
      },
      setReload: (state, action) => {
        state.reload = action.payload
      },
      setMessage: (state, action) => {
        state.message = action.payload
      },
      setUserMenuTop: (state, action) => {
        state.UserMenuTop = action.payload
      },
      setPicture: (state, action) => {
        state.picture = action.payload
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload
      },
      setUserUUID: (state, action) => {
        state.userUUID = action.payload
      },
      setProvider: (state, action) => {
        state.provider = action.payload
      },
    }
}
)
export const GLOBAL = (value) => {
  const global = useSelector((state) => state['global'][value])
  return global
}

// Action creators are generated for each case reducer function
export const { 
  setAddress,
  setTokensList,
  setTheme,
  setUser,
  setVerified,
  setUserUUID,
  setModalTokens,
  setName,
  setEmail,
  setSideMenu,
  setReload,
  setMessage,
  setSession,
  setWrongNetwork,
  setLanguage,
  setPicture,
  setFarm,
  setUserMenuTop,
  setIsLoading,
  setProvider

} = counterSlice.actions

export default counterSlice.reducer