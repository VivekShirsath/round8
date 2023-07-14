
export const About = ({uniqueData}) => {
    console.log(uniqueData)
    return(
        <div className="flex flex-col w-2/4 p-3 gap-3">
            <h1 className="text-2xl font-semibold">{uniqueData.title}</h1>
            <h2>Hosted By :</h2>
            <p className="font-semibold text-lg">{uniqueData.hostedBy}</p>
            <img src={uniqueData.eventThumbnail} className="w-96"/>
            <h2 className="font-semibold text-2xl">Details:</h2>
            <p>{uniqueData.eventDescription}</p>
            <h2 className="font-semibold text-xl">Additional Information</h2>
            <div>
                <h3><span className="font-semibold text-lg">Dress Code</span> : {uniqueData.additionalInformation.dressCode}</h3>
                <h3><span className="font-semibold text-lg">Age Limit</span> : {uniqueData.additionalInformation.ageRestrictions}</h3>
            </div>
            <h2 className="font-semibold text-lg">Event Tags :</h2>
            <div className="flex gap-3 ">
            {
                uniqueData.eventTags.map((val) => <button className="rounded-md p-3 bg-button_bg w-fit p-3 mb-3 text-secondary_bg">{val}</button>)
            }
            </div>
        </div>
    )
}