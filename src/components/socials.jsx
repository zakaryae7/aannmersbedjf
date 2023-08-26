import Phone from '../assets/call.png';
import Email from '../assets/email.png';
import Location from '../assets/loca.png';
import { Link } from 'react-router-dom';

function Socials() {
    let ListStyle = "hover:outline hover:outline-1 hover:rounded-lg duration-300 p-2 flex items-center gap-2";
    return (
        <div className='text-white text-center flex flex-col gap-10 w-max'>
            <div className='flex flex-col gap-10'>
                <Link to={"www.google.com"} target="_blank" className={ListStyle}>
                    <img src={Email} alt="email icon" />
                    <p>info@aannemersbedrijfyoursolutions.nl</p>
                </Link>
                <Link className={ListStyle}>
                    <img src={Location} alt="email icon" />
                    <p>Steenplaetstraat 6, 2288AA - Rijswijk</p>
                </Link>
                <Link to={"tel:(+31)%20085-060%208725%20%20"} className={ListStyle}>
                    <img src={Phone} alt="email icon" />
                    <p>(+31) 085-060 8725</p>
                </Link>
            </div>

        </div>
    );
}

export default Socials;