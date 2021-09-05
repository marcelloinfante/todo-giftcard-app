export const removeSpace = (number) => {
  return number.replace(/\s/g, '')
}

export const verifyIfInputHaveLetter = (value) => {
  const lastValue = value[value.length - 1]
  return(isNaN(lastValue))
}

export const setCardNumberInputValue = (cardNumber) => {
  const cardNumberWithoutSpace = removeSpace(cardNumber)
  const cardNumberOfDigits = cardNumberWithoutSpace.length
  if (cardNumberOfDigits >= 4 && cardNumberOfDigits < 9) {
    const firstFourDigits = cardNumberWithoutSpace.substring(0, 4)
    const secoundFourDigits = cardNumberWithoutSpace.substring(4, 8)
    const cardNumberWithSpace = firstFourDigits + ' ' + secoundFourDigits
    return cardNumberWithSpace
  }else if (cardNumberOfDigits >= 8 && cardNumberOfDigits < 12 ) {
    const firstFourDigits = cardNumberWithoutSpace.substring(0, 4)
    const secoundFourDigits = cardNumberWithoutSpace.substring(4, 8)
    const thirdFourDigits = cardNumberWithoutSpace.substring(8, 12)
    const cardNumberWithSpace = firstFourDigits + ' ' + secoundFourDigits + ' ' + thirdFourDigits
    return cardNumberWithSpace
  }else if (cardNumberOfDigits >= 12 && cardNumberOfDigits < 16 ) {
    const firstFourDigits = cardNumberWithoutSpace.substring(0, 4)
    const secoundFourDigits = cardNumberWithoutSpace.substring(4, 8)
    const thirdFourDigits = cardNumberWithoutSpace.substring(8, 12)
    const fourthFourDigits = cardNumberWithoutSpace.substring(12, 16)
    const cardNumberWithSpace = firstFourDigits + ' ' + secoundFourDigits + ' ' + thirdFourDigits + ' ' + fourthFourDigits
    return cardNumberWithSpace
  }else {
    return cardNumber
  }
}
