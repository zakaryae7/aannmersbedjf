import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xvojadko");
    if (state.succeeded) {
        return <div className='absolute bottom-7 right-7 text-center py-5 px-4 rounded-lg bg-border '>
            Thank you for chosing Us. <br />
            Your message is successfuly sent ! <br />
            <button className='bg-black text-white px-4 py-1 mt-3 rounded-lg'>Close</button>
        </div>;
    }

    //Styles variables
    let inputClass = "border border-border rounded focus:outline-none py-1 px-2 w-full mb-5 mt-1";

    return (
        <div>
            <form
                className='flex flex-col'
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">
                    Naam
                    <input
                        required
                        type="name"
                        name="name"
                        className={inputClass}
                    />
                </label>
                <label htmlFor="email">
                    E-mail
                    <input
                        required
                        type="email"
                        name="email"
                        className={inputClass}
                    />
                </label>
                <label htmlFor="email">
                    Telefoonnummer
                    <input
                        required
                        type="phone"
                        name="phone"
                        className={inputClass}
                    />
                </label>
                <ValidationError
                    prefix="phonenumber"
                    field="phonenumber"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Wat heeft u in gedachten?
                    <textarea
                        required
                        id="message"
                        name="message"
                        className={inputClass + " placeholder:text-sm h-40"}
                        placeholder='Probeer ons zoveel mogelijk informatie te geven voor een zo exact mogelijke prijsopgave.'
                    />
                </label>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button
                    type="submit"
                    className='bg-black text-white w-max px-6 py-1.5 rounded ml-auto -mt-2 hover:opacity-80 duration-300'
                    disabled={state.submitting}>Bekijk diensten</button>
            </form>
        </div>
    );
}

export default ContactForm;