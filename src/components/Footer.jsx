import logo from '/fulllogo.png'
import { Link } from 'react-router-dom';
import Phone from '../assets/callB.png';
import Email from '../assets/emailB.png';
import Location from '../assets/locaB.png';

function Footer() {
    let ListStyle = "flex items-center gap-5";
    return (
        <div className="pt-20 pb-10 bg-White mt-20">
            <div className='flex justify-around'>
                <img src={logo} className='h-10 brightness-0' />
                <div className='flex flex-col gap-10'>
                    <h1 className='font-medium text-xl'>Diensten</h1>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className='font-medium text-xl'>Contact</h1>
                    <div className='flex flex-col gap-5'>
                        <Link to={"info@aannemersbedrijfyoursolutions.nl"} className={ListStyle}>
                            <img src={Email} alt="email icon" />
                            <p>info@aannemersbedrijfyoursolutions.nl</p>
                        </Link>
                        <div className={ListStyle}>
                            <img src={Location} alt="email icon" />
                            <p>Steenplaetstraat 6, 2288AA - Rijswijk</p>
                        </div>
                        <Link to={"tel:(+31)%20085-060%208725%20%20"} className={ListStyle}>
                            <img src={Phone} alt="email icon" />
                            <p>(+31) 085-060 8725</p>
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-third text-sm mt-20 border-t border-border pt-5 mx-10">© 2023 Aannemersbedrijf, Created By  <Link className='underline' to={"www.royalleasewebsites.com"}> Royal Lease Websites.</Link></p>
        </div>
    );
}

export default Footer;