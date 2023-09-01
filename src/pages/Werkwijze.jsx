import x from '/src/assets/call.png'

function Werkwijze() {
    return (
        <div>
            <h1 className="text-6xl font-semibold  text-center mb-20">Werkwijze</h1>
            <div className="w-1 h-full absolute left-1/2 mx-auto -z-10 bg-gray-400"></div>
            < div className='flex flex-col gap-40 mx-4 relative' >
                <div className='-my-5  lg:w-1/3 mx-auto'>
                    <div className='flex  flex-col text-center  items-center gap-3 '>
                        <div className="bg-gray-400 p-2 rounded-full">
                            <h1 className='w-8 h-8 text-white text-2xl font-semibold'>1</h1>
                        </div>
                        <div className='bg-white shadow px-2 py-1 rounded-md'>
                            <h1 className='text-2xl text-orange-400 mb-2 font-semibold'>U vult het online formulier in :</h1>
                            <p>Go to the services page and fill in the online form with your details.</p>
                        </div>
                    </div>
                </div>

                <div className='-my-5 lg:w-1/3 mx-auto'>
                    <div className='flex  flex-col text-center  items-center gap-3 '>
                        <div className="bg-gray-400 p-2 rounded-full">
                            <h1 className='w-8 h-8 text-white text-2xl font-semibold'>2</h1>
                        </div>
                        <div className='bg-white shadow px-2 py-1 rounded-md'>
                            <h1 className='text-2xl text-orange-400 mb-2 font-semibold'>Wij nemen contact op voor extra informatie :</h1>
                            <p>Zodra wij uw formulier ontvangen, zullen wij contact met u opnemen om eventuele aanvullende informatie te bespreken.</p>
                        </div>
                    </div>
                </div>

                <div className='-my-5 lg:w-1/3 mx-auto'>
                    <div className='flex  flex-col text-center  items-center gap-3 '>
                        <div className="bg-gray-400 p-2 rounded-full">
                            <h1 className='w-8 h-8 text-white text-2xl font-semibold'>3</h1>
                        </div>
                        <div className='bg-white shadow px-2 py-1 rounded-md'>
                            <h1 className='text-2xl text-orange-400 mb-2 font-semibold'>U ontvangt een offerte (richtprijs)</h1>
                            <p>Na het verzamelen van de benodigde gegevens sturen wij u een voorlopige offerte met een richtprijs voor het project.</p>
                        </div>
                    </div>
                </div>

                <div className='-my-5 lg:w-1/3 mx-auto'>
                    <div className='flex  flex-col text-center  items-center gap-3 '>
                        <div className="bg-gray-400 p-2 rounded-full">
                            <h1 className='w-8 h-8 text-white text-2xl font-semibold'>4</h1>
                        </div>
                        <div className='bg-white shadow px-2 py-1 rounded-md'>
                            <h1 className='text-2xl text-orange-400 mb-2 font-semibold'>Zodra het klopt en het binnen budget valt plannen we een afspraak om een vertegenwoordiger langs te laten komen:</h1>
                            <p>Als de voorlopige offerte naar tevredenheid is en binnen uw budget valt, zullen wij een afspraak regelen voor een bezoek van onze vertegenwoordiger.</p>
                        </div>
                    </div>
                </div>

                <div className='left-1/2 -my-5 lg:w-1/3 mx-auto'>
                    <div className='flex  flex-col text-center  items-center gap-3 '>
                        <div className="bg-gray-400  p-2 rounded-full">
                            <h1 className='w-8 h-8 text-white text-2xl font-semibold'>5</h1>
                        </div>
                        <div className='bg-white shadow px-2 py-1 rounded-md'>
                            <h1 className='text-2xl text-orange-400 mb-2 font-semibold'>U ontvangt de definitieve offerte nadat alles met de vertegenwoordiger doorgenomen is :</h1>
                            <p>Onze vertegenwoordiger zal alle details van het project met u doornemen. Na dit gesprek ontvangt u de definitieve offerte.</p>
                        </div>
                    </div>
                </div>

                <div className='left-1/2 -my-5 lg:w-1/3 mx-auto'>
                    <div className='flex  flex-col text-center  items-center gap-3 '>
                        <div className="bg-gray-400 p-2 rounded-full">
                            <h1 className='w-8 h-8 text-white text-2xl font-semibold'>6</h1>
                        </div>
                        <div className='bg-white shadow px-2 py-1 rounded-md'>
                            <h1 className='text-2xl text-orange-400 mb-2 font-semibold'>Bij akkoord van de offerte starten we met het plannen van het project :</h1>
                            <p>Als u akkoord gaat met de definitieve offerte, zullen wij het project in gang zetten en beginnen met de planning van de uitvoering.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1 h-full top-0 absolute left-1/2 mx-auto -z-10 bg-gray-400 "></div>
            </div >




            {/* FAQ */}

        </div >
    )
}

export default Werkwijze;