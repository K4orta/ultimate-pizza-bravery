import React from 'react'
import { observer, inject } from 'mobx-react'
const VisualizePizza = ({ pizza }) => (
  <div className="PizzaVis">
    <div className={`Crust`}>
    </div>
    <style jsx>{`
      .PizzaVis {
        transform: rotateX(60deg)
      }

      .Crust {
        border-radius: 50%;
        background-color: #ff0;
      }

      .Crust--sm {
        width: 10rem;
        height: 10rem;
      }

      .Crust--md {
        width: 12rem;
        height: 12rem;
      }

      .Crust--lg {
        width: 14rem;
        height: 14rem;
      }

      .Crust--xl {
        width: 16rem;
        height: 16rem;
      }
    `}</style>
  </div>
)

export default VisualizePizza