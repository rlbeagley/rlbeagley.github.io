import "./Job.css";
import {motion} from 'framer-motion';


export default function Job({title, employer, startDate, endDate, image, imageAlt, descList}) {
    return(
        <motion.div className="jobContainer" 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <div>
                <img className="jobPic"  src={image} alt={imageAlt}/>
            </div>
            <div className="jobText">
                <h1>
                    {title}
                </h1>   
                <div className="subTitles">
                    <h2>{employer}</h2>
                    <h2>{startDate} -- {endDate} </h2>
                </div>
                    <ul className="descList">
                        {descList.map((descPoint, index) => ( <li key={index}>
                            {descPoint}
                        </li>))}
                    </ul>
            </div>
        </motion.div>
    );
}