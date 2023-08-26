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
            <div className="flex items-center justify-around -mt-10">
                <div className="w-1/3 mx-20">
                    <h1 className="text-6xl font-bold my-2">Welkom bij ons Aannemersbedrijf Your Solutions</h1>
                    <p className="font-medium text-third my-5">Uw betrouwbare partner voor al uw bouw- en renovatiebehoeften. Met jarenlange ervaring en expertise in de bouwsector, zijn wij toegewijd aan het leveren van hoogwaardige diensten aan onze klanten.</p>
                    <div className="flex gap-7">
                        <Link to={"#"} className=' text-white hover:opacity-80 duration-300 text-sm bg-black px-4 rounded-3xl py-2'>Bekijk diensten</Link>
                        <Link to={"#"} className=' text-black hover:text-white hover:bg-third hover:border-third duration-300 text-sm border border-black px-4 rounded-3xl py-2'>Offerte aanvraag</Link>
                    </div>
                </div>
                <img src={Build} className="h-[500px]" />
            </div>

            {/* // STATS CONTENT // */}
            <div className="flex gap-10 bg-black text-White py-10 px-20 justify-around my-40">
                <h1 className="text-xl font-semibold w-80">We hebben geweldige prestaties om te laten zien :</h1>
                <div>
                    <div className="border-t-[3px] border-White w-[40px] py-1"></div>
                    <h1 className="text-4xl font-semibold mb-1">1056+</h1>
                    <p className="text-sm">Afgemaakte projecten</p>
                </div>
                <div>
                    <div className="border-t-[3px] border-White w-[40px] py-1"></div>
                    <h1 className="text-4xl font-semibold mb-1">516+</h1>
                    <p className="text-sm">Werknemers</p>
                </div>
                <div>
                    <div className="border-t-[3px] border-White w-[40px] py-1"></div>
                    <h1 className="text-4xl font-semibold mb-1">86+</h1>
                    <p className="text-sm">Something</p>
                </div>
            </div>

            {/* // First Container // */}
            <div className="mx-20 flex items-center gap-20">
                <img src={BuildingImg} className="w-[650px] shadow-ezz" />
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold my-2">Bouw Op Onze Expertise Voor Uw Volgende Project</h1>
                    <p>Wij begrijpen dat een bouwproject een grote investering is, zowel financieel als emotioneel. Daarom streven wij ernaar om open en transparante communicatie te hebben met onze klanten gedurende het hele proces. Vanaf de eerste consultatie tot de oplevering van het project, kunt u rekenen op ons om u op de hoogte te houden van de voortgang en eventuele zorgen of vragen die u heeft te beantwoorden.
                        Onze expertise omvat een breed scala aan bouwprojecten, van nieuwbouw en renovatie tot interieurontwerp en meer. Wij zijn gepassioneerd over wat we doen en zetten ons in om onze klanten te helpen hun droomprojecten te realiseren.</p>
                    <Link to={"#"} className='animate-bounce w-max text-white hover:opacity-80 duration-300 text-sm bg-black px-4 rounded-3xl py-2'>Bekijk diensten</Link>
                </div>
            </div>

            {/* Contact Section */}
            <div className='rounded-xl text py-10 bg-black px-20 flex text-White mx-20 items-center mt-40'>
                <div className="bg-black flex flex-col gap-5">
                    <h1 className="text-4xl font-bold py-3">Contactformulier</h1>
                    <p className="text-lg text-third w-1/2 mb-4">Of voor stucwerk, aanbouw, uitbouw, trapbekleding, loodgieterswerk, cv-ketels en dakklussen kunt u bij ons terecht. Wij luisteren naar uw wensen en realiseren uw visie.</p>
                    <Socials />
                </div>
                <div className="bg-White p-10 rounded-lg     text-black">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Home;