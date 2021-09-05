import './LoginForm.css'
import { useState } from 'react'
import { setCardNumberInputValue, removeSpace, verifyIfInputHaveLetter } from '../../actions/cardNumberInputActions'
import { getTokens, verifyIfUserHaveValidAcessToken } from '../../axiosRequests/authAxios'
import todo from '../../assets/images/todo-logo.png'

const LoginForm = (props) => {

  const [cardNumber, setCardNumber] = useState('')
  const [password, setPassword] = useState('')
  const [isBackSpacePressed, setIsBackSpacePressed] = useState(false)
  const [counter, setCounter] = useState(0)
  const [haveInputError, setHaveInputError] = useState(false)

  const verifyIfBackSpaceIsPressed = () => {
    try {
      document.getElementById('input-card-number').onkeydown = (event) => {
        const marker = event.keyCode || event.charCode
        if( marker == 8 || marker == 46 ) {
          setIsBackSpacePressed(true)
          return true
        }
      }
    } catch {}
  }

  const changeCardNumberInputValeu = () => {
    const input = document.getElementById('input-card-number')
    const inputValue = input.value
    const cardNumberInputHaveLetter = verifyIfInputHaveLetter(inputValue)
    const cardNumberSetted = setCardNumberInputValue(inputValue)

    const lastDigit = cardNumberSetted[cardNumberSetted.length - 1]

    verifyIfBackSpaceIsPressed()

    const verifyIfInputIsValid = () => {
      if (!cardNumberInputHaveLetter || lastDigit === undefined) {
        return true
      } else {
        return false
      }
    }

    const verifyIfInputNeedDobleBackSpace = () => {
      if (isBackSpacePressed && lastDigit === ' ') {
        return true
      } else {
        return false
      }
    }

    const haveToRemoveLastDigit = () => {
      if (verifyIfInputIsValid() && verifyIfInputNeedDobleBackSpace()) {
        return true
      } else {
        return false
      }
    }

    const removeLastDigit = () => {
      const inputValueWithoutLastDigit = inputValue.substring(0, inputValue.length - 1)
      setCardNumber(inputValueWithoutLastDigit)
    }

    if (haveToRemoveLastDigit()) {
      removeLastDigit()
    } else {
      setCardNumber(cardNumberSetted)
    }
    setIsBackSpacePressed(false)
  }

  const updatePasswordValue = () => {
    const passwordValue = document.getElementById('input-password').value
    setPassword(passwordValue)
  }

  const validateLoginByAcessToken = () => {
    verifyIfUserHaveValidAcessToken()
      .then((result) => {
        props.receiveLoginState(result)
      })
      .catch((err) => {
        props.receiveLoginState(false)
        console.log(err)
      })
  }

  const tryTwoTimeToValidateLogin = () => {
    if (counter < 1) {
      setCounter(counter + 1)
      setTimeout(() => {
        try {
          document.getElementById('submit-form').click()
        } catch {}
      }
      , 1000)
    } else {
      setCounter(0)
    }
  }

  const submitCard = () => {
    const submitCardNumber = removeSpace(cardNumber)
    getTokens(submitCardNumber, password)
    validateLoginByAcessToken()
    tryTwoTimeToValidateLogin()
  }

  return(
    <>
      <div className='login-form__background'></div>
      <div className='login-form'>
        <div className='login-form__center'>
          <div className='login-form__central-box'>
            <div className='login-form__image'><img src={todo} className='login-form__image-content' /></div>
            <h2 className='login-form__titule'>Access Gift Card</h2>
            <form>
              <label className='text-card-number' for='input-card-number'>Card Number: </label><br />
              <input value={cardNumber} maxLength='19' type='text' id='input-card-number' onChange={changeCardNumberInputValeu} placeholder='XXXX XXXX XXXX XXXX' required></input><br />
              <label className='text-password' for='input-password' required>Password: </label><br />
              <input maxLength='6' type='password' id='input-password' onChange={updatePasswordValue}></input><br />
              <div className='login-form__submit-card' id='submit-form' onClick={submitCard}>Access Card</div><br />
            </form>
          </div>
        </div>
      </div>
    </>
  )}

export default LoginForm
