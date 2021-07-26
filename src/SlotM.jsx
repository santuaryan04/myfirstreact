import React from 'react';

const SlotM = (props) =>{
let x = props.x;
let y = props.y;
let z = props.z;
if(x===y && y===z){
return (
    <>
<div>
    <h1>{x} {y} {z}</h1>
    <div>This is matching</div>
</div>
    </>
)
}else{
  return (
    <>
<div>
    <h1>{x} {y} {z}</h1>
    <div>This is not matching</div>
</div>
    </>
)  
}
}
export default SlotM;