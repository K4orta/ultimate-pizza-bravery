export default `
  .Crust {
    border-radius: 50%;
    background: #f8ad29;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: inset 0 -8px 5px #ef6d1b, 0rem 3rem 1rem rgba(0, 0, 0, .15);
  }

  .Crust--10 {
    width: 8rem;
    height: 8rem;
  }

  .Crust--12 {
    width: 12rem;
    height: 12rem;
  }

  .Crust--14 {
    width: 16rem;
    height: 16rem;
  }

  .Crust--16 {
    width: 17rem;
    height: 17rem;
  }

  /* Thin crust */
  .Crust--THIN {
    box-shadow: inset 0 -2px 1px orange, 0rem 3rem 1rem rgba(0, 0, 0, .15);
  }

  .Crust--NPAN {
    box-shadow: inset 0 -5px 3px #ef6d1b, 0rem 3rem 1rem rgba(0, 0, 0, .15), 0rem .5rem 0 rgba(70, 70, 70, 1);
  }
`
