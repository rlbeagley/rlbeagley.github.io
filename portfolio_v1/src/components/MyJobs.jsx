import Job from './Job.jsx'
import './MyJobs.css'
import campPhoto from '../assets/The STEAM Project - Richland Academy - Session 2 - 43.jpg'
import brookfieldPhoto from '../assets/brookfieldRenewableLogo.png'

export default function MyJobs() {
    const steamDesc=[<>Adapted <b>communication</b> and <b>problem-solving</b> approaches to support individual camper needs, building strong <b>interpersonal</b> and <b>leadership </b>skills.</>,
<><b>Managed time</b> effectively while <b>leading</b> and <b>organizing</b> daily activities, ensuring a safe, engaging, and well-run environment.</>, <><b>Created a fun environment</b> for campers to create life-long memories.</>];
    const brookfieldDesc=[<><b>Created and optimized PowerShell scripts</b> to <b>automate</b> repetitive tasks such as formatting and updating offboarding reports and software installation.</>, <><b>Tested and debugged</b> software as a part of the company's pilot testing team, ensuring that the software was efficient and foolproof before company-wide deployment through <b>Azure.</b></>, <><b>Diagnosed and resolved hardware issues</b> promptly, ensuring a smooth and <b>positive experience</b> for end users.</>,<>Created official and organized documentation for the <b>cybersecurity</b> team.
</>];
    return (
        <div>
        <Job title="IT Analyst, End User Services" employer="Brookfield Renewable - Co-op" startDate="May 2025" endDate="August 2025" image={brookfieldPhoto} imageAlt="Brookfield Renewable logo" descList={brookfieldDesc}></Job>
        <Job title="Camp Counsellor" employer="The STEAM Project" startDate="March 2023" endDate="August 2024" image={campPhoto} imageAlt="Photo of Rebecca working at STEAM as a counsellor"descList={steamDesc}></Job>
        </div>
    );
}