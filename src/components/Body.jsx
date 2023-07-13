import { useData } from "../context/DataContext"
import { NavLink } from "react-router-dom";

export const Body = () => {
    const {data,setData,initialData,setInitialData} = useData();
    console.log(data.meetups)

    const filterEvents = (e) =>{
       if(e.target.value === "online"){
        const filteredData = initialData.meetups.filter(({eventType}) => eventType == "Online")
        setData({meetups:filteredData})
       }
       else if(e.target.value === "offline"){
        const filteredData = initialData.meetups.filter(({eventType}) => eventType == "Offline")
        setData({meetups:filteredData})
       }
       else{
        setData(initialData)
       }
    }
    return(
        <div>
            <div className="flex justify-center mb-5">
            <h3 className="block mr-5">MeetUp Events</h3>
            <label for="type">Choose Event Type:</label>
           <select name="type" id="type" onChange= {(e) => filterEvents(e)}>
           <option value="select">Please Select</option>
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="both">both</option>
            </select>
            </div>
            <div className="flex gap-3 flex-wrap">
            {
                data.meetups.map((event) => {
                    return(
                        <NavLink to ={/home/ + event.id} key={event.eventThumbnail}>
                        <div key={event.eventThumbnail} className="shadow-md flex flex-col align-middle items-center">
                         <img src={event.eventThumbnail} className="w-52 h-32 rounded-md"/>  
                         <h3>{event.eventStartTime}</h3> 
                         <h1>{event.title}</h1>
                         <p>{event.eventType}</p>
                        </div>
                        </NavLink>
                    )
                })
            }
            </div>
        </div>
    )
}