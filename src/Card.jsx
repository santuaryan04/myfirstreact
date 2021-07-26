import React from "react";
import Cardimage from "./Cardimage";
import Heading from "./Heading";

const Card = (props) => {
  return (
    <>
      
        <div class="column">
          <div class="card">
           <Cardimage name={props.name}/>
            <Heading name={props.name}></Heading>
            <p>{props.description}</p>
          </div>
        </div>
     
    </>
  );
};
export default Card;
