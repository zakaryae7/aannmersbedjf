// Import the images
import serviceImage1 from '../assets/images/Verbouwingen-en-renovaties.jpg';
import serviceImage2 from '../assets/images/Aanbouw-en-uitbreiding.jpg';
import serviceImage3 from '../assets/images/Uitbouw.avif';
import serviceImage4 from '../assets/Extra-kamers-toevoegen.avif';
import serviceImage5 from '../assets/images/Dakinspectie-en-onderhoud.jpg';
import serviceImage6 from '../assets/images/Schilder-en-stucwerk.avif';
import serviceImage7 from '../assets/images/Dakwerken.jpg';
import serviceImage8 from '../assets/images/Nieuwbouw.jpg';
import serviceImage9 from '../assets/images/Aanbouw.jpg';


const servicesData = [
    {
        id: 1,
        title: "Verbouwingen en renovaties",
        image: serviceImage1,
        description: "'Verbouwingen en renovaties' Houdt zich bezig met het vernieuwen en verbeteren van bestaande gebouwen. Dit omvat het aanpassen, herstellen en moderniseren van structuren om te voldoen aan nieuwe behoeften en normen.",
        miniservices: [
            // Mini services...
        ],
        diensten: 'Onder diensten :',
        btn: "/form/?s=Verbouwingen-en-renovaties"
    },
    {
        id: 2,
        title: 'Aanbouw en uitbreiding',
        diensten: 'Onder diensten :',
        image: serviceImage2,
        description: "'Aanbouw en uitbreiding' richt zich op het vergroten van bestaande gebouwen, met inbegrip van ontwerp en constructie van extra ruimtes voor functionele uitbreidingen.",
        miniservices: [
            "Extra kamers toevoegen"
        ],
        btn: "/form/?s=Aanbouw-en-uitbreiding"
    },
    {
        id: 3,
        title: 'Uitbouw',
        diensten: 'Onder diensten : ',
        btn: "/form/?s=Uitbouw",
        image: serviceImage3,
        description: "'Uitbouw' Betreft het vergroten van gebouwen door extra ruimte toe te voegen, vaak aan de achterkant van een bestaande structuur, om meer leefruimte te creëren.",
        miniservices: [
            // Mini services...
        ]
    },
    {
        id: 4,
        title: 'Extra kamers toevoegen',
        btn: "/form/?s=Extra-kamers-toevoegen",
        diensten: 'Onder diensten',
        image: serviceImage4,
        description: "'Extra kamers toevoegen' Omvat het ontwerpen en bouwen van nieuwe kamers in bestaande gebouwen om de functionaliteit en ruimte te vergroten.",
        miniservices: [
            // Mini services...
        ]
    },
    {
        id: 5,
        title: 'Dakinspectie en onderhoud',
        btn: "/form/?s=Dakinspectie-en-onderhoud",
        diensten: 'Onder diensten : ',
        image: serviceImage5,
        description: "'Dakinspectie en onderhoud' Omvat professionele beoordeling en zorg voor daken om schade te voorkomen of te herstellen, en hun levensduur te verlengen.",
        miniservices: [
            // Mini services...
        ]
    },
    {
        id: 6,
        title: 'Schilder en stucwerk',
        btn: "/form/?s=Schilder-en-stucwerk",
        diensten: 'Onder diensten :',
        image: serviceImage6,
        description: "'Schilder en stucwerk' Richt zich op het verbeteren van de esthetiek van oppervlakken door schilderen en stucwerk (pleisterwerk), wat zorgt voor zowel bescherming als visuele aantrekkingskracht.",
        miniservices: [
            // Mini services...
        ]
    },
    {
        id: 7,
        title: 'Dakwerken',
        btn: "/form/?s=Dakwerken",
        description: "'Nieuwbouw' Verwijst naar een dienstverlening die gericht is op dakwerkzaamheden. Dit omvat verschillende taken met betrekking tot het dak van een gebouw, zoals reparaties, onderhoud, renovaties, isolatie en installatie van nieuwe dakbedekking. Een dakwerken service biedt expertise en vakmanschap om ervoor te zorgen dat daken duurzaam, waterdicht en functioneel blijven. Of het nu gaat om platte daken, hellende daken, pannendaken of andere daktypes, een dakwerken service biedt oplossingen om de levensduur en de prestaties van het dak te verbeteren.",
        image: serviceImage7,
    },
    {
        id: 8,
        title: 'Nieuwbouw',
        btn: "/form/?s=Nieuwbouw",
        image: serviceImage8,
        description: "'Nieuwbouw' Betreft diensten voor het bouwen van nieuwe constructies, van ontwerp tot voltooiing. Dit omvat planning, coördinatie van vakmensen en kwaliteitsborging om te voldoen aan klantverwachtingen en bouwvoorschriften.",
    },
    {
        id: 9,
        title: 'Aanbouw',
        btn: "/form/?s=Aanbouw",
        image: serviceImage9,
        description: "'Een aanbouw' Focust op het uitbreiden van bestaande gebouwen. Dit omvat planning, ontwerp, en bouwwerkzaamheden om extra ruimte te creëren die naadloos aansluit bij het bestaande gebouw.",
    },
];

export default servicesData;
