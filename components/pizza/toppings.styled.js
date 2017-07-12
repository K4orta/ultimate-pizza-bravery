export default `
  .Toppings {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  .Topping {
    border-radius: 50%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    overflow: hidden;
  }

  .Topping::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }

  .Topping--10 {
    width: 6.4rem;
    height: 6.4rem;
  }

  .Topping--12 {
    width: 10.4rem;
    height: 10.4rem;
  }

  .Topping--14 {
    width: 14.4rem;
    height: 14.4rem;
  }

  .Topping--16 {
    width: 15.4rem;
    height: 15.4rem;
  }

  .Topping--left::before {
    max-width: 50%;
  }

  .Topping--right::before {
    max-width: 50%;
    margin-left: 50%;
  }

  .Topping--none::before {
    display: none;
  }

  .Topping--C::before {
    background: #ffd;
    box-shadow: inset 0 0 4rem #fd8;
  }
`