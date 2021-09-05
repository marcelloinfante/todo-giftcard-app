import './App.css'
import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import CardPage from './components/CardPage/CardPage'
import { refreshAccessToken, verifyIfUserHaveValidAcessToken } from './axiosRequests/authAxios'
import { BalanceContext } from './context'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [balance, setBalance] = useState()

  const passLoginState = (loginState) => {
    setIsLoggedIn(loginState)
  }

  const setBalanceValue = (value) => {
    setBalance(value)
  }

  const validateLoginByAcessToken = () => {
    verifyIfUserHaveValidAcessToken()
      .then((result) => {
        setIsLoggedIn(result)
      })
      .catch((err) => {
        setIsLoggedIn(false)
        console.log(err)
      })
  }

  const refreshLoginInFourMinutesInteval = () => {
    setInterval(() => {
      refreshAccessToken().then().then(
        validateLoginByAcessToken()
      )
    }, 240000)
  }

  useEffect(() => {
    validateLoginByAcessToken()
    refreshLoginInFourMinutesInteval()
  },[])

  if (isLoggedIn === null) {
    return(
      <>
      </>
    )
  }
  else if (isLoggedIn) {
    return (
      <BalanceContext.Provider
        value={{
          passBalance: setBalanceValue,
          getBalance: balance,
        }}>
       <CardPage />
      </BalanceContext.Provider>
    )
  } else {
    return (
      <div className="App">
        <LoginForm receiveLoginState={passLoginState} />
      </div>
    )
  }
}

export default App
