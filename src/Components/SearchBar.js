import React, { useState,useEffect } from "react";
import { getUsers,deleteUser } from "../Sevice/api";

import axios from "axios";


const SearchBar = () => {
    const [data, setData] = useState({})
    const [search, setSearch] = useState({})

    

        // axios.get('../Database/Db.json')
        //     .then((res) => {
        //         console.log(res.data);
        //     }).catch((err) => {
        //         console.log(err);
        //     }
        
        // axios.get('../Database/Db.json')
        // .then((res)=>{
        //     console.log(res.data);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
        // async function fetchUsersFromGithub() {
        //     const response = await fetch('../Database/Db.json')
        
        //     const data = await response.json()
        
        //     console.log(data);
        // }
        
        // fetchUsersFromGithub()
        const [user,setUsers] =useState([]);

        useEffect(()=>{
            getAllUsers();
    
        },[] )
    
        
    
        const getAllUsers = async() =>{
            const response= await getUsers()
            console.log(response.data);
            setData(response.data)
    
        }


                return (
                    <>
                        <form action="/" method="get">
                            <label htmlFor="header-search">
                                <span className="visually-hidden"></span>
                            </label>
                            <input
                                type="text"
                                id="header-search"
                                placeholder="Enter the Warehouse Name"
                                name="s"
                            onChange={(e)=>setSearch(e.target.value)}/>
                            <button  type="submit" >Search</button>
                            {/* <button onClick={fetchDetails} type="submit" >Search</button> */}
                        </form>
                        {
                            data.filter((val)=>{
                                if(search=''){
                                    return val;
                                }
                                else if(val.name.toLowerCase().include(search.toLowerCase())){
                                    return
                                }
                            })
                        }
                    </>
                )
            }

export default SearchBar