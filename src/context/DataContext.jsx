
import { createContext,useContext, useReducer,useEffect,useState } from "react";
import { meetData } from "../data/meetData";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const [data,setData] = useState(meetData)
    const [initialData,setInitialData] = useState(meetData);

    const convertDate = (date) => {
        const inputDate = new Date(date);
        const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second:'numeric',
        hour12: true,
        timeZone: 'Asia/Kolkata' // IST timezone
        };

        const formattedDate = inputDate.toLocaleString('en-IN', options);
        return formattedDate;
    }
    return(
        <DataContext.Provider value={{data,setData,initialData,setInitialData,convertDate}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)