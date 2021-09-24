import { TableBody, TableCell, TableHead, TableRow,Table,makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers } from "../Sevice/api";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
    table:{
        width:"90%",
        margin:"50px 0 0 50px"
    },
    thead:{
        '& > *':{
            background:"#000000",
            color:"#ffffff",
            fontSize:'20'
        }
    },
    row:{
        '& > *':{
            fontSize:'20'
        }
    }
})
const Alluser = () =>{
    const classes = useStyle();
    const [user,setUsers] =useState([]);
    useEffect(()=>{
        getAllUsers();

    },[] )

    const getAllUsers = async() =>{
        const response= await getUsers()
        // console.log(response.data);
        setUsers(response.data)

    }

    return(
       <Table className={classes.table}>
           <TableHead>
               <TableRow className={classes.thead}>
                   <TableCell>Id</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Space_Availabel</TableCell>
                   <TableCell>Cluster</TableCell>
                   <TableCell>City</TableCell>
                   <TableCell></TableCell>
                   
               </TableRow>
           </TableHead>
           <TableBody>
               {
              user.map(user=>(
                  <TableRow className={classes.row}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.space_available}</TableCell>
                      <TableCell>{user.cluster}</TableCell>
                      <TableCell>{user.city}</TableCell>
                      <TableCell>
                          <Button variant='contained' color='primary' style={{marginRight:'10px'}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                      </TableCell>
                    
                  </TableRow>

              ))
              }
           </TableBody>
       </Table>
    )

}
export default Alluser;
