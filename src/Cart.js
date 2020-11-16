import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Cart = (props) =>
{
  const [total, setTotal] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckout = () =>
  {
    setShow(false);
    alert("Congradulations on your purchase!");
    props.clearList();
  }

  useEffect(() => {
      let tempTotal = 0
      for(let x of props.dogsInCart)
      {
        tempTotal += parseFloat(x.price);
      }
      setTotal(tempTotal);

  }, [props.dogsInCart]);

  console.log(props.dogsInCart);

  if(props.dogsInCart.length != 0)
  {
    return(
        <div className="container jumbotron">
          {props.dogsInCart.map((dog, i) =>
          {
            return(
              <div style={{paddingBottom: '20px'}}>
                {dog.name}
                <div className="row">
                  <div className="col">
                    <img width="150" height="150" src={dog.img} key={i}/>
                  </div>
                  <div style={{paddingBottom: '20px', paddingLeft: '50%'}} className="col">
                    Price per year: $ {dog.price}
                  </div>
                </div>
              </div>
            )
          })}
          <div style={{paddingBottom: '20px', paddingLeft: '90%'}} className="row">
            Total: $ {total.toFixed(2)}
          </div>

          <div style={{paddingBottom: '20px', paddingLeft: '90%'}} className="row">
            <button className="btn btn-success" onClick={handleShow}> Checkout </button>
          </div>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {props.dogsInCart.map((dog, i) =>
          {
            return(
              <div style={{paddingBottom: '20px'}}>
                {dog.name}: <span key={i} style={{float: 'right'}}> Price per year: $ {dog.price} </span>
              </div>
            )
          })}

          <div style={{paddingBottom: '20px'}}>
            <span style={{float: 'right'}}> Price per year: $ {total.toFixed(2)} </span>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCheckout}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
  }
  else
  {
    return(<h2> Your cart is empty! </h2>)
  }


}

export default Cart;
