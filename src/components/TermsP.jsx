export function TermsP(props) {
    return (
        <div className='mx-10 my-20'>
            <h1 className='text-3xl font-semibold text-orange-400 mb-3'>Artikel {props.title}</h1>
            <p className='text-lg mx-5 mb-10'>{props.text}</p>
        </div>
    )
}

export default TermsP;