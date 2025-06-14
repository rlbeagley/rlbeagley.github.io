import './Section.css'

function Section(props) {
    return (
        <section id={props.id}>
            <div className='sectionContent' >
                <h1>{props.title}</h1>
                <div>{props.children}</div>
            </div>
        </section>
    );
}


export default Section;