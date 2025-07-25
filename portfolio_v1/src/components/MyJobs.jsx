import Job from './Job.jsx'
import campPhoto from '../assets/The STEAM Project - Richland Academy - Session 2 - 43.jpg'

export default function MyJobs() {
    return (
        <>
        <Job title="Camp Counsellor" employer="The STEAM Project" startDate="March 2023" endDate="August 2024" description="fun" image={campPhoto} ></Job>
        </>
    );
}