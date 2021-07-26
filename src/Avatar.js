import React,{Component} from "react";
import "./Avatar.css";
import Avatarlist from "./Avatarlist";
import 'bootstrap/dist/css/bootstrap.min.css';


class Avatar extends Component {
 render (){
    const avatarlistarray = [
        {
            id:1,
            name:'shantanu',
            work:'developer'
        },
        {
            id:2,
            name:'Riya',
            work:'Housewife'
        },
        {
            id:3,
            name:'Babu',
            work:'Teacher'
        },
        {
            id:4,
            name:'maa',
            work:'housewife'
        }
    ]
    const arrayavatar = avatarlistarray.map((avatarcard,i)=>{
 return  <div className="col-md-3"><Avatarlist id={avatarlistarray[i].id} name={avatarlistarray[i].name} 
                                                work={avatarlistarray[i].work} / >
</div>
    })

    return ( <div className="mainpage row">
    <h1>Welcome to my family</h1>
   {arrayavatar}
    </div>
    )
 }


}
export default Avatar;