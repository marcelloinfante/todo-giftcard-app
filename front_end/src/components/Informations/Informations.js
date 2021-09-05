import './Informations.css'
import { useState, useEffect, useContext } from 'react'
import InformationBlock from '../InformationBlock/InformationBlock'
import { BalanceContext } from '../../context'
import { getUserInformations } from '../../axiosRequests/cardInfoAxios'

const Informations = (props) => {
  const ctx = useContext(BalanceContext)
  const [cardNumber, setCardNumber] = useState()

  const getCardNumber = () => {
    getUserInformations().then((response) => {
      setCardNumber(response.username)
    })
  }

  useEffect(() => {
    getCardNumber()
  }, [])

  const insertSpaceInCardNumber = () => {
    const firstFourDigits = cardNumber.substring(0, 4)
    const secoundFourDigits = cardNumber.substring(4, 8)
    const thirdFourDigits = cardNumber.substring(8, 12)
    const fourthFourDigits = cardNumber.substring(12, 16)
    const cardNumberWithSpaces = firstFourDigits + ' ' + secoundFourDigits + ' ' + thirdFourDigits + ' ' + fourthFourDigits
    return cardNumberWithSpaces
  }

  let edittedCardNumber
  try {
    edittedCardNumber = insertSpaceInCardNumber()
  } catch {}

  return(
    <div className='informations'>
      <h2 className='informations__titule'>Informations</h2>
      <p className='informations__card-number'>{'Card Number: ' + edittedCardNumber}</p>
      <div className='informations__blocks-container'>
        <InformationBlock type='message' description={props.message} />
        <InformationBlock type='balance' description={'$ ' + ctx.getBalance} />
        <InformationBlock type='validity' description={'Until ' + props.validity} />
      </div>
    </div>
  )
}

export default Informations
