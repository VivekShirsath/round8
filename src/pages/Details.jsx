import { useParams } from "react-router-dom"
import { Header } from "../components/Header";
import { useData } from "../context/DataContext";
import { About } from "../components/About";
import { Address } from "../components/Address";

export const Details = () => {
    const {id} = useParams();
    const {initialData} = useData();

   
   const uniqueData = initialData.meetups.find((val) => id == val.id);
   
    return(
        <div>
         <Header/>
         <div className="flex justify-between">
            <About uniqueData={uniqueData}/>
            <Address uniqueData={uniqueData}/>
         </div>
        </div>
    )
}