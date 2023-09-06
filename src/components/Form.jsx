import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        address: '',
        house_number: '',
        postcode: '',
        city: 'No city On this Form',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        description: '',
        domain_from : window.location.origin
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Send data to the backend
        const apiUrl = 'https://leads-admin-production.up.railway.app/api/create-message/';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Data sent successfully:', formData);
                    // You can handle success as needed, e.g., showing a success message.
                } else {
                    console.error('Failed to send data');
                    // Handle the error, e.g., displaying an error message.
                }
            })
            .catch(error => {
                console.error('An error occurred', error);
                // Handle network errors or other exceptions.
            });
    };




    const [state, handleSubmit] = useForm("mknlbwdk");
    if (state.succeeded) {
        return <div className='text-cente text-center'>
            <p className='text-xl mb-5'>Your request Have been sent successfuly! Our team will contact you soon.</p>
            <Link to={"/"} className=' text-white hover:bg-orange-600 duration-300 text-sm bg-lightorange px-4 rounded-3xl py-2'>Back to Home page</Link>
        </div>;
    }
    const inputstyle = "px-2 py-2 rounded shadow focus:outline-orange-400"
    const labelStyle = "text-lg font-medium mb-1 mt-3"
    var pathArray = window.location.search.split("?s=");

    return (
        <form onSubmit={handleFormSubmit} className='flex flex-col justify-center w-[90%] gap-5  lg:w-1/3 mx-auto'>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col w-[48%]'>
                    <label htmlFor="email" className={labelStyle}>
                        Uw voornaam
                    </label>
                    <input
                        type="name"
                        name="first_name"
                        className={inputstyle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col w-[48%]'>
                    <label htmlFor="email" className={labelStyle}>
                        Uw achternaam
                    </label>
                    <input
                        type="name"
                        name="last_name"
                        className={inputstyle}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col w-2/3'>
                    <label htmlFor="email" className={labelStyle}>
                        Straat + Huisnr
                    </label>
                    <input
                        type="address"
                        name="address"
                        className={inputstyle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col w-1/3'>
                    <label htmlFor="email" className={labelStyle}>
                        Postcode
                    </label>
                    <input
                        type="postcode"
                        name="postcode"
                        className={inputstyle}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className={labelStyle}>
                    Woonplaats
                </label>
                <input
                    type="residence"
                    name="house_number"
                    className={inputstyle}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className={labelStyle}>
                    Uw e-mail
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className={inputstyle}
                    onChange={handleChange}
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email" className={labelStyle}>
                    Uw telefoonnummer
                </label>
                <input
                    type="phone"
                    name="phone_number"
                    className={inputstyle}
                    onChange={handleChange}
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="message" className={labelStyle}>
                    Wat heeft u zelf in gedachten?
                </label>
                <textarea
                    name="description"
                    className={inputstyle + " h-40"}
                    onChange={handleChange}
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <input
                type="text"
                value={pathArray}
                name="service"
                hidden
            />
            <button type="submit" className='bg-orange-400 text-white py-2 ml-auto -mt-3 hover:bg-orange-600 duration-300 rounded w-max px-7 ' disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default Form;
