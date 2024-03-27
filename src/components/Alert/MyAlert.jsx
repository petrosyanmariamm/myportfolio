import React from "react";
import "./alert.scss";


export default function MyAlert({setShowAlert, showAlert}) {

  return (
   
    <div className="alert">
        <h4>Successfully</h4>
        <p>Thank you for your interest in our web development services. We would like to inform you that your email has been successfully sent. We appreciate your communication and will respond as soon as possible.</p>
        <button className="btn" onClick={()=>setShowAlert(!showAlert)}>Close</button>
    </div>
  )
}
