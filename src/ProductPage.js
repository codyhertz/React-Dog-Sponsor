import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = (props) =>
{
  const dogs = [
    {
      'img': 'dog1.jpg',
      'name': 'Jeff',
      'description': 'Jeff the dog likes long walks on the beach and chasing icecream trucks.',
      'price': "59.99"
    },
    {
      'img': 'dog2.jpg',
      'name': 'Winnifred',
      'description': 'Winnifred the dog is a natural born hunter and enjoys hunting pheasant.',
      'price': "29.99"
    },
    {
      'img': 'dog3.jpg',
      'name': 'Rudi',
      'description': 'Rudi the dog raves 24/7 and only takes a break to find a new club when the party ends.',
      'price': "399999.99"
    },
    {
      'img': 'dog4.jpg',
      'name': 'Henry',
      'description': 'Henry the dog is the silent type, he enjoys judging passerbys from afar.',
      'price': "42.99"
    }
  ]

  return(
    <div className="container jumbotron">
      {dogs.map((dog, i) =>
      {
        return(
          <div style={{paddingBottom: '20px'}}>
            <div className="row">
              <div className="col">
                <img width="300" height="300" src={dog.img} key={i}/>
              </div>
              <div className="col">
                <p key={i}>
                  {dog.description}
                </p>
                <p>
                  Subscription: $ {dog.price} a year.
                </p>
              </div>
              <div className="col">
                <button className="btn btn-success" onClick={() => props.addToList(dog)}>Add to Cart</button>
              </div>
            </div>
          </div>
        )
      })}
      <div style={{paddingBottom: '20px', paddingLeft: '90%'}} className="row">
        <Link to="/cart">
            <span className="btn btn-primary">Checkout</span>
        </Link>
      </div>
    </div>
  )
}

export default ProductPage;
