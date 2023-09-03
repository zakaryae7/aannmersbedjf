import { Link } from 'react-router-dom';
import React from 'react';
import './style.css'; // Replace 'styles.css' with the path to your CSS file.

export function ServicesP(props) {
  return (
    <div>
      <div className="lg:m-20 mx-5 mt-20">
        <h1 className="text-orange-400 text-3xl font-semibold">
          <span>{props.id}-</span> {props.title}
        </h1>
        <div className='flex lg:flex-row flex-col justify-around items-center'>
          <img src={props.src} className='shadow-ezze my-5 lg:w-[500px] w-80' />
          <div className='lg:w-1/3 text-center lg:text-left justify-center lg:justify-normal flex flex-col gap-5'>
            <p>{props.description}</p>
            <Link to={props.btn} className=' bg-orange-400 hover:bg-orange-600 lg:w-max duration-300 px-2 py-1.5 rounded text-white font-medium'>
              Offerte aanvraag
            </Link>
          </div>
        </div>
      </div>
      {props.services && props.services.length > 0 && (
        <div className="mt-5 mx-20 text-xl">
          <h2 className="text-3xl mb-5 font-semibold text-orange-400">Mini-Services:</h2>
          <ul className="">
            {props.services.map((miniservice, index) => (
              <li key={index} className="mini-service-item text-black">{miniservice}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ServicesP;
