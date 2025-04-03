import { createSlice } from '@reduxjs/toolkit'
const walletADDD = JSON.parse(localStorage.getItem("wallet"));
// console.log(walletADDD,"0x23db7970e88518e93fbfd36Df9784fC7f518a287")

const initialState = {
    wallet: {
        walletAddress: walletADDD ? walletADDD : "",
        chainId: null,
        isConnected: false,
        isDisconnected:true,
        status: "",
      },
    dashboardData:{

    },
    tokenData:{

    }
}

// console.log(initialState,"0x23db7970e88518e93fbfd36Df9784fC7f518a287")

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWalletDetails: (state, action) => {
      // console.log(action.payload,"0x23db7970e88518e93fbfd36Df9784fC7f518a287")
        state.wallet.walletAddress = action.payload.walletAddress;
        localStorage.setItem("wallet",JSON.stringify(action.payload.walletAddress));
        // console.log(state.wallet.walletAddress,"0x23db7970e88518e93fbfd36Df9784fC7f518a287abc")
      },
      setDashboardData: (state, action) => {
        state.dashboardData = action.payload;
      },
      setTokenData: (state, action) => {
        state.tokenData = action.payload;
      },
  },
})

export const {  setWalletDetails,setDashboardData, setTokenData } = counterSlice.actions

export default counterSlice.reducer