import './Deal.css'

const Deal = (props) => {
  return(
    <tr className='deal'>
      <td className='deal__type'>{props.type}</td>
      <td className='deal__date'>{props.date}</td>
      <td className='deal__value'>{'$' + props.value}</td>
      <td className='deal__identifier'><p>{props.identifier}</p></td>
    </tr>
  )
}

export default Deal
