import meImage from '../assets/me.jpg';
import scrapbookBackground from '../assets/homeBackground.png';
import TypingHome from '../components/TypingHome.jsx';
import './Home.css'

const Home = () => {
    return (
        <div id='sectionContainer'>
            <div id='contentWrapper'>
                <img id='scrapbookBackground' src={scrapbookBackground} />
                <div id='textContainer'>
                    <h3>Hi, i'm </h3>
                    <h2 id="name">
                            Rebecca Li Beagley,
                    </h2>
                    <h3>and I like to</h3>
                    <TypingHome />
                 </div>
            </div>
            
            
            <div id= 'photoContainer'>
                <img id='photoOfMe' src={meImage} 
                    alt="Photo of Rebecca Beagley" />
            </div>
        </div>

    );
}

export default Home;