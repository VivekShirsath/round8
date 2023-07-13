import { useState } from "react"
import { useData } from "../context/DataContext";

export const Header = () => {

    const [query,setQuery] = useState("");
    const {data,setData,initialData,setInitialData} = useData();

    const handleInput = (e) => {
        setQuery(e.target.value)
        const unique = initialData.meetups.filter(({title
        }) => title.toLowerCase().includes(query.toLowerCase()));
        console.log(unique)
        setData({meetups:unique})
        if(e.target.value === ""){
            setData(initialData)
        }
    }

    return(
        <div className="flex justify-between p-4">
            <h3>Meetup</h3>
            <input type="text" value={query} onInput={(e) => handleInput(e)}
            placeholder="Search By Title"/>
        </div>
    )
    }