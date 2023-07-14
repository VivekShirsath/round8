import { useState } from "react"
import { Modal } from "./Modal";
import { useData } from "../context/DataContext";

export const Address = ({uniqueData}) => {
    const [modal,setModal] = useState(false);
    const [rsvp,setRsvp] = useState(false);
    const {convertDate} = useData();

    let  currentDate = new Date();
    let date = new Date(uniqueData.eventEndTime);


    let isPassed = (date<currentDate);

    const toggleModal = () => {
        setModal(!modal)
    }

    const toggleRsvp = () => {
        setRsvp(true);
    }
    return(
        <div className="p-3">
            <div className="bg-secondary_bg rounded-sm p-2 flex flex-col gap-3">
            <div className="flex align-middle gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

           <p className="block">{convertDate(uniqueData.eventStartTime)} IST to</p>
           <p>{convertDate(uniqueData.eventEndTime)}</p>
           </div>
           <div className="flex align-middle gap-4">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p>{uniqueData?.address && uniqueData?.address}</p>
            <p>{uniqueData?.location && uniqueData?.location}</p>
           </div>
           <div className="flex align-middle gap-4">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

           <p>{uniqueData.price}</p>
           </div>
           </div>
           <div>
            <h2 className="font-semibold text-xl mt-7">Speakers:</h2>
            <div className="flex gap-3 mt-2">
            {
                uniqueData.speakers.map(({name,image,designation}) => {
                    return(
                        <div className="bg-secondary_bg w-fit p-1 rounded-md flex flex-col justify-center items-center w-36 align-middle">
                            <img src={image} className="w-16 h-16 rounded-full"/>
                            <p>{name}</p>
                            <p>{designation}</p>
                        </div>
                    )
                })
            }
            </div>
            {
                !isPassed &&  rsvp && <button className="rounded-md p-2 bg-button_bg text-secondary_bg flex justify-center items-center w-1/4 mt-2">Already RSVP</button>
            }
           
            {
               !isPassed &&  !rsvp &&
                <button onClick = {() => toggleModal()}
                className="rounded-md p-2 bg-button_bg text-secondary_bg mt-2 
                flex justify-center items-center w-1/4 ">RSVP</button>
            }
           </div>
           {
            modal && <Modal isPaid = {uniqueData.isPaid} uniqueData={uniqueData}
            toggleModal={toggleModal} toggleRsvp={toggleRsvp}/>
           }
        </div>
    )
}