import { useData } from "../context/DataContext"
import { NavLink } from "react-router-dom";

export const Body = () => {
    const {data,setData,initialData,setInitialData,convertDate} = useData();
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
            <div className="flex justify-between mb-5 p-3">
            <h3 className="block mr-5 font-bold text-4xl">MeetUp Events</h3>
            <div>
            <label for="type" className="p-2 text-lg">Choose Event Type:</label>
           <select name="type" id="type" onChange= {(e) => filterEvents(e)}
           className="p-2 rounded-md">
           <option value="select">Please Select</option>
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="both">both</option>
            </select>
            </div>
            </div>
            <div className="flex gap-3 flex-wrap align-middle justify-center">
            {
                data.meetups.map((event) => {
                    return(
                        <NavLink to ={/home/ + event.id} key={event.eventThumbnail}>
                        <div key={event.eventThumbnail} className="shadow-md flex flex-col align-middle items-center relative p-2">
                         <img src={event.eventThumbnail} className="w-60 h-40 rounded-md"/>  
                         <h3>{convertDate(event.eventStartTime)} IST</h3> 
                         <h1 className="text-xl font-semibold">{event.title}</h1>
                         <p className="bg-secondary_bg rounded-md px-3 py-1 absolute top-3 left-1">{event.eventType}</p>
                        </div>
                        </NavLink>
                    )
                })
            }
            </div>
        </div>
    )
}