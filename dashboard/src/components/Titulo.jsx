import React from 'react'

function Titulo(props) {
  return (
    <div className='flex'>
        <strong className='text-agilzorange w-1/2 flex items-center'>
            {props.titulo}
        </strong>
        <div className='w-1/2'>
        {props.componente}
        </div>
    </div>
  )
}

export default Titulo