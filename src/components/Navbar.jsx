import logo from '/Logoor.png'
import menu from '/menu.svg'
import { Link } from "react-router-dom";


function Navbar() {

    const showNav = () => {
        let menu = document.getElementById("zz")
        menu.classList.toggle('ass');
    }

    const styling = " hover:text-lightorange duration-300 cursor-pointer";

    return (
        <div className='overflow-hidden  flex items-center md:mx-20 mx-10  my-4 justify-between mb-40'>
            <Link to={"/"}><img src={logo} alt="aannemersbedrijf logo" className='cursor-pointer' /></Link>
            <ul className='md:flex hidden gap-5 text-sm font-medium text-third hover:text-black duration-300'>
                <Link to={'/'}><li className={styling}>Home</li></Link>
                <Link to={'/diensten'}><li className={styling}>Diensten</li></Link>
                <Link to={'/werkwijze'}><li className={styling}>Werkwijze</li></Link>
                <Link to={'/contact'}><li className={styling}>Contact</li></Link>
            </ul>
            <img src={menu} className=' h-8 cursor-pointer md:hidden' onClick={showNav}/>

            <ul  id='zz' className='z-10 gap-10 hidden absolute top-0 right-0 text-center bg-zzz w-full h-full flex-col text-lg mt-20 translate-x-[750px] font-medium text-third hover:text-black duration-300'>
                <Link to={'/'}><li className={styling + " pt-20"}>Home</li></Link>
                <Link to={'/diensten'}><li className={styling}>Diensten</li></Link>
                <Link to={'/werkwijze'}><li className={styling}>Werkwijze</li></Link>
                <Link to={'/contact'}><li className={styling}>Contact</li></Link>
            </ul>
        </div>
    );
}

export default Navbar;