import './Transactions.css'
import { useState, useEffect, useContext } from 'react'
import Deal from '../Deal/Deal'
import { getExternalExtract, getInternalExtract } from '../../axiosRequests/cardInfoAxios'
import { BalanceContext } from '../../context'

const Transactions = () => {
  const ctx = useContext(BalanceContext)
  const [extractExternal, setExtractExternal] = useState({})
  const [extractInternal, setExtractInternal] = useState({})

  const getExtractList = () => {
    getInternalExtract().then((response) => {
      setExtractInternal(response)
    })
    getExternalExtract().then((response) => {
      setExtractExternal(response)
    })
  }

  useEffect(() => {
    getExtractList()
  }, [])

  let extractList = []
  let balance = 0

  const pushExtract = (type) => {

    const isTypeInternal = (type === 'internal')
    const extract = isTypeInternal ? extractInternal : extractExternal

    for (let index in extract) {
      let transactionType
      let transactionValue
      let transactionDate
      let transactionIdentifier

      if (isTypeInternal) {
        transactionType = extract[index].type
        transactionValue = parseInt(extract[index].value)
        transactionDate = extract[index].date
        transactionIdentifier = extract[index].store
      } else {
        transactionType = extract[index].transaction_type
        transactionValue = extract[index].transaction_value
        transactionDate = extract[index].transaction_date
        transactionIdentifier = extract[index].store_identification
      }

      const indexExtract =
        <Deal
          type={transactionType}
          value={transactionValue}
          date={transactionDate}
          identifier={transactionIdentifier}
        />

      extractList.push(indexExtract)
    }
  }

  const pushExtractsToList = () => {
    pushExtract('internal')
    pushExtract('external')
  }

  const addTransitionsValueOfExtractToBalance = (type) => {
    const isTypeInternal = (type === 'internal')
    const extract = isTypeInternal ? extractInternal : extractExternal
    for (let index in extract) {
      const transitionValue = isTypeInternal ? parseInt(extract[index].value) : extract[index].transaction_value
      balance += transitionValue
    }
  }

  const addTransitionsValueToBalance = () => {
    addTransitionsValueOfExtractToBalance('internal')
    addTransitionsValueOfExtractToBalance('external')
    ctx.passBalance(balance)
  }

  try {
    pushExtractsToList()
    addTransitionsValueToBalance()
  } catch {}

  return(
    <div className='transactions'>
      <h2 className='transactions__titule'>Transactions</h2>
      <table className='transactions__table'>
        <tr className='transactions__first-row'>
          <th className='transactions__type'>Type of Transaction</th>
          <th className='transactions__date'>Date of Transaction</th>
          <th className='transactions__value'>Value</th>
          <th className='transactions__identifier'>Identifier</th>
        </tr>
        {extractList}
      </table>
    </div>
  )
}

export default Transactions
