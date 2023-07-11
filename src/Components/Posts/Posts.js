import React,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Firebasecontext } from '../../store/Context';
import { postContext } from '../../store/PostContext';
import {useHistory} from 'react-router-dom'


function Posts() {
const {firebase}=useContext(Firebasecontext)
const [products,setProducts]=useState([])
const {setPostDetails}=useContext(postContext)
const history=useHistory()
useEffect(()=>{
firebase.firestore().collection(`products`).get().then((snapshot)=>{
  const allpost=snapshot.docs.map((product)=>{
    return{
      ...product.data(),
      id:product.id
    }
  })
setProducts(allpost)
})
},[])   
  return (
    <div className="postParentDiv">
    <div className="moreView">
      <div className="heading">
        <span>Quick Menu</span>
        <span>View more</span>
      </div>
      <div className="cards">
        {products.map((product) => {
          return (
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img
                  src={product.url}
                  alt=""
                  onClick={() => {
                    setPostDetails(product)
                    history.push("/view");
                  }}
                />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{product.price} </p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name} </p>
              </div>
              <div className="date">
                <span>{product.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="recommendations">
      <div className="heading">
        <span>Fresh recommendations</span>
      </div>
      <div className="cards">
        {products.map((product) => {
          return (
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img
                  src={product.url}
                  alt=""
                  onClick={() => {
                    setPostDetails(product)
                    history.push("/view");
                  }}
                />
              </div>

              <div className="content">
                <p className="rate">&#x20B9;{product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name} </p>
              </div>
              <div className="date">
                <span>{product.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}

export default Posts;
