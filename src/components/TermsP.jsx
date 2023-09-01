export function TermsP(props) {
    return (
        <div className='lg:mx-20 my-20 mx-5'>
            <h1 className='text-3xl font-semibold text-orange-400 mb-3'>Artikel {props.title}</h1>
            <p className='text-lg mx-5 mb-10'>{props.text}</p>
        </div>
    )
}

export default TermsP;