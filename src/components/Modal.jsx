import { useState } from "react"

export const Modal = ({isPaid,uniqueData,toggleModal,toggleRsvp}) => {
    const [formData,setFormData]= useState({
        name : "",
        email : "",

    });
    console.log(toggleModal,uniqueData,toggleRsvp)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData?.name === "" || formData?.email === "") return;
        toggleModal(false)
        toggleRsvp(true)

    }

    return(
        <div className="flex justify-center items-center min-h-screen
         bg-primary_bg/[.30] fixed top-0 left-0 right-0 z-20" > 
          <form className="  p-3
        flex flex-col gap-3 justify-center rounded-md shadow-md shadow-primary_bg  z-30   bg-secondary_bg text-lg ml-2 mr-2" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="font-semibold text-xl">Complete your RSVP</h2>  
          <h3>Fill In Your Information</h3>
            <div>
                <h3>
                    Name:
                </h3>
                <input className="bg-primary_bg rounded-md w-full" type="text" 
                value = {formData?.name}
                onInput = {(e) => setFormData({...formData,name:e.target.value})}/>
            </div>
            <div>
                <h3>
                   Email:
                </h3>
                <input className="bg-primary_bg rounded-md w-full" type="email"
                 value = {formData?.email}
                 onInput = {(e) => setFormData({...formData,email:e.target.value})}/>
            </div>
            {
                isPaid && <h4>You have to make the payment at the venue</h4>
            }

                <button className="rounded-md p-3 bg-button_bg text-secondary_bg" >RSVP</button>
               
            </form>  

        </div>
    )
}