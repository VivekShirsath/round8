import { useState } from "react"
import { Modal } from "./Modal";

export const Address = ({uniqueData}) => {
    const [modal,setModal] = useState(false);
    const [rsvp,setRsvp] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    const toggleRsvp = () => {
        setRsvp(true);
    }
    return(
        <div>
            <div>
           <p>{uniqueData.eventStartTime} to {uniqueData.eventEndTime}</p>
           <p>{uniqueData.address}</p>
           <p>{uniqueData.price}</p>
           </div>
           <div>
            <h2>Speakers:</h2>
            {
                uniqueData.speakers.map(({name,image,designation}) => {
                    return(
                        <div>
                            <img src={image} className="w-14"/>
                            <p>{name}</p>
                            <p>{designation}</p>
                        </div>
                    )
                })
            }
            {
                rsvp ? <button className="rounded-md p-3 bg-button_bg">Already RSVP</button>
                :
                <button onClick = {() => toggleModal()}
                className="rounded-md p-3 bg-button_bg">RSVP</button>
            }
           </div>
           {
            modal && <Modal isPaid = {uniqueData.isPaid} uniqueData={uniqueData}
            toggleModal={toggleModal} toggleRsvp={toggleRsvp}/>
           }
        </div>
    )
}