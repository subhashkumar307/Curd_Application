import React, { useEffect, useState } from "react";
import axios from "axios";


const ComA = () => {
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [cluster, setCluster] = useState();
    const [space_available, setSpace_available] = useState();

    useEffect(() => {
        // alert("hi");
        async function getData() {
            const res = await axios.get(`http://localhost:3003/user/${name}`);
            console.log(res.data.name);
            setName(res.data.name);
            setCity(res.data.city);
            setCluster(res.data.cluster)
            setSpace_available(res.data.space_available);

        }
        getData();
    });
    return (
        <>
            <h4>
                You choose DataWare Name <span style={{ color: "blue"}}>{name} value</span>
            </h4>
            <h4>
                City Name <span style={{ color: "blue"}}>{city} value</span>
            </h4>
            <h4>
                Cluster Name <span style={{ color: "blue"}}>{cluster} value</span>
            </h4>
            <h4>
                Space_Availabel <span style={{ color: "blhe"}}>{space_available} value</span>
            </h4>
            <select value={name} onChange={(event) =>{
                  setName(event.target.value); 
            }}>
                <option value="Warehouse-165">Warehouse-165</option>
                <option value="Warehouse-276">Warehouse-276</option>
                <option value="Warehouse-3039">Warehouse-3039</option>
                <option value="Warehouse-324">Warehouse-324</option>
                <option value="Warehouse-5454">Warehouse-5454</option>
                <option value="Warehouse-4345">Warehouse-4345</option>
                <option value="Warehouse-3455">Warehouse-3455</option>
                <option value="Warehouse-23455">Warehouse-23455</option>
                <option value="Warehouse-6457">Warehouse-6457</option>
                <option value="Warehouse-32456">Warehouse-32456</option>
                <option value="Warehouse-3245678">Warehouse-3245678</option>
                <option value="Warehouse-4567">Warehouse-4567</option>
                <option value="Warehouse-458">Warehouse-458</option>
            </select>
          
        </>
        
    )
}
export default ComA;