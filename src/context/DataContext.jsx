
import { createContext,useContext, useReducer,useEffect,useState } from "react";
import { meetData } from "../data/meetData";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const [data,setData] = useState(meetData)
    const [initialData,setInitialData] = useState(meetData);
    return(
        <DataContext.Provider value={{data,setData,initialData,setInitialData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)