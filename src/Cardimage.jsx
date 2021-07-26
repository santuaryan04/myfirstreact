import React from 'react';

const Cardimage = (props) =>{
    return (
        <>
         <img src={`https://joeschmoe.io/api/v1/${props.name}`}
              alt="Avatar"
            />
        </>
    )
}
export default Cardimage;