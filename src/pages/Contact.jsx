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
                <h1 className=" text-6xl font-bold">Contact</h1>
                <p className="text-third text-lg leading-6 my-5">Of u nu op zoek bent naar stucwerk, aanbouw, uitbouw, trapbekleding of loodgieterswerk,
                    <br /> wij staan voor u klaar. Ook voor cv-ketels en grote dakklussen kunt u bij ons terecht.
                    <br /> Wij luisteren naar uw wensen en zetten ons in om uw visie te realiseren.</p>
            </div>
            <div className='flex items-center justify-center mt-40'>
                <div className='bg-black text-center flex flex-col gap-5 h-full rounded-l-xl px-20 py-10'>
                    <img src={Logo} className='h-20 mb-10 border-b border-border pb-5' />
                    <div className='text-white text-center flex flex-col gap-10'>
                        <Socials />
                        <div className='flex gap-20 border-t justify-center border-border pt-5'>
                            <Link to={"/"}><img src={Facebook} /></Link>
                            <Link to={"/"}><img src={Insta} /></Link>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl py-10 bg-White px-10 shadow-ez'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}


export default Contact;