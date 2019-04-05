import React from "react";
import "./style.css";

const MemeCard = props => (
    <div className="card">
        <img alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)}/>
    </div>
   
  );


export default MemeCard;
