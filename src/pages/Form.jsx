import Forms from '../components/Form'

function Form() {
    var pathArray = window.location.search.split("?s=");

    return (
        <div>
            <h1 className="text-center text-3xl lg:text-6xl font-medium mb-10 -mt-10">Offerte aanvraag - 
                <span className='text-orange-400'> {pathArray}</span>
            </h1>
            <Forms />
        </div>
    )
}
export default Form;