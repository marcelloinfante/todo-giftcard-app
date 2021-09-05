import './InformationBlock.css'
import gift from '../../assets/images/gift.png'
import dollar from '../../assets/images/dollar.png'
import calendar from '../../assets/images/calendar.png'

const InformationBlock = (props) => {
  let icon
  let titule
    if (props.type === 'message') {
    icon = gift
    titule = 'Gift Message'
  } else if (props.type === 'balance') {
    icon = dollar
    titule = 'Balance'
  } else if (props.type === 'validity') {
    icon = calendar
    titule = 'Validity'
  }
  return(
    <div className='information-block'>
      <img className='information-block__image'src={icon} />
      <div className='information-block__text'>
        <p className='information-block__titule'>{titule}</p>
        <p className='information-block__description'>{props.description}</p>
      </div>
    </div>
  )
}

export default InformationBlock
