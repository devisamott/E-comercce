/* eslint-disable react/prop-types */
import './botonArrows.css'

export function BotonArrows ({ direction, onClick }) {
  return (
    <div className='container-button'>
      <button className='carousel-button' onClick={onClick}>
        {direction === 'left' ? '￩' : '￫'}
      </button>
    </div>
  );
}
