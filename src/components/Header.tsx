import React from 'react';
import { Link } from 'react-router-dom';

import { menuSvg,closeSvg } from "../utils/svg";

interface IHeaderProps{
    toggleAddForm: (e:React.SyntheticEvent) =>void,
}


const Header:React.FC<IHeaderProps> = ({toggleAddForm}):JSX.Element =>{

    const [menuOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
    <div>
        {/* sideMenu */}
            { menuOpen && (<div className="cursor-pointer h-full w-[20vw] fixed top-0 left-0" onClick={toggleMenu}></div>)}
       <div className={`bg-[#5A20CB] w-[80vw] fixed top-0 right-0 h-full z-20 p-5 duration-100 ease-in-out rounded text-slate-200 ${menuOpen ? 'translate-x-0':'translate-x-full'}`}>
            <div className="flex justify-between p-3 border-b-4 rounded">
            <h2 className="text-4xl font-bold"> Menu </h2>
            <div className="p-2 pt-3 duration-300 cursor-pointer hover:text-white" onClick={toggleMenu}>{closeSvg}</div>
            </div>
                    <div className="flex flex-col items-center justify-center my-10">
                        <Link to="/home" className="my-3 text-2xl font-bold hover:-translate-y-1 hover:text-blue-2000 duration-15">HOME</Link>
                        <div className="w-[90%] mx-auto h-1 bg-white rounded"></div>
                        <Link to="/about" className="my-3 text-2xl font-bold hover:-translate-y-1 hover:text-blue-200">ABOUT</Link>
                        <div className="w-[90%] mx-auto h-1 bg-white rounded"></div>
                        <Link to="/contact" className="my-3 text-2xl font-bold hover:-translate-y-1 hover:text-blue-200">CONTACT US</Link>
                    </div>
        </div>
        {/* header */}
        <div className="fixed top-0 left-0 right-0 z-10 p-3 text-white">
            <div className="flex justify-between p-2 border border-b-4 rounded border-b-slate-200 bg-slate-800">
                <Link to="/">
                    <div className="text-4xl font-bold tracking-wider cursor-pointer md:text-6xl md:p-6 ">StoryPedia</div>
                </Link>
                    <div
                        className='p-3 cursor-pointer md:hidden' onClick={toggleMenu}
                    >{menuSvg}</div>
                    <div className="hidden md:flex">
                        <ul className="flex flex-row items-center justify-center text-2xl">
                            <li className="p-4 mr-3 duration-200 rounded cursor-pointer hover:bg-slate-400 hover:border-b-4 hover:border-b-gray-300">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="p-4 mr-3 duration-200 rounded cursor-pointer hover:bg-slate-400 hover:border-b-4 hover:border-b-gray-300">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        {/* Add Button*/}
            <button onClick={toggleAddForm} className="md:hidden fixed bottom-[3vh] right-8 z-50 text-white rounded-full left-100 text-4xl bg-blue-500 px-8 py-4 active:bg-blue-300 duration-300 transition">
                +
        </button>
    </div>
    )
}
export default Header;