import { FormControl, InputLabel,FormGroup,Input,Button,makeStyles, Typography } from "@material-ui/core"

import { useState } from "react";
import { addUser } from "../Sevice/api";
import { useHistory } from "react-router";
const useStyle = makeStyles({
    container:{
            width:'50%',
            margin:'5% 0 0 25%',
            '& >*':{
                marginTop:'20px'
            }
    }
})

const intialValue = {
    "name" : "",
    "id" : "",
    "city": "",
    "space_available": "",
    "cluster" : ""
    
}
const Adduser = ()=>{
    const [user, setUsers]=useState(intialValue);
    const {name,space_available,cluster,city} = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange =(e)=>{
        console.log(e.target.value)
        setUsers({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const addUserDetail = async() =>{
         await addUser(user);
         history.push('./all');
    }
    return(
        
        
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Add Data</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Space_availabel</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='space_available' value={space_available}/>
            </FormControl>
            <FormControl>
                <InputLabel>Cluster</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='cluster' value={cluster}/>
            </FormControl>
            <FormControl>
                <InputLabel>city</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='city' value={city}/>
            </FormControl>
            <Button variant='contained' onClick={()=>addUserDetail()} color='primary'>Add User</Button>
        </FormGroup>
       
    )

}
export default Adduser;