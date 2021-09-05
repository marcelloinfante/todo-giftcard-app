import './CardPage.css'
import { useState, useEffect } from 'react'
import Informations from '../Informations/Informations'
import Transactions from '../Transactions/Transactions'
import { getCardInformations } from '../../axiosRequests/cardInfoAxios'
import giftcard from '../../assets/images/giftcard.png'
import Cookies from 'js-cookie'

const CardPage = () => {
  const [cardInfo, setCardInfo] = useState(false)

  const setCardInformation = () => {
    getCardInformations().then((response) => {
      setCardInfo(response)
    })
  }

  useEffect(() => {
    setCardInformation()
  }, [])

  let cardValidity
  let cardMessage
  let cardImage
  try {
    cardValidity = cardInfo.validity
    cardMessage = cardInfo.message
  } catch {}

  return(
    <div className='card-page'>
      <div className='card-page__info'>
        <h1 className='card-page__titule'>My Gift Card</h1>
        <img className='card-page__giftcard-image'src={giftcard} />
        <Informations validity={cardValidity} message={cardMessage} />
      </div>
      <Transactions />
    </div>
  )
}

export default CardPage
