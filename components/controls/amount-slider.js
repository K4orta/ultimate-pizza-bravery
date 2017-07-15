import React from 'react'

const AmountSlider = ({ children, value, onChange, min = 0, max = 10 }) => (
   <div className="AmountSlider">
      <label>{children}</label>
      <div className="AmountSlider__value">{value}</div>
      <input type="range" value={value} min={min} max={max} step="1" onChange={onChange} />
      <style jsx>{`
        .AmountSlider {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .AmountSlider__value {
          margin: 0 .5rem;
          min-width: 1.5rem;
        }

        input[type='range'] {
          background: transparent;
          width: 11rem;
        }

        input[type='range'],
        input[type='range']::-webkit-slider-runnable-track,
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
        }

        input[type='range']::-webkit-slider-runnable-track {
          height: 2px;
          width: 100%;
          background: #000;
        }

        input[type='range']::-webkit-slider-thumb {
          width: 1rem;
          height: 1rem;
          background: #F15A24;
          border: 2px solid black;
          border-radius: 50%;
          margin-top: -.45rem;
        }
      `}</style>
    </div>
)

export default AmountSlider