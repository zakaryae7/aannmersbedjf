import { Link } from 'react-router-dom'
function PageNotFound() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold ">Error 404 !</h1>
            <h1 className="text-xl font-semibold mb-5">Page Not found</h1>
            <Link to={"/"} className=' text-white hover:opacity-80 duration-300 text-sm bg-lightorange px-4 rounded-3xl py-2'>Back to Home page</Link>
        </div>
    );
}

export default PageNotFound;