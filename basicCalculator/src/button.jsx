import React from 'react'

export default function Btn({onButtonClick, value}) {
  return (
    <button className='call-btn' onClick={onButtonClick}>{value}</button>
  )
}
