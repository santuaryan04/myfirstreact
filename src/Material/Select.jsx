import axios from 'axios';
import React,{useState,useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectMenu = () =>{

    const [num,setNum]= useState(1);
    const [name,setName] = useState();
    const [moves,setMoves] = useState();
    useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
           // console.log(response);
            setName(response.data.name);
            setMoves(response.data.name.length);
        }
       getData();
     })
    return (
        <>
        <h1>You choose {num} value</h1>
        <h1>Ny name is {name} </h1>
        <h1>You have {moves} moves</h1>
       
        <FormControl>
        <InputLabel htmlFor="number">Number</InputLabel>
        <Select
          native
          value={num} onChange={(event)=>{ 
            setNum(event.target.value);
            }}
          inputProps={{
            name: 'number',
            id: 'number',
          }}
          style={{width:'100px'}}
        >
        
          <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </Select>
      </FormControl>
        </>
    )
}
export default SelectMenu;