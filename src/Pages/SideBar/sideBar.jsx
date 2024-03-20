import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFilm, faList, faHouse } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import '../../style/dark.css';
import './sideBar.css';
import { useState } from 'react';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const SideBar = () => {
    const [isclicked, setIsclicked] = useState(0);
    const [ishovered, setIshoverd] = useState(0);
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`${darkMode ?  'DarkModeSideBar' : 'LightModeSideBar'} h-screen w-1/5`}>
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
                        className="block"
                    >
                        <div className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': (isclicked === 0 || ishovered === 0)})} onMouseEnter={() => setIshoverd(0)} onMouseLeave={() => setIshoverd(null)} onClick={() => setIsclicked(0)}>
                            <FontAwesomeIcon icon={faHouse} className='w-5 h-5'/>
                            <button className='mx-2'>Dashboard</button>
                        </div>
                    </Link>
                    <Link 
                        to="/user" 
                        className="block"
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': (isclicked === 1 || ishovered === 1)})} onMouseEnter={() => setIshoverd(1)} onMouseLeave={() => setIshoverd(null)} onClick={() => setIsclicked(1)}>
                            <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
                            <button className='mx-2'>User</button>
                        </li>
                    </Link>
                    <Link 
                        to="/movie" 
                        className="block" 
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': (isclicked === 2 || ishovered === 2)})} onMouseEnter={() => setIshoverd(2)} onMouseLeave={() => setIshoverd(null)} onClick={() => setIsclicked(2)}>
                            <FontAwesomeIcon icon={faFilm} className='w-5 h-5'/>
                            <button className='mx-2'>Movie</button>
                        </li>
                    </Link>
                    <Link 
                        to="/category" 
                        className="block"
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': (isclicked === 3 || ishovered === 3)})} onMouseEnter={() => setIshoverd(3)} onMouseLeave={() => setIshoverd(null)} onClick={() => setIsclicked(3)}>
                            <FontAwesomeIcon icon={faList} className='w-5 h-5'/>
                            <button className='mx-2'>Category</button>
                        </li>
                    </Link>
                    <Link 
                        to="/actor" 
                        className="block"
                    >
                        <li className={[clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': (isclicked === 4 || ishovered === 4)})]} onMouseEnter={() => setIshoverd(4)} onMouseLeave={() => setIshoverd(null)} onClick={() => setIsclicked(4)}>
                            <FontAwesomeIcon icon={faUser} className='w-5 h-5'/>
                            <button className='mx-2'>Actor</button>
                        </li>
                    </Link>
                    <Link 
                        to="/director" 
                        className="block"
                    >
                        <li className={clsx("py-3 pl-3 hover:text-white hover:bg-[#3f4bb6] transition",{ 'selected': (isclicked === 5 || ishovered === 5)})} onMouseEnter={() => setIshoverd(5)} onMouseLeave={() => setIshoverd(null)} onClick={() => setIsclicked(5)}>
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