import { faBell, faMagnifyingGlass, faMoon, faSun, faUser, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const NavBar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const [inputValue, setInputValue] = useState('');
    const [expanded, setExpanded] = useState(false);
    const [mode, setMode] = useState(true);

    const handleInputClick = () => {
        setExpanded(!expanded);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleDeleteInput = () => {
        setInputValue('');
    };
    const handleChangeMode = () => {
        setMode(!mode);
    }
    return (
        <div className='flex items-center justify-end'>
            <div className='h-12 border-gray-300 flex items-center text-sm text-gray-600 m-3 py-6 px-2 bg-white border-b rounded-full'>
                <div className='bg-[#f4f7fe] flex items-center p-2 rounded-full mr-2'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={inputValue}
                        onChange={handleInputChange}
                        className={`bg-[#f4f7fe] mx-3 outline-none focus:placeholder-gray-400 transition-all duration-300 ${expanded ? 'w-56' : 'w-24'}`}
                        onClick={handleInputClick}
                        />
                    <FontAwesomeIcon icon={faXmarkCircle} className='w-5 h-5 text-black cursor-pointer' onClick={handleDeleteInput}/>
                </div>
                <div className='flex items-center mr-2 cursor-pointer' onClick={handleChangeMode}>
                    {mode ? 
                        <FontAwesomeIcon icon={faMoon} className='w-5 h-5 text-black' onClick={() => dispatch({ type: "TOGGLE" })}/>
                        :
                        <FontAwesomeIcon icon={faSun} className='w-5 h-5 text-black' onClick={() => dispatch({ type: "TOGGLE" })}/>
                    }
                </div>
                <div className='flex items-center mr-2 cursor-pointer relative'>
                    <FontAwesomeIcon icon={faBell} className='w-5 h-5 text-black'/>
                    <div className='w-4 h-4 bg-red-500 rounded-full text-white flex items-center justify-center text-xs font-bold absolute top-1 right-1 -mt-2 -mr-2'>3</div>
                </div>
                <div className='flex items-center mr-2 cursor-pointer'> 
                    <FontAwesomeIcon icon={faUser} className='w-5 h-5 text-black'/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;