import React from 'react'
import Search from './Search'
import logImg from '../../assets/lws.svg'
import searchIcon from '../../assets/search.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 align-center"
            >
                <Link to="/">
                    <img
                        className="h-10"
                        src={logImg}
                        alt="Learn with Sumit"
                    />
                </Link>
                {/* <Link className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/add-video"> Add Video </Link> */}
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search />

                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchIcon}
                        alt="Search"
                    />

                </div>
            </div>
        </nav>
    )
}

export default Navbar