import "./Job.css"

export default function Job({title, employer, startDate, endDate, image, description}) {
    return(
        <div className="jobContainer">
            <div><img className="jobPic"  src={image} /></div>
            <div>
                <h1>
                    {title}
                </h1>
                <div className="subTitles">
                    <h2>{employer}</h2>
                    <h2>{startDate} -- {endDate} </h2>
                </div>
                <body>
                    {description}
                </body>
            </div>
        </div>
    );
}