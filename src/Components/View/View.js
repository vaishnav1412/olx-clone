import React,{useEffect,useState,useContext} from 'react';


import './View.css';
import { postContext } from '../../store/PostContext';
import { Firebasecontext } from '../../store/Context';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(postContext)
  const {firebase}=useContext(Firebasecontext)
 
  useEffect(()=>{
    const {userId}=postDetails
firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  res.forEach(doc=>{
     setUserDetails(doc.data())
  })
})
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.phone}</span>
        </div>
       { userDetails&& <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
