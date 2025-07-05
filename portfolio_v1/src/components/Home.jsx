import meImage from '../assets/me.jpg'
import './Home.css'

function Home() {
    return (
        <div id='sectionContainer'>
            <div id='textContainer'>
                <h3>Hi, i'm 
                    <h1 id="name">
                        Rebecca Li Beagley,
                    </h1>
                </h3>
                <h3>a 3rd year Computer Science student 
                    @uOttawa interested in 
                    software development, devops, and data.</h3>
            </div>
            <div id= 'photoContainer'>
                <img id='photoOfMe' src={meImage} 
                    alt="Photo of Rebecca Beagley" />
            </div>
        </div>

    );
}

export default Home;