import './NavBar.css';
import { useState } from 'react';
const NavBar = () => {
    const tabs = ['Home','Skills', 'Experience', 'Projects', 'Links', 'Resume'];
    const [currentTab, setCurrentTab] = useState("Home");

    const handleClick = (tab) => {
        setCurrentTab(tab);
        const section = document.getElementById(tab.toLowerCase());
        section.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <nav className = 'navbar'>
            {tabs.map((tab) => (
                <button key={tab} onClick={()=> handleClick(tab)} 
                style= {{
                    backgroundColor: currentTab === tab ? '#FFFFFF' : '#F9E1E1' , 
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