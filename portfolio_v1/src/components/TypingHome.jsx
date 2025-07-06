import { TypeAnimation } from 'react-type-animation';

const TypingHome = () => {
    return (
    <TypeAnimation
        sequence={[
            'code', // Types 'One'
            1500, // Waits 1s
            'design', // Deletes 'One' and types 'Two'
            1500, // Waits 2s
            'automate', // Types 'Three' without deleting 'Two'
            1500,
            'analyze',
            1500,
            'create!',
            () => {
            console.log('Sequence completed');
            },
        ]}
        wrapper="h3"
        cursor={true}
        speed={20}
        repeat={0}
        style={{ fontSize: '2.5em', display: 'inline-block'}}
    />
    );
}


export default TypingHome;