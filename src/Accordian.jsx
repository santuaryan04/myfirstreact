import React,{useState} from 'react';
import Cdata from './Cdata';
import Myaccordian from './Myaccordian';

 const Accordian = () => {
     const [data,setdata] = useState(Cdata);
    return (
        <>
<div>
    { data.map((curdata,index)=>{
return  <Myaccordian key={index} {...curdata}/>
    })}
   
</div>
            
        </>
    )
}

export default Accordian;