import React from 'react';
import { Link } from 'react-router-dom';

import { menuSvg,closeSvg } from "../utils/svg";

interface IHeaderProps{

}


const Header:React.FC<IHeaderProps> = ():JSX.Element =>{

    const [menuOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
    <div>
        {/* sideMenu */}
            { menuOpen && (<div className="cursor-pointer h-full w-[20vw] fixed top-0 left-0" onClick={toggleMenu}></div>)}
       <div className={`bg-[#5A20CB] w-[80vw] fixed top-0 right-0 h-full z-10 p-5 duration-100 ease-in-out rounded text-slate-200 ${menuOpen ? 'translate-x-0':'translate-x-full'}`}>
            <div className="flex justify-between p-3 border-b-4 rounded">
            <h2 className="text-4xl font-bold"> Menu </h2>
            <div className="pt-3 duration-300 cursor-pointer hover:text-white " onClick={toggleMenu}>{closeSvg}</div>
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
        <div className="fixed top-0 left-0 right-0 p-3 text-white">
            <div className="flex justify-between p-2 border border-b-4 rounded border-b-slate-200">
                <Link to="/">
                    <div className="text-4xl font-bold tracking-wider cursor-pointer md:text-6xl ">StoryPedia</div>
                </Link>
                    <div
                        className='p-3 cursor-pointer md:hidden' onClick={toggleMenu}
                    >{menuSvg}</div>
            </div>
        </div>
    </div>
    )
}
export default Header;