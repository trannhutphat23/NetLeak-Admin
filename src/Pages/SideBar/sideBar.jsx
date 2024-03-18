import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFilm, faList, faHouse } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import './navBar.css'
import { useState } from 'react';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const SideBar = () => {
    const [isclicked, setIsclicked] = useState(null);
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`${darkMode ?  'bg-white' : 'bg-[#28273f] text-white'} h-screen w-1/5`}>
            <div className='py-4 font-bold text-center m-4'>
                <Link to="/" >
                    <span>NETLEAK DASHBOARD</span>
                </Link>
            </div>
            <hr/>
            <div className='flex-col'>
                <ul>
                    <Link 
                        to="/" 
                        className="block my-3"
                    >
                        <div className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': isclicked === 0})} onMouseEnter={() => setIsclicked(0)} onMouseLeave={() => setIsclicked(null)}>
                            <FontAwesomeIcon icon={faHouse} className='w-5 h-5'/>
                            <button className='mx-2'>Dashboard</button>
                        </div>
                    </Link>
                    <Link 
                        to="/user" 
                        className="block my-3"
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': isclicked === 1})} onMouseEnter={() => setIsclicked(1)} onMouseLeave={() => setIsclicked(null)}>
                            <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
                            <button className='mx-2'>User</button>
                        </li>
                    </Link>
                    <Link 
                        to="/movie" 
                        className="block my-3" 
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': isclicked === 2})} onMouseEnter={() => setIsclicked(2)} onMouseLeave={() => setIsclicked(null)}>
                            <FontAwesomeIcon icon={faFilm} className='w-5 h-5'/>
                            <button className='mx-2'>Movie</button>
                        </li>
                    </Link>
                    <Link 
                        to="/category" 
                        className="block my-3"
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': isclicked === 3})} onMouseEnter={() => setIsclicked(3)} onMouseLeave={() => setIsclicked(null)}>
                            <FontAwesomeIcon icon={faList} className='w-5 h-5'/>
                            <button className='mx-2'>Category</button>
                        </li>
                    </Link>
                    <Link 
                        to="/actor" 
                        className="block my-3"
                    >
                        <li className={[clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': isclicked === 4})]} onMouseEnter={() => setIsclicked(4)} onMouseLeave={() => setIsclicked(null)}>
                            <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
                            <button className='mx-2'>Actor</button>
                        </li>
                    </Link>
                    <Link 
                        to="/director" 
                        className="block my-3"
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': isclicked === 5})} onMouseEnter={() => setIsclicked(5)} onMouseLeave={() => setIsclicked(null)}>
                            <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
                            <button className='mx-2'>Director</button>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;