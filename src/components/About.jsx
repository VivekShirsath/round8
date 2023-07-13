
export const About = ({uniqueData}) => {
    console.log(uniqueData)
    return(
        <div className="flex flex-col w-2/4">
            <h1>{uniqueData.title}</h1>
            <h2>Hosted By :</h2>
            <p>{uniqueData.hostedBy}</p>
            <img src={uniqueData.eventThumbnail} className="w-64"/>
            <h2>Details:</h2>
            <p>{uniqueData.eventDescription}</p>
            <h2>Additional Information</h2>
            <div>
                <h3>Dress Code : {uniqueData.additionalInformation.dressCode}</h3>
                <h3>Age Limit : {uniqueData.additionalInformation.ageRestrictions}</h3>
            </div>
            <h2>Event Tags</h2>
            {
                uniqueData.eventTags.map((val) => <button className="rounded-md p-3 bg-button_bg w-fit p-3 mb-3 text-secondary_bg">{val}</button>)
            }
        </div>
    )
}