import TermsData from '../components/TermsText'
import { TermsP } from '../components/TermsP'


function Terms() {
    return (
        <div>
            <h1 className="text-center text-4xl font-medium mb-10 -mt-10 underline">Algemene Voorwaarden Aannemersbedrijf Your Solutions B.V. :</h1>
            <p className='mx-10 text-center text-xl'>Laste wijziging : 01-03-2023</p>
            {TermsData.map(TermsData => (
                <TermsP
                    key={TermsData.key}
                    title={TermsData.title}
                    text={TermsData.text}
                />))}
        </div>
    )
}

export default Terms;