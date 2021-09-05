import axios from "axios"
import Cookies from 'js-cookie'
import {
  OBTAIN_PAIR_TOKEN_URL,
  TOKEN_REFRESH_URL,
  VERIFY_ACCESS_TOKEN_URL
} from '../constants/urls'

const config = {
  headers: {
    "Content-type": "application/json",
  }
}

export const getTokens = async (cardNumber, password) => {
  const cardInfos = {
    "username": cardNumber,
    "password": password
  }

  try {
    const response = await axios.post(
        OBTAIN_PAIR_TOKEN_URL,
        cardInfos,
        config
    )

    Cookies.set('accesstoken', response.data.access, { expires: 0.00347})
    Cookies.set('refreshtoken', response.data.refresh, { expires: 1 })
  } catch (error) {
    console.log(error)
  }
}



export const refreshAccessToken = async () => {
  const refreshToken = {
    "refresh": Cookies.get('refreshtoken')
  }

  try {
    const response = await axios.post(
      TOKEN_REFRESH_URL,
      refreshToken,
      config
    )
    Cookies.set('accesstoken', response.data.access)
  } catch (error) {
    console.log(error)
  }
}



export const verifyIfUserHaveValidAcessToken = async () => {
  const tokenVerify = {
    "token": Cookies.get('accesstoken')
  }

  try {
    const response = await axios.post(
      VERIFY_ACCESS_TOKEN_URL,
      tokenVerify,
      config
    )
    return true
  } catch (error) {
    return false
    console.log(error)
  }
}
