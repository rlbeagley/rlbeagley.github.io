import MyAvatar from './MyAvatar.jsx';
import './AboutMe.css';


export default function AboutMe() {
    return(
        <div className='container'>
            <div className='spline-container'>
                <MyAvatar/>
            </div>
            <div className='text-container'>
                <p>I’m currently a 2nd year pursuing an HBSc in Computer Science with Co-op.</p>
                <p>From the very beginning of my journey, its always been about the joy of creating. Nothing beats the satisfaction
                    of bringing my ideas to life! 
                </p>
                <p>Outside of coding, I enjoy painting, scrapbooking (honestly, all things creative), cooking, exploring the city, and playing tennis.  </p>
            </div>

        </div>
    );

}