
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const IntroRight = () => {
    return (
        <div className='text-center mt-5 mb-5'>
        <h2 className='font-semibold text-xl inline'>Hi,This Is</h2>
        <Typewriter 
options={{

strings: ['<span style="color: black; font-weight: bold; font-size: 50px;">Tanvir Ahammed</span>'],
autoStart: true,
loop: true,
}}

/>
<h2 className='font-semibold text-xl'>A MERN Stack Developer</h2>
<Link to='/contact'>

<button className="btn btn-outline btn-primary mt-5 btn-sm font-bold">HIRE ME</button>
</Link>

    </div>
    );
};

export default IntroRight;