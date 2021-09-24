import axios from "axios";
import React, { useState, useEffect } from "react";


const url = "http://localhost:3003/user"
const SearchBar = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const getData = async () => {
        try {
            const res = await axios.get(`${url}`)
            console.log(res.data);
        } catch (error) {

        }
    }
    useEffect(() => {
        axios('http://localhost:3003/user')
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.name);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
        getData()
    }, [])

    const getresult = (e) => {
        e.preventDefault()
        axios.get("http://localhost:3003/user")
         .then(response => console.log(response.data[0].name))

    }

    return (
        <>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Enter the Warehouse Name</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Enter the Warehouse Name"
                    name="s"
                />
                <button type="submit" onClick={getresult}>Search</button>
            </form>
        </>
    );
}

export default SearchBar;