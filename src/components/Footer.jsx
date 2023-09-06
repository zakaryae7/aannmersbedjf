import logo from '/fulllogo.png'
import { Link } from 'react-router-dom';
import Phone from '../assets/callB.png';
import Email from '../assets/emailB.png';
import Location from '../assets/locaB.png';

function Footer() {
    let ListStyle = "flex items-center gap-5";
    return (
        <div className="pt-20 pb-10 bg-White mt-20 px-10">
            <div className='flex justify-around md:flex-row flex-col gap-20'>
                <img src={logo} className='h-10 brightness-0 w-max mb-10' />
                <div className='flex flex-col gap-10'>
                    <h1 className='font-medium text-xl'>Diensten</h1>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li>Toilet-en badkamer renovaties</li>
                        <li>Pleisterwerk</li>
                        <li>Stormschade</li>
                        <li>Plat Dak</li>
                        <li>Loodwerkzaamheden</li>
                        <li>Dakinspactie</li>
                        <li>Vloerverwarming</li>
                        <li>Installatie werk</li>
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

                        <p>KvK nummer: 85545783 </p>
                            <p>BTW nummer: NL864888016B01</p>
                    </div>
                </div>
            </div>
            <div className='border-t border-border text-center lg:text-start mt-20 pt-5 lg:mx-10 flex gap-5 lg-flex-row flex-col justify-between'>
                <p className="text-third text-sm ">© 2023 Aannemersbedrijf, Created By  <Link className='underline' to={"https://www.royalleasewebsites.com"}> Royal Lease Websites.</Link></p>
                <Link to={"/terms"}>
                    <p className='text-third text-sm underline hover:text-orange-400 duration-300 cursor-pointer'>Algemene Voorwaarden</p>
                </Link>
            </div>
        </div>
    );
}

export default Footer;