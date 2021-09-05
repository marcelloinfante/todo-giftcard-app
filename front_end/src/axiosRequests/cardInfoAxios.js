import axios from "axios"
import Cookies from 'js-cookie'
import {
  LIST_USERS_URL,
  LIST_CARDS_URL,
  LIST_INTERNAL_EXTRACT_URL,
  LIST_EXTERNAL_EXTRACT_URL
} from '../constants/urls'

export const getUserInformations = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + Cookies.get('accesstoken')
    }
  }
  try {
    const response = await axios.get(
      LIST_USERS_URL,
      config
    )
    return response.data[0]
  } catch (error) {
    return error
    console.log(error)
  }
}



export const getCardInformations = async (cardID) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + Cookies.get('accesstoken')
    }
  }
  try {
    const response = await axios.get(
      LIST_CARDS_URL,
      config
    )
    return response.data[0]
  } catch (error) {
    return error
    console.log(error)
  }
}



export const getInternalExtract = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + Cookies.get('accesstoken')
    }
  }
  try {
    const response = await axios.get(
      LIST_INTERNAL_EXTRACT_URL,
      config
    )
    return response.data
  } catch (error) {
    return error
    console.log(error)
  }
}



export const getExternalExtract = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "x-api-key": "PMAK-60c15befee0d380034366a96-0c571bc1bf1379aa80d655e94e4d9348f6"
    }
  }
  try {
    const response = await axios.get(
      LIST_EXTERNAL_EXTRACT_URL,
      config
    )
    return response.data
  } catch (error) {
    return error
    console.log(error)
  }
}
