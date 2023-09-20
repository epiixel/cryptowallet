'use client'
import { configureStore } from '@reduxjs/toolkit'
import global from './index.jsx'


export const store = configureStore({
  reducer: {
    global: global
  }
})