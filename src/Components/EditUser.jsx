import { FormControl, InputLabel,FormGroup,Input,Button,makeStyles, Typography } from "@material-ui/core"

import { useState,useEffect } from "react";
import { editUser, getUsers } from "../Sevice/api";
import { useHistory, useParams } from "react-router";
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
    name:"",
    space_available:"",
    cluster:"",
    city:"",
}
const EditUser = ()=>{
    const [user, setUsers]=useState(intialValue);
    const {name,space_available,cluster,city} = user;
    const {id} = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(()=>{
        loaduserData();
    }, []);
    const loaduserData =async()=>{
       const response =  await getUsers(id);
       setUsers(response.data);
    }

    const onValueChange =(e)=>{
        // console.log(e.target.value)
        setUsers({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const editUserDetail = async() =>{
         await editUser(id,user);
         history.push('./all');
        // history.push('./edit');
    }
    return(
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Edit Details</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>space_available</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='space_available' value={space_available}/>
            </FormControl>
            <FormControl>
                <InputLabel>Cluster</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='cluster' value={cluster}/>
            </FormControl>
            <FormControl>
                <InputLabel>City</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name ='city' value={city}/>
            </FormControl>
            <Button variant='contained' onClick={()=>editUserDetail()} color='primary'>Edit User</Button>
        </FormGroup>
       
    )

}
export default EditUser;