import './NavBar.css';
import {useState, useEffect} from 'react';


const NavBar = () => {
    const tabs = ['Home','About Me','Skills', 'Experience', 'Projects', 'Links', 'Resume'];
    const [currentTab, setCurrentTab] = useState("Home");

    // sets up observer
    useEffect( () => {

        // callback function that will change the state everytime a section is in view
        const observer = new IntersectionObserver(
            //  sections is a list of all sections that the observer has noticed change in
            (sections) => {
                sections.forEach((section) => {
                    if (section.isIntersecting) {
                        setCurrentTab(section.target.id.toLowerCase().replace(" ", ""));
                    }
                });
            }, { threshold: 0.5}
        );

        const sections = document.querySelectorAll('section[id]'); // returns list of all sections with ids.
        sections.forEach((section) => observer.observe(section)); // observe each section

        return () => observer.disconnect();

    }, []);

    const handleClick = (tab) => {
        setCurrentTab(tab.toLowerCase().replace(" ", ""));
        const section = document.getElementById(tab.toLowerCase().replace(" ", ""));
        section.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <nav className = 'navbar'>
            {tabs.map((tab) => (
                <button key={tab} onClick={()=> handleClick(tab)} 
                style= {{
                    backgroundColor: currentTab === tab.toLowerCase().replace(" ","") ? '#FFFFFF' : '#F9E1E1' , 
                    borderRadius: '22px 22px 0px 0px',
                    border: 'none'
                    
                }}>
                    {tab}
                </button>
            ))}
        </nav>
    );
}


export default NavBar;