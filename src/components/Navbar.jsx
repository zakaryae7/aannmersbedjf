import logo from '/Logo.png'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='flex items-center mx-20 my-4 justify-between mb-40 '>
            <Link to={"/"}><img src={logo} alt="aannemersbedrijf logo" className='cursor-pointer' /></Link>
            <ul className=' gap-5 text-sm font-medium text-third hover:text-black duration-300 flex -md:hidden'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/diensten'}><li>Diensten</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
            </ul>
            <Link to={"#"} className='animate-pulse text-white hover:opacity-80 duration-300 text-sm bg-black px-4 rounded-3xl py-2'>Offerte aanvraag</Link>
        </div>
    );
}

export default Navbar;