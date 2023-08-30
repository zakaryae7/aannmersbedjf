import stepsData from './steptData';

export function Steps(props) {
    return (
        <div className='flex items-center'>
            <div className="bg-gray-400 p-2 rounded-full">
                <img src={x} />
            </div>
            <div
                title={props.title}
                image={props.image}
                text={props.text}>

            </div>
        </div>
    )
}
export default Steps;