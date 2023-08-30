import Logo from '/logo.svg';
import Socials from '../components/socials'
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import Insta from '../assets/ig.png';
import Facebook from '../assets/fb.png';
import ContactForm from '../components/ContactForm'

function Contact() {
    // Page title
    document.title = "Contact | Aannemersbedrijf";

    return (
        <div>
            <div className=" text-center">
                <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
                <p className="text-third text-lg leading-6 mx-2 md:mx-0 my-5">Of u nu op zoek bent naar stucwerk, aanbouw, uitbouw, trapbekleding of loodgieterswerk,
                    <br /> wij staan voor u klaar. Ook voor cv-ketels en grote dakklussen kunt u bij ons terecht.
                    <br /> Wij luisteren naar uw wensen en zetten ons in om uw visie te realiseren.</p>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-center mt-20 md:mt-40'>
                <div className='bg-lightorange text-center flex flex-col gap-5 h-full rounded-xl md:rounded-l-xl md:px-20 px-5 py-10'>
                    <img src={Logo} className='h-20 mb-10 border-b border-white pb-5' />
                    <div className='text-white text-center flex flex-col gap-10'>
                        <Socials />
                        <div className='flex gap-20 border-t justify-center border-white pt-5'>
                            <Link to={"/"}><img src={Facebook} /></Link>
                            <Link to={"/"}><img src={Insta} /></Link>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl py-10 bg-White px-5 md:px-10 shadow-ez'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}


export default Contact;