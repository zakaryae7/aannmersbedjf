import { Link } from "react-router-dom";
import Build from '../assets/images/building.png'
import BuildingImg from '../assets/images/imgbuild.webp'
import Socials from '../components/socials'
import ContactForm from '../components/ContactForm'

function Home() {
    document.title = "Home | Aannemersbedrijf";


    return (
        <div>
            {/*  // MAIN CONTENT // */}
            <div className="flex items-center justify-around -mt-10 ">
                <div className="md:w-1/3 mx-20 w-full" id="currentpage">
                    <h1 className="md:text-6xl text-4xl font-bold my-2 md:text-start text-center">Welkom bij ons Aannemersbedrijf Your Solutions</h1>
                    <p className="font-medium text-third my-5 md:text-start text-center">Uw betrouwbare partner voor al uw bouw- en renovatiebehoeften. Met jarenlange ervaring en expertise in de bouwsector, zijn wij toegewijd aan het leveren van hoogwaardige diensten aan onze klanten.</p>
                    <div className="flex gap-7 md:justify-normal justify-center">
                        <Link to={"#"} className=' text-white hover:opacity-80 duration-300 text-sm bg-lightorange px-4 rounded-3xl py-2'>Bekijk diensten</Link>
                        <Link to={"/form/?s=Verbouwingen-en-renovaties"} className=' text-black hover:text-white hover:bg-third hover:border-third duration-300 text-sm border border-black px-4 rounded-3xl py-2'>Offerte aanvraag</Link>
                    </div>
                </div>
                <img src={Build} className="h-[600px] -z-10 md:block absolute md:relative md:opacity-100 opacity-20" />
            </div>

            {/* // STATS CONTENT // */}
            <div className="flex md:flex-row flex-col  gap-10 bg-White text-black py-10 px-10 md:px-20 justify-around my-40">
                <h1 className="text-xl font-semibold w-80">We hebben geweldige prestaties om te laten zien :</h1>
                <div>
                    <div className="border-t-[3px] border-lightorange  w-[40px] py-1"></div>
                    <h1 className="text-4xl font-bold mb-1 text-lightorange">1056+</h1>
                    <p className="text-sm">Afgemaakte projecten</p>
                </div>
                <div>
                    <div className="border-t-[3px] border-lightorange  w-[40px] py-1"></div>
                    <h1 className="text-4xl font-bold mb-1 text-lightorange">516+</h1>
                    <p className="text-sm">Werknemers</p>
                </div>
                <div>
                    <div className="border-t-[3px] border-lightorange  w-[40px] py-1"></div>
                    <h1 className="text-4xl font-bold mb-1 text-lightorange">86+</h1>
                    <p className="text-sm">Something</p>
                </div>
            </div>

            {/* // First Container // */}
            <div className="md:mx-20 mx-5 flex md:flex-row flex-col items-center gap-20 ">
                <img src={BuildingImg} className="w-99 shadow-ezze" />
                <div className="flex flex-col gap-5 md:text-start text-center md:items-start items-center">
                    <h1 className="text-3xl font-bold my-2">Bouw Op Onze Expertise Voor Uw Volgende Project</h1>
                    <p>Wij begrijpen dat een bouwproject een grote investering is, zowel financieel als emotioneel. Daarom streven wij ernaar om open en transparante communicatie te hebben met onze klanten gedurende het hele proces. Vanaf de eerste consultatie tot de oplevering van het project, kunt u rekenen op ons om u op de hoogte te houden van de voortgang en eventuele zorgen of vragen die u heeft te beantwoorden.
                        Onze expertise omvat een breed scala aan bouwprojecten, van nieuwbouw en renovatie tot interieurontwerp en meer. Wij zijn gepassioneerd over wat we doen en zetten ons in om onze klanten te helpen hun droomprojecten te realiseren.</p>
                    <Link to={"#"} className='animate-bounce w-max text-white hover:opacity-80 duration-300 text-sm bg-lightorange px-4 rounded-3xl py-2'>Bekijk diensten</Link>
                </div>
            </div>

            {/* Contact Section */}
            <div className='rounded-xl text py-10 bg-lightorange md:px-20 px-5 flex md:flex-row mx-2 flex-col text-White md:mx-5 lg:mx-20 items-center mt-40'>
                <div className="bg-darkblue flex flex-col gap-5">
                    <h1 className="text-4xl font-bold pt-3">Contactformulier</h1>
                    <p className="text-md text-lightgray md:w-1/2 mb-10">Of voor stucwerk, aanbouw, uitbouw, trapbekleding, loodgieterswerk, cv-ketels en dakklussen kunt u bij ons terecht. Wij luisteren naar uw wensen en realiseren uw visie.</p>
                    <Socials />
                </div>
                <div className="bg-White mt-20 md:mt-0 md:p-10 p-5 w-full rounded-lg text-black">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Home;